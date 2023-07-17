import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateCourseDto } from './dto/create-course.dto';
import { UpdateCourseDto } from './dto/update-course.dto';

import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { ICourse } from './interfaces/course.interface';
import { unlink } from 'fs';
import { join } from 'path';
import { ICategorie } from 'src/categories/interfaces/categorie.interface';

@Injectable()
export class CoursesService {
  //////
  constructor(@InjectModel('courses')
  private courseModel: Model<ICourse>,
  ///relation one to many
  @InjectModel('categories')
  private categoryModel: Model<ICategorie>
  ) {}

  async createCourse(createCourseDto: CreateCourseDto):Promise<ICourse> {
    const newCourse=new this.courseModel(createCourseDto)
    await this.categoryModel.updateOne({_id:createCourseDto.category},
      {$push:{courses:newCourse._id}})
    return await newCourse.save();
  }

  async findAllCourses():Promise<ICourse[]> {
    const courseData=await this.courseModel.find().exec();
    if(!courseData || courseData.length===0){
      throw new NotFoundException('No Courses found !')
    }
    return courseData;
  }

  async findOneCourse(courseId: string):Promise<ICourse> {
    const existingCourse=await this.courseModel.findById(courseId).exec();
    if(!existingCourse){
      throw new NotFoundException('Course not found !')
    }
    return existingCourse;
  }

  async updateCourse(courseId: string, updateCourseDto: UpdateCourseDto):Promise<ICourse> {
    const course=await this.courseModel.findByIdAndUpdate(courseId,updateCourseDto);
    if(!course){
      throw new NotFoundException("Unable to update the course")
    }
    return course;
  }

  async removeCourse(courseId: string):Promise<ICourse> {
    const deletedCourse=await this.courseModel.findByIdAndDelete(courseId).exec();
    ///pour supprimer photo a partir du dossier 
    unlink(join(process.cwd(),"./upload/courses/"+deletedCourse.file),
    (err)=>{
      if(err){
        console.error(err)
        return err
      }
    })
    /////////pull/////////////////////////
    await this.categoryModel.updateOne({_id:deletedCourse.category},
      {$pull:{courses:deletedCourse._id}})
    /////////////////////////////////////
    if(!deletedCourse){
      throw new NotFoundException('Course can not be deleted ! ')
    }
    return deletedCourse;
  }
}
