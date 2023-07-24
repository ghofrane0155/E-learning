import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { InjectModel } from '@nestjs/mongoose';
import { IUser } from './interfaces/user.interface';
import { Model } from 'mongoose';

@Injectable()
export class UsersService {
  /////////////// nafsou li mawjoud fl usersmodule
  constructor(@InjectModel('users')
  private userModel : Model<IUser>)
  {}
  
  //createUserDto esm fct w CreateUserDto esm l class ahna baad naaytou b createUserDto
  async createUser(createUserDto: CreateUserDto):Promise<IUser> {
    const newUser=new this.userModel(createUserDto)

    return await newUser.save();//dima async m3aha return await
  }

/****************************************************/
  async findByUserName(userName:string):Promise<IUser>{
    return this.userModel.findOne({userName}).exec();
  }
/****************************************************/

/////06-07
  async findAllUsers():Promise<IUser[]> {
    const usersData=await this.userModel.find().exec();
    if(!usersData || usersData.length===0){
      throw new NotFoundException('Users not Found !')
    }
    return usersData;
  }

  async findOneUser(userId: string):Promise<IUser> {
    const existingUser=await this.userModel.findById(userId).exec();
    if(!existingUser){
      throw new NotFoundException('User not Found !')
    }
    return existingUser;
  }
/////find user by role/////////////////// todo
async findAllUsersByItems(items: string):Promise<IUser[]> {
  return this.userModel.find({items}).exec();
}
////////////////////////////
  async updateUser(userId: string, updateUserDto: UpdateUserDto):Promise<IUser> {
    const user=await this.userModel.findByIdAndUpdate(userId,updateUserDto);
    if(!user){
      throw new NotFoundException('User not Found !')
    }
    return  user;
  }

  async removeUser(userId: string):Promise<IUser>  {
    const deletedUser=await this.userModel.findByIdAndDelete(userId).exec();
    if(!deletedUser){
      throw new NotFoundException('User can not be deleted cause it does not exist !')
    }
    return deletedUser;
  }
}
