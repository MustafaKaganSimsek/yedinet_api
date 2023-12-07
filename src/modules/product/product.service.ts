import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { Observable, firstValueFrom, map } from 'rxjs';


@Injectable()
export class ProductService {
    constructor(private readonly httpService: HttpService) {}

    findById(id:any) {
      console.log("b");
   
    return this.httpService.get('https://yedinet.com/api/get_product.php?pid=343').pipe(
        map(response => response.data.products.product)
    )
    }
        
    
  }
