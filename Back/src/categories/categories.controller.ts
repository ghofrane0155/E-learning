import { Controller, Get, Post, Body, Patch, Param, Delete, HttpStatus, Res, UseInterceptors, UploadedFile, UseGuards } from '@nestjs/common';
import { CategoriesService } from './categories.service';
import { CreateCategoryDto } from './dto/create-category.dto';
import { UpdateCategoryDto } from './dto/update-category.dto';
import { FileInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import { AccessTokenGuard } from 'src/common/guards/accessToken.guard';

@Controller('categories')
export class CategoriesController {
  constructor(private readonly categoriesService: CategoriesService) {}
  
  @UseGuards(AccessTokenGuard)
  @Post()
  //configuration multer begin
  @UseInterceptors(
    FileInterceptor("file",{
      storage:diskStorage({
        destination:'./upload/categories',
        filename:(_request,file,callback)=>
        callback(null ,`${new Date().getTime()}-${file.originalname}`)
      })
    })   
  )
  //config multer end 
  async createCategory(@Res() response,@Body() createCategoryDto: CreateCategoryDto, @UploadedFile() file : Express.Multer.File) {
    try {
      createCategoryDto.file=file.filename ////
      const newCategorie=await this.categoriesService.createCategory(createCategoryDto)
      response.status(HttpStatus.CREATED).json({
        message:'New Category created successfully',
        status:HttpStatus.CREATED,
        data:newCategorie
      })
    } catch (error) {
      return response.status(HttpStatus.BAD_REQUEST).json({
        message:error.message,
        status:HttpStatus.BAD_REQUEST,
        data:null
      });
    }
  }

  @Get()
  async findAllCategories(@Res() response) {
    try{
      const categorieData = await  this.categoriesService.findAllCategories();
      return response.status(HttpStatus.OK).json({
        message:'Categories found successfully',
        status:HttpStatus.OK,
        data:categorieData
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
  async findOneCategory(@Param('id') categoryid: string,@Res() response) {
    try {
      const existingCategory=await this.categoriesService.findOneCategory(categoryid);
      return response.status(HttpStatus.OK).json({
        message:'Category found successfully',
        status:HttpStatus.OK,
        data:existingCategory
      })
    } catch (error) {
      return response.status(HttpStatus.BAD_REQUEST).json({
        message:`Error finding Category with ID ${categoryid}`,
        status: HttpStatus.BAD_REQUEST,
        error: null
      })
    }
  }

  @Patch(':id')
  async updateCategory(@Param('id') categoryid: string,@Res() response, @Body() updateCategoryDto: UpdateCategoryDto) {
    try {
      const updatedCategory=await this.categoriesService.updateCategory(categoryid,updateCategoryDto);
      return response.status(HttpStatus.OK).json({
        message:'Category updated successfully',
        status:HttpStatus.OK,
        data:updatedCategory
      })
    } catch (error) {
      return response.status(HttpStatus.BAD_REQUEST).json({
        message:'Category can not be updated!!',
        status: HttpStatus.BAD_REQUEST,
        error: null
      })
    }
  }

  @Delete(':id')
  async removeCategory(@Param('id') categoryid: string,@Res() response) {
    try {
      const deletedCategory=await this.categoriesService.removeCategory(categoryid);
      return response.status(HttpStatus.OK).json({
        message:'Category deleted successfully',
        status:HttpStatus.OK,
        data:deletedCategory
      })
    } catch (error) {
      return response.status(HttpStatus.BAD_REQUEST).json({
        message:'Category does not exist!!',
        status:HttpStatus.BAD_REQUEST,
        error:null
      })      
    }
  }
}
