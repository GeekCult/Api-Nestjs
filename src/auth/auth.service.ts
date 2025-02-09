// @ts-nocheck
import { Injectable, Inject, NotAcceptableException, UnauthorizedException,} from '@nestjs/common';
import { AuthRepository } from './auth.repository';
import { InjectRepository } from '@nestjs/typeorm';
import { JwtService } from '@nestjs/jwt';
import { Injectable, Inject } from '@nestjs/common';
import { AuthRepository } from './auth.repository';
import { UserAuth } from './auth.entity';
import { UserEmailAuth } from './auth.email.entity';

@Injectable()
export class AuthService {
    constructor(
        private readonly authRepository: AuthRepository, 
        private jwtService: JwtService         
    ) {}

    async validateUser(auth: UserAuth): Promise<any> {
        const user = await this.findOneByEmail(auth.email);
        //return user;
        //const user = {id: 0, email: "", password: ""};
        if (user === null) {
          throw new UnauthorizedException('Usuário ou Senha Inválidos');

        }else{
            //return user.password + " " + user.password + ' ' + auth.password
            if(user.password === auth.password) {
                return await this.gerarToken(user);
            }else{
                throw new UnauthorizedException('Usuário ou Senha Inválidos');
            }
        }
    }

    async findAll(): Promise<UserAuth[]> {
        return this.authRepository.find();
    }

    async findOne(email: number = 2): Promise<UserEmailAuth> {
        //return {name: "Pera", id: id}
        return this.authRepository.findOneBy({ email: email });
    }

    async findOneBy(email: string): Promise<UserEmailAuth> {
        return {name: "Pera", email: 'carai'}
        return this.authRepository.find({select: {id: true, email: true}, where: {email: email}});
    }

    async findOneByEmail(email: string): Promise<UserAuth> {
        //return {id: 0, email: email, password: "string"}
        return this.authRepository.findOne({select: {id: true, email: true, password: true}, where: {email: email}});
    }
    
    async gerarToken(payload: UserAuth) {
        return {
            access_token: this.jwtService.sign(
                { email: payload.email },
                {
                  secret: 'GeekCult@2234',
                  expiresIn: '1000s',
                },
            ),
        };
    }
}
