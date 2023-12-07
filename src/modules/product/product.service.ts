import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { response } from 'express';
import { Observable, filter, firstValueFrom, map } from 'rxjs';


@Injectable()
export class ProductService {
    constructor(private readonly httpService: HttpService) {}

    findById(pid:Number) {
   console.log("a");
   

    return this.httpService.get('https://yedinet.com/api/get_product.php?pid='+pid).pipe(
        map(response => response.data.products.product)
    )
    }

    findByGroupId(gid:number) {
   
      console.log(gid)
      return this.httpService.get('https://yedinet.com/api/get_product.php').pipe(
        map(response => response.data.products.product.filter((res)=>res.gid==gid))
    )
    }
        
    
  }
