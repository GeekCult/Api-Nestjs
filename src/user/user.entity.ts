import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import { ApiProperty } from '@nestjs/swagger';
import { Person } from "./person.entity";


@Entity()
export class User {
    
    @PrimaryGeneratedColumn()
    id: number;

}
