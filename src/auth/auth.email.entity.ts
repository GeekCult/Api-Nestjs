import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';

export abstract class UserEmailAuth {
    @PrimaryGeneratedColumn()
    id: number;
    
    @ApiProperty()
    @Column({ length: 250 })
    email: string;
    
}