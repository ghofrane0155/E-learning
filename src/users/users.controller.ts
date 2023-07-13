import { Controller, Get, Post, Body, Patch, Param, Delete, Res, HttpStatus } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}
/////05-07
  @Post()
  async createUser(@Res() response, @Body() createUserDto: CreateUserDto) {
    try {
      const newUser=await this.usersService.createUser(createUserDto)
      response.status(HttpStatus.CREATED).json({
        message:'User created successfully ',
        status:HttpStatus.CREATED,
        data:newUser
      })
    } catch (error) {
      return response.status(HttpStatus.BAD_REQUEST).json({
        message:error.message,
        status:HttpStatus.BAD_REQUEST,
        data:null
      })
    }
  }
/////06-07
  @Get()
  async findAllUsers(@Res() response) {
    try {
      const usersData=await this.usersService.findAllUsers();
      return response.status(HttpStatus.OK).json({
        message:'Users found successfully ',
        status:HttpStatus.OK,
        data:usersData
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
  async findOneUser(@Param('id') userId: string,@Res() response) {
    try {
      const existingUser=await this.usersService.findOneUser(userId);
      return response.status(HttpStatus.OK).json({
        message:'User found successfully ',
        status:HttpStatus.OK,
        data:existingUser
      })
    } catch (error) {
      return response.status(HttpStatus.BAD_REQUEST).json({
        message:'User does not exist!!',
        status:HttpStatus.BAD_REQUEST,
        data:null
      })      
    }
  }
///////findByItems ///////////////////to do
@Get('item/:item')
  async findByItem(@Param('item') item: string,@Res() response) {
    try {
      const users=await this.usersService.findAllUsersByItems(item);
      return response.status(HttpStatus.OK).json({
        message:'Users by Items found successfully ',
        status:HttpStatus.OK,
        data:users
      })
    } catch (error) {
      return response.status(HttpStatus.BAD_REQUEST).json({
        message:error.message,
        status:HttpStatus.BAD_REQUEST,
        data:null
      })      
    }
  }
/////////////////////////////////////////////
  @Patch(':id')
  async updateUser(@Param('id') userId: string, @Body() updateUserDto: UpdateUserDto,@Res() response) {
    try {
      const updatedUser=await this.usersService.updateUser(userId,updateUserDto);
      return response.status(HttpStatus.OK).json({
        message:'User updated successfully ',
        status:HttpStatus.OK,
        data:updatedUser
      })
    } catch (error) {
      return response.status(HttpStatus.BAD_REQUEST).json({
        message:'User can not be updated!!',
        status:HttpStatus.BAD_REQUEST,
        data:null
      })      
    }
  }

  @Delete(':id')
  async removeUser(@Param('id') userId: string,@Res() response) {
    try {
      const deletedUser=await this.usersService.removeUser(userId);
      return response.status(HttpStatus.OK).json({
        message:'User deleted successfully ',
        status:HttpStatus.OK,
        data:deletedUser
      })
    } catch (error) {
      return response.status(HttpStatus.BAD_REQUEST).json({
        message:'User does not exist!!',
        status:HttpStatus.BAD_REQUEST,
        data:null
      })      
    }  
  }
}
