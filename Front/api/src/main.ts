import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

//import {cors} from 'cors'
var cors=require('cors')

//async sans bloquer le flux
async function bootstrap() { 
  const app = await NestFactory.create(AppModule);
  const corsOptions={
    origin:'http://localhost:3000',
    credentials:true,
    optionsSuccessStatus:200
  }

  app.use(cors(corsOptions))
  await app.listen(5000);// port backend<>frontend
}
bootstrap();
