import { Controller, Get } from '@nestjs/common';
import { ProductService } from './product.service';
import { Observable } from 'rxjs';

@Controller('product')
export class ProductController {

  constructor(private productService:ProductService){}


  @Get()
  findAll(){
    return this.productService.findById('343');
  }
}