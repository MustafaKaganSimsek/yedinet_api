import { ProductService } from './product.service';
import { Observable } from 'rxjs';
export declare class ProductController {
    private productService;
    constructor(productService: ProductService);
    findById(pid: Number): Observable<any>;
    findAllByGroupId(gid: number): Observable<any>;
}
