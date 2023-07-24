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
//send email
import { MailerModule } from '@nestjs-modules/mailer';
import { join } from 'path';
import { HandlebarsAdapter } from '@nestjs-modules/mailer/dist/adapters/handlebars.adapter';

//li yebdew bl @ sont des décorateurs

@Module({
  //conx a la base de donnee
  imports: [MongooseModule.forRoot("mongodb://127.0.0.1:27017",{dbName :"Elearning"}), StudentsModule, CategoriesModule, UsersModule, AuthModule,
  ConfigModule.forRoot({isGlobal :true}),
  CoursesModule, SectionsModule, QuizsModule, AdminModule,
  //send email
  MailerModule.forRoot({ 
    transport:{
      host: "sandbox.smtp.mailtrap.io",
      port: 2525,
      auth: {
        user: "5e3412b8f8f1aa",
        pass: "dcb13e4ff42e25"
      }
    },
    defaults:{
      from:'"No replay <noreply@exemple.com>"'
    },
    template:{
      dir:join(__dirname , 'templates'),
      adapter:new HandlebarsAdapter(),
      options:{
        strict:true
      }
    }
  })],
  //////
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
