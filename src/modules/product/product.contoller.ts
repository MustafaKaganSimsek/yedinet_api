import { Controller, Get, Param } from '@nestjs/common';
import { ProductService } from './product.service';
import { Observable } from 'rxjs';

@Controller('product')
export class ProductController {

  constructor(private productService:ProductService){}


  @Get(":pid")
  findById(@Param('pid') pid:Number){
    console.log("a");
    
    return this.productService.findById(pid);
  }

  @Get("group/:gid")
  findAllByGroupId(@Param('gid') gid:number){
    console.log("b");
    
    return this.productService.findByGroupId(gid);
  }
}