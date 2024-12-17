import { HttpException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ProductEntity } from './entity/productEntity';
import { Repository } from 'typeorm';

@Injectable()
export class ProductService {
  constructor(
    @InjectRepository(ProductEntity)
    private productRepo: Repository<ProductEntity>,
  ) {}
  //CREATE PRODUCT
  async createproduct(payload): Promise<ProductEntity> {
    return await this.productRepo.save(payload);
    // const product = await this.productRepo.create(payload);
    // return await this.productRepo.save(product);
  }

  //FIND ALL PRODUCT
  async findAll(): Promise<ProductEntity[]> {
    return await this.productRepo.find();
  }

  //FIND ONE PRODUCT BY ID
  async findOneById(id: string): Promise<ProductEntity> {
    const find = await this.finditem(id);

    return find;
  }

  //UPDATE
  async updateProduct(id, payload) {
    await this.finditem(id);
    return await this.productRepo.update(id, payload);
  }

  //DELETE
  async deleteProduct(id: string){
    await this.finditem(id);
    return await this.productRepo.delete(id,);
  }

  //find item if it exists
  async finditem(id: string): Promise<ProductEntity> {
    // const find = await this.productRepo.findOneBy({id})
    const find = await this.productRepo.findOne({ where: { id: id } });
    if (!find) {
      throw new HttpException(`this id ${id} is invalid`, 400);
    }
    return find;
  }
}
