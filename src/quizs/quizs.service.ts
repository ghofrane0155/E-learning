import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateQuizDto } from './dto/create-quiz.dto';
import { UpdateQuizDto } from './dto/update-quiz.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { IQuiz } from './interfaces/quiz.interface';

@Injectable()
export class QuizsService {
    /////////////// nafsou li mawjoud fl quizsmodule
    constructor(@InjectModel('quizs')
    private quizModel : Model<IQuiz>)
    {}

  async createQuiz(createQuizDto: CreateQuizDto):Promise<IQuiz> {
    const newQuiz=new this.quizModel(createQuizDto)
    return await newQuiz.save();
  }

  async findAllQuizs() :Promise<IQuiz[]> {
    const quizsData=await this.quizModel.find().exec();
    if(!quizsData || quizsData.length===0){
      throw new NotFoundException('quizs not Found !')
    }
    return quizsData;
  }

  async findOneQuiz(QuizId: string):Promise<IQuiz> {
    const existingQuiz=await this.quizModel.findById(QuizId).exec();
    if(!existingQuiz){
      throw new NotFoundException('Quiz not Found !')
    }
    return existingQuiz;
  }
  async updateQuiz(QuizId: string, updateQuizDto: UpdateQuizDto):Promise<IQuiz> {
    const Quiz=await this.quizModel.findByIdAndUpdate(QuizId,updateQuizDto);
    if(!Quiz){
      throw new NotFoundException('Quiz not Found !')
    }
    return  Quiz;
  }
  async removeQuiz(QuizId: string) :Promise<IQuiz>  {
    const deletedQuiz=await this.quizModel.findByIdAndDelete(QuizId).exec();
    if(!deletedQuiz){
      throw new NotFoundException('Quiz can not be deleted cause it does not exist !')
    }
    return deletedQuiz;
  }
}
