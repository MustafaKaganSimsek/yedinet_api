import { HttpService } from '@nestjs/axios';
import { Observable } from 'rxjs';
export declare class ProductService {
    private readonly httpService;
    constructor(httpService: HttpService);
    findById(pid: Number): Observable<any>;
    findByGroupId(gid: number): Observable<any>;
}
