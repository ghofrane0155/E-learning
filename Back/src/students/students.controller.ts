import { Controller, Get, Post, Body, Patch, Param, Delete, Res, HttpStatus } from '@nestjs/common';
import { StudentsService } from './students.service';
import { CreateStudentDto } from './dto/create-student.dto';
import { UpdateStudentDto } from './dto/update-student.dto';

@Controller('students')
export class StudentsController {
  constructor(private readonly studentsService: StudentsService) {}

  @Post()
  async createStudent(@Res() response, @Body() createStudentDto: CreateStudentDto) {
    try {
      const newStudent=await this.studentsService.createStudent(createStudentDto)
      response.status(HttpStatus.CREATED).json({
        message:'New student created successfully',
        status:HttpStatus.CREATED,
        data:newStudent
      })
    } catch (error) {
      return response.status(HttpStatus.BAD_REQUEST).json({
        message:error.message,
        status:HttpStatus.BAD_REQUEST,
        data:null
      });
    }
  }

  @Get()
  async findAllStudents(@Res() response) {
    try{
      const studentsData = await  this.studentsService.findAllStudents();
      return response.status(HttpStatus.OK).json({
        message:'Students found successfully',
        status:HttpStatus.OK,
        data:studentsData
      })   
    } catch (error) {
      return response.status(HttpStatus.BAD_REQUEST).json({
        message:error.message,
        status:HttpStatus.BAD_REQUEST,
        data:null
      })      
    }
  }

  @Get(':id')
  async findOneStudent(@Param('id') studentId: string,@Res() response) {
    try {
      const existingStudent=await this.studentsService.findOneStudent(studentId);
      return response.status(HttpStatus.OK).json({
        message:'Student found successfully ',
        status:HttpStatus.OK,
        data:existingStudent
      })
    } catch (error) {
      return response.status(HttpStatus.BAD_REQUEST).json({
        message:'Student does not exist!!',
        status:HttpStatus.BAD_REQUEST,
        data:null
      })      
    }
  }

  @Patch(':id')
  async updateStudent(@Param('id') studentId: string, @Body() updateStudentDto: UpdateStudentDto,@Res() response) {
    try {
      const updatedStudent=await this.studentsService.updateStudent(studentId,updateStudentDto);
      return response.status(HttpStatus.OK).json({
        message:'Student updated successfully ',
        status:HttpStatus.OK,
        data:updatedStudent
      })
    } catch (error) {
      return response.status(HttpStatus.BAD_REQUEST).json({
        message:'Student can not be updated!!',
        status:HttpStatus.BAD_REQUEST,
        data:null
      })      
    }
  }

  @Delete(':id')
  async removeStudent(@Param('id') studentId: string,@Res() response) {
    try {
      const deletedStudent=await this.studentsService.removeStudent(studentId);
      return response.status(HttpStatus.OK).json({
        message:'Student deleted successfully ',
        status:HttpStatus.OK,
        data:deletedStudent
      })
    } catch (error) {
      return response.status(HttpStatus.BAD_REQUEST).json({
        message:'Student does not exist!!',
        status:HttpStatus.BAD_REQUEST,
        data:null
      })      
    }
  }
}
