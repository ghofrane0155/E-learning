import { Module } from '@nestjs/common';
import { CoursesService } from './courses.service';
import { CoursesController } from './courses.controller';

import { MongooseModule } from '@nestjs/mongoose';
import { courseSchema } from './entities/course.entity';
import { categorieSchema } from 'src/categories/entities/category.entity';

@Module({
  imports:[MongooseModule.forFeature([{name:"courses",schema:courseSchema}]),
  MongooseModule.forFeature([{name:"categories",schema:categorieSchema}])
],////

  controllers: [CoursesController],
  providers: [CoursesService]
})
export class CoursesModule {}
