import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateStudentDto } from './dto/create-student.dto';
import { UpdateStudentDto } from './dto/update-student.dto';

import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { IStudent } from './interfaces/student.interface';

@Injectable()
export class StudentsService {
  //////
  constructor(@InjectModel('students')
  private studentModel: Model<IStudent>)
  {}

  async createStudent(createStudentDto: CreateStudentDto):Promise<IStudent> {
    const newStudent=new this.studentModel(createStudentDto)
    return await newStudent.save();
  }

  async findAllStudents():Promise<IStudent[]> {
    const studentData=await this.studentModel.find().exec();
    if(!studentData || studentData.length===0){
      throw new NotFoundException('No students found !')
    }
    return studentData;
  }

  async findOneStudent(studentId: string):Promise<IStudent> {
    const existingStudent=await this.studentModel.findById(studentId).exec();
    if(!existingStudent){
      throw new NotFoundException('Student not found !')
    }
    return existingStudent;
  }

  async updateStudent(studentId: string, updateStudentDto: UpdateStudentDto):Promise<IStudent> {
    const student=await this.studentModel.findByIdAndUpdate(studentId,updateStudentDto);
    if(!student){
      throw new NotFoundException("Unable to update the data")
    }
    return student;
  }

  async removeStudent(studentId: string):Promise<IStudent> {
    const deletedStudent=await this.studentModel.findByIdAndDelete(studentId).exec();
    if(!deletedStudent){
      throw new NotFoundException('Student can not be deleted ! ')
    }
    return deletedStudent;
  }
}
