import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn } from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';
import { IsInt, IsNotEmpty, NotEquals} from "class-validator"


@Entity('upload')
export class Upload {

    @PrimaryGeneratedColumn()
    id: number;
    
    @ApiProperty()
    @Column({type:'int'})
    @IsNotEmpty()
    @IsInt()
    @NotEquals(0)
    file: string;
    
    @ApiProperty()
    @Column({ type:'int' })
    type:number;

    @Column()
    name: string;

    @CreateDateColumn()
    dateCreated: Date;

    @UpdateDateColumn()
    dateUpdated: Date;
    
}