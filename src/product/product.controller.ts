import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { ProductService } from './product.service';
import { productDTO } from './dto/product.dto';

@Controller('product')
export class ProductController {
    constructor(private productser: ProductService){}

    @Post('create')
    async addProduct(@Body()data:productDTO){
        return await this.productser.createproduct(data)

    }

    @Get('getall')
    async getAllProduct(){
        return await this.productser.findAll()
    }

    @Get("/:id/")
    async findById(@Param('id') id){
        return await this.productser.findOneById(id)
    }

    @Patch('/update/:id')
    async updateProductById(@Param('id') id, @Body() data){
        return await this.productser.updateProduct(id, data)
    }

    @Delete('/delete/:id')
    async deleteproductById(@Param('id') id){
        return await this.productser.deleteProduct(id)
    }

}
 