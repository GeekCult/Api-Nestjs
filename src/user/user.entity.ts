import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import { ApiProperty } from '@nestjs/swagger';
import { Person } from "./person.entity";


@Entity()
export class User {
    
    @PrimaryGeneratedColumn()
    id: number;

    @ApiProperty()
    @Column()
    age?: number;
    
    @ApiProperty()
    @Column({ type: "varchar", length: 100 })
    mealPreference?: string;
}
