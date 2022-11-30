import { JwtService } from '@nestjs/jwt';
import { Repository } from 'typeorm';
import { UserAuth } from './auth.entity';
import { UserEmailAuth } from './auth.email.entity';
export declare class AuthService {
    private authRepository;
    private jwtService;
    constructor(authRepository: Repository<UserAuth>, jwtService: JwtService);
    validateUser(auth: UserAuth): Promise<any>;
    findAll(): Promise<UserAuth[]>;
    findOne(email?: number): Promise<UserEmailAuth>;
    findOneBy(email: string): Promise<UserEmailAuth>;
    findOneByEmail(email: string): Promise<UserAuth>;
    gerarToken(payload: UserAuth): Promise<{
        access_token: string;
    }>;
}
