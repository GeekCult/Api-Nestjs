// @ts-nocheck
import { Injectable, Inject } from '@nestjs/common';
import { Repository } from 'typeorm';
import { User } from './user.entity';

@Injectable()
export class UserService {

    constructor(
        @Inject('USER_REPOSITORY')
        private userRepository: Repository<User>,
    ){}

    async findAll(): Promise<User[]> {
        return this.userRepository.find();
    }

    async findOne(id: number = 1): Promise<User> {
        return this.userRepository.findOneBy({ id: id });
    }

    async createRecord(user: User){
        return this.userRepository.save(user);
    }

}

