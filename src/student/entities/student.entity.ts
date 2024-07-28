import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";


@Entity()
export class Student {

    @PrimaryGeneratedColumn()
    id:number;

    @Column()
    firstName:string;

    @Column()
    email:string;

    @Column()
    age:number;

    @Column()
    phone:number;

}
