import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';

import {MongooseModule} from "@nestjs/mongoose"
import {userSchema} from './entities/user.entity';
import { Student, studentSchema } from 'src/students/entities/student.entity';
import { Admin, adminSchema } from 'src/admin/entities/admin.entity';

@Module({
  imports:[MongooseModule.forFeature([{name:"users", schema:userSchema,
  discriminators:[{name:Student.name,schema:studentSchema},
  {name:Admin.name, schema:adminSchema}]
}])], /////'users' nafsou li mawjoud f service
  controllers: [UsersController],
  providers: [UsersService],

  exports:[UsersService]//auth
})
export class UsersModule {}
