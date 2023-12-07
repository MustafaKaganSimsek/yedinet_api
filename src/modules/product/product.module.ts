import { Module } from '@nestjs/common';
import { ProductController } from './product.contoller';
import { ProductService } from './product.service';
import { HttpModule } from '@nestjs/axios';

@Module({
    imports: [
        HttpModule.register({
          timeout: 5000,
          maxRedirects: 5,
        }),
      ],
      
  controllers: [ProductController],
  providers: [ProductService],
})
export class ProductModule {
    constructor(private productService: ProductService) {}

}