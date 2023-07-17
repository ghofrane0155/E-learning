import { Controller, Get, Post, Body, Patch, Param, Delete, Res, HttpStatus, UseInterceptors, UploadedFile } from '@nestjs/common';
import { CoursesService } from './courses.service';
import { CreateCourseDto } from './dto/create-course.dto';
import { UpdateCourseDto } from './dto/update-course.dto';
import { FileInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';

@Controller('courses')
export class CoursesController {
  constructor(private readonly coursesService: CoursesService) {}

  @Post()
  //configuration multer begin
  @UseInterceptors(
    FileInterceptor("file",{
      storage:diskStorage({
        destination:'./upload/courses',
        filename:(_request,file,callback)=>
        callback(null ,`${new Date().getTime()}-${file.originalname}`)
      })
    })   
  )
  //config multer end 
  async createCourse(@Res() response,@Body() createCourseDto: CreateCourseDto,@UploadedFile() file : Express.Multer.File) {
    try {
      createCourseDto.file=file.filename ////
      const newCourse=await this.coursesService.createCourse(createCourseDto)
      response.status(HttpStatus.CREATED).json({
        message:'New Course created successfully',
        status:HttpStatus.CREATED,
        data:newCourse
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
  async findAllCourses(@Res() response) {
    try{
      const coursesData = await  this.coursesService.findAllCourses();
      return response.status(HttpStatus.OK).json({
        message:'Courses found successfully',
        status:HttpStatus.OK,
        data:coursesData
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
  async findOneCourse(@Res() response,@Param('id') courseId: string) {
    try {
      const existingCourse=await this.coursesService.findOneCourse(courseId);
      return response.status(HttpStatus.OK).json({
        message:'Course found successfully ',
        status:HttpStatus.OK,
        data:existingCourse
      })
    } catch (error) {
      return response.status(HttpStatus.BAD_REQUEST).json({
        message:'Course does not exist!!',
        status:HttpStatus.BAD_REQUEST,
        data:null
      })      
    }
  }

  @Patch(':id')
  async updateCourse(@Res() response,@Param('id') courseId: string, @Body() updateCourseDto: UpdateCourseDto) {
    try {
      const updatedCourse=await this.coursesService.updateCourse(courseId,updateCourseDto);
      return response.status(HttpStatus.OK).json({
        message:'Course updated successfully ',
        status:HttpStatus.OK,
        data:updatedCourse
      })
    } catch (error) {
      return response.status(HttpStatus.BAD_REQUEST).json({
        message:'Course can not be updated!!',
        status:HttpStatus.BAD_REQUEST,
        data:null
      })      
    }
  }

  @Delete(':id')
  async removeCourse(@Res() response,@Param('id') courseId: string) {
    try {
      const deletedCourse=await this.coursesService.removeCourse(courseId);
      return response.status(HttpStatus.OK).json({
        message:'Course deleted successfully ',
        status:HttpStatus.OK,
        data:deletedCourse
      })
    } catch (error) {
      return response.status(HttpStatus.BAD_REQUEST).json({
        message:'Course does not exist!!',
        status:HttpStatus.BAD_REQUEST,
        data:null
      })      
    }
  }
}
