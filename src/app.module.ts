import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

import { MongooseModule } from '@nestjs/mongoose';
import { StudentsModule } from './students/students.module';
import { CategoriesModule } from './categories/categories.module';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';

import { ConfigModule } from '@nestjs/config';
import { CoursesModule } from './courses/courses.module';
import { SectionsModule } from './sections/sections.module';
import { QuizsModule } from './quizs/quizs.module';
import { AdminModule } from './admin/admin.module';


//li yebdew bl @ sont des décorateurs

@Module({
  //conx a la base de donnee
  imports: [MongooseModule.forRoot("mongodb://127.0.0.1:27017",{dbName :"Elearning"}), StudentsModule, CategoriesModule, UsersModule, AuthModule,
  ConfigModule.forRoot({isGlobal :true}),
  CoursesModule,
  SectionsModule,
  QuizsModule,
  AdminModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
