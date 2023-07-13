import { Controller, Get, Post, Body, Patch, Param, Delete, Res, HttpStatus } from '@nestjs/common';
import { QuizsService } from './quizs.service';
import { CreateQuizDto } from './dto/create-quiz.dto';
import { UpdateQuizDto } from './dto/update-quiz.dto';

@Controller('quizs')
export class QuizsController {
  constructor(private readonly quizsService: QuizsService) {}

  @Post()
  async createQuiz(@Res() response,@Body() createQuizDto: CreateQuizDto) {
    try {
      const newQuiz=await this.quizsService.createQuiz(createQuizDto)
      response.status(HttpStatus.CREATED).json({
        message:'Quiz created successfully ',
        status:HttpStatus.CREATED,
        data:newQuiz
      })
    } catch (error) {
      return response.status(HttpStatus.BAD_REQUEST).json({
        message:error.message,
        status:HttpStatus.BAD_REQUEST,
        data:null
      })
    }  }

  @Get()
  async findAllQuizs(@Res() response) {
    try {
      const QuizsData=await this.quizsService.findAllQuizs();
      return response.status(HttpStatus.OK).json({
        message:'Quizs found successfully ',
        status:HttpStatus.OK,
        data:QuizsData
      })
    } catch (error) {
      return response.status(HttpStatus.BAD_REQUEST).json({
        message:error.message,
        status:HttpStatus.BAD_REQUEST,
        data:null
      })      
    }  }

  @Get(':id')
  async findOneQuiz(@Res() response,@Param('id') QuizId: string) {
    try {
      const existingQuiz=await this.quizsService.findOneQuiz(QuizId);
      return response.status(HttpStatus.OK).json({
        message:'Quiz found successfully ',
        status:HttpStatus.OK,
        data:existingQuiz
      })
    } catch (error) {
      return response.status(HttpStatus.BAD_REQUEST).json({
        message:'Quiz does not exist!!',
        status:HttpStatus.BAD_REQUEST,
        data:null
      })      
    }  }

  @Patch(':id')
  async updateQuiz(@Res() response,@Param('id') QuizId: string, @Body() updateQuizDto: UpdateQuizDto) {
    try {
      const updatedQuiz=await this.quizsService.updateQuiz(QuizId,updateQuizDto);
      return response.status(HttpStatus.OK).json({
        message:'Quiz updated successfully ',
        status:HttpStatus.OK,
        data:updatedQuiz
      })
    } catch (error) {
      return response.status(HttpStatus.BAD_REQUEST).json({
        message:'Quiz can not be updated!!',
        status:HttpStatus.BAD_REQUEST,
        data:null
      })      
    }  }

  @Delete(':id')
  async removeQuiz(@Res() response,@Param('id') QuizId: string) {
    try {
      const deletedQuiz=await this.quizsService.removeQuiz(QuizId);
      return response.status(HttpStatus.OK).json({
        message:'Quiz deleted successfully ',
        status:HttpStatus.OK,
        data:deletedQuiz
      })
    } catch (error) {
      return response.status(HttpStatus.BAD_REQUEST).json({
        message:'Quiz does not exist!!',
        status:HttpStatus.BAD_REQUEST,
        data:null
      })      
    }  
  }
}
