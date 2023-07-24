import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateCategoryDto } from './dto/create-category.dto';
import { UpdateCategoryDto } from './dto/update-category.dto';

import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { ICategorie } from './interfaces/categorie.interface';
import { unlink } from 'fs';
import { join } from 'path';

@Injectable()
export class CategoriesService {
  //////
  constructor(@InjectModel('categories')
  private categorieModel: Model<ICategorie>)
  {}

  async createCategory(createCategoryDto: CreateCategoryDto):Promise<ICategorie> {
    const newCategorie=new this.categorieModel(createCategoryDto)
    return await newCategorie.save();
  }

  async findAllCategories():Promise<ICategorie[]> {
    const categorieData=await this.categorieModel.find().exec();
    if(!categorieData || categorieData.length===0){
      throw new NotFoundException('No caterories found !')
    }
    return categorieData;
  }

  async findOneCategory(categoryId: string):Promise<ICategorie> {
    const existingCategory=await this.categorieModel.findById(categoryId).exec();
    if(!existingCategory){
      throw new NotFoundException('Category not found !')
    }
    return existingCategory;
  }

  async updateCategory(categoryId: string, updateCategoryDto: UpdateCategoryDto):Promise<ICategorie> {
    const category=await this.categorieModel.findByIdAndUpdate(categoryId,updateCategoryDto);
    if(!category){
      throw new NotFoundException('Unable to Update the data !')
    }
    return category;
  }

  async removeCategory(categoryId: string):Promise<ICategorie> {
    const deletedCategory=await this.categorieModel.findByIdAndDelete(categoryId).exec();
    ///pour supprimer photo a partir du dossier 
    unlink(join(process.cwd(),"./upload/categories/"+deletedCategory.file),
    (err)=>{
      if(err){
        console.error(err)
        return err
      }
    })
    //////////////////////////////////
    if(!deletedCategory){
      throw new NotFoundException("unable to delete Category")
    }
    return deletedCategory;
  }


}
