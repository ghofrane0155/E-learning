import { Body, Controller, Get, Param, Patch, Post, Req, UseGuards } from '@nestjs/common';
import { AuthService } from './auth.service';
import { CreateLoginDto } from './dto/create-login.dto';

import { Request } from 'express';
import { AccessTokenGuard } from 'src/common/guards/accessToken.guard';
import { UpdateUserDto } from 'src/users/dto/update-user.dto';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

@Post('signin')
async signIn(@Body() data:CreateLoginDto) {
  return this.authService.signIn(data);
}

@UseGuards(AccessTokenGuard)///autorisation (kima isGranted f Symfony)
@Get('logout')
async logout(@Req() req:Request){
  this.authService.logout(req.user['sub'])
}

//update user profile here...
@Patch('profile/:id')
async updateProfile(@Param('id') userId:string, @Body() updateUserDto:UpdateUserDto){
  return this.authService.updateProfile(userId,updateUserDto)
}

}
