import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateSectionDto } from './dto/create-section.dto';
import { UpdateSectionDto } from './dto/update-section.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { ISection } from './interfaces/section';
import { unlink } from 'fs';
import { join } from 'path';
import { ICourse } from 'src/courses/interfaces/course.interface';


@Injectable()
export class SectionsService {
  //////
  constructor(@InjectModel('sections')
  private sectionModel: Model<ISection>,
/////relation one to many
  @InjectModel('courses')
  private courseModel: Model<ICourse>
  ) {}

  async createSection(createSectionDto: CreateSectionDto):Promise<ISection> {
    const newSection=new this.sectionModel(createSectionDto)
    //relation one to many
    await this.courseModel.updateOne({_id:createSectionDto.course},
      {$push:{sections:newSection._id}})
    /////
    return await newSection.save();
  }

  async findAllSections():Promise<ISection[]> {
    const sectionData=await this.sectionModel.find().exec();
    if(!sectionData || sectionData.length===0){
      throw new NotFoundException('No sections found !')
    }
    return sectionData;
  }

  async findOneSection(sectionId: string) :Promise<ISection> {
    const existingSection=await this.sectionModel.findById(sectionId).exec();
    if(!existingSection){
      throw new NotFoundException('Section not found !')
    }
    return existingSection;
  }

  async updateSection(sectionId: string, updateSectionDto: UpdateSectionDto):Promise<ISection> {
    const Section=await this.sectionModel.findByIdAndUpdate(sectionId,updateSectionDto);
    if(!Section){
      throw new NotFoundException('Unable to Update the data !')
    }
    return Section;
  }

  async removeSection(sectionId: string):Promise<ISection>  {
    const deletedSection=await this.sectionModel.findByIdAndDelete(sectionId).exec();
    ///pour supprimer photo a partir du dossier 
    unlink(join(process.cwd(),"./upload/sections/"+deletedSection.file),
    (err)=>{
      if(err){
        console.error(err)
        return err
      }
    })
    /////////pull/////////////////////////
    await this.courseModel.updateOne({_id:deletedSection.course},
      {$pull:{sections:deletedSection._id}})
    //////////////////////////////////
    if(!deletedSection){
      throw new NotFoundException('Section can not be deleted cause it does not exist !')
    }
    return deletedSection;
  }
}
