import { Injectable } from '@nestjs/common';
import { MailerService } from '@nestjs-modules/mailer';

@Injectable()
export class AppService {
  //send email
  constructor(private mailerService:MailerService){}
  ////
  getHello(): string {
    return 'Hello World!';
  }
  ////////////
  async sendUserConfirmation(user:any,token:string){
    const url=`exemple.com/auth/confirm?token=${token}`
    await this.mailerService.sendMail({
      to:user.email,
      subject:'Welcome to nice app ! confirm your email',
      template:'./confirmation',
      context:{name:user.name,url}
    })
  }
}
