import { Controller, Get, Post, Body, Patch, Param, Delete, Res, HttpStatus, UseInterceptors, UploadedFile } from '@nestjs/common';
import { SectionsService } from './sections.service';
import { CreateSectionDto } from './dto/create-section.dto';
import { UpdateSectionDto } from './dto/update-section.dto';
import { FileInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';

@Controller('sections')
export class SectionsController {
  constructor(private readonly sectionsService: SectionsService) {}

  @Post()
  //configuration multer begin
  @UseInterceptors(
    FileInterceptor("file",{
      storage:diskStorage({
        destination:'./upload/sections',
        filename:(_request,file,callback)=>
        callback(null ,`${new Date().getTime()}-${file.originalname}`)
      })
    })   
  )
  //config multer end 
  async createSection(@Res() response,@Body() createSectionDto: CreateSectionDto,@UploadedFile() file : Express.Multer.File) {
    try {
      createSectionDto.file=file.filename ////
      const newSection=await this.sectionsService.createSection(createSectionDto)
      response.status(HttpStatus.CREATED).json({
        message:'Section created successfully ',
        status:HttpStatus.CREATED,
        data:newSection
      })
    } catch (error) {
      return response.status(HttpStatus.BAD_REQUEST).json({
        message:error.message,
        status:HttpStatus.BAD_REQUEST,
        data:null
      })
    }  }

  @Get()
  async findAllSections(@Res() response) {
    try {
      const sectionsData=await this.sectionsService.findAllSections();
      return response.status(HttpStatus.OK).json({
        message:'Sections found successfully ',
        status:HttpStatus.OK,
        data:sectionsData
      })
    } catch (error) {
      return response.status(HttpStatus.BAD_REQUEST).json({
        message:error.message,
        status:HttpStatus.BAD_REQUEST,
        data:null
      })      
    }  }

  @Get(':id')
  async findOneSection(@Res() response,@Param('id') sectionId: string) {
    try {
      const existingSection=await this.sectionsService.findOneSection(sectionId);
      return response.status(HttpStatus.OK).json({
        message:'Section found successfully ',
        status:HttpStatus.OK,
        data:existingSection
      })
    } catch (error) {
      return response.status(HttpStatus.BAD_REQUEST).json({
        message:'Section does not exist!!',
        status:HttpStatus.BAD_REQUEST,
        data:null
      })      
    }  }

  @Patch(':id')
  async updateSection(@Res() response,@Param('id') sectionId: string, @Body() updateSectionDto: UpdateSectionDto) {
    try {
      const updatedSection=await this.sectionsService.updateSection(sectionId,updateSectionDto);
      return response.status(HttpStatus.OK).json({
        message:'Section updated successfully ',
        status:HttpStatus.OK,
        data:updatedSection
      })
    } catch (error) {
      return response.status(HttpStatus.BAD_REQUEST).json({
        message:'Section can not be updated!!',
        status:HttpStatus.BAD_REQUEST,
        data:null
      })      
    }  }

  @Delete(':id')
  async removeSection(@Res() response,@Param('id') sectionId: string) {
    try {
      const deletedSection=await this.sectionsService.removeSection(sectionId);
      return response.status(HttpStatus.OK).json({
        message:'Section deleted successfully ',
        status:HttpStatus.OK,
        data:deletedSection
      })
    } catch (error) {
      return response.status(HttpStatus.BAD_REQUEST).json({
        message:'Section does not exist!!',
        status:HttpStatus.BAD_REQUEST,
        data:null
      })      
    }    }
}
