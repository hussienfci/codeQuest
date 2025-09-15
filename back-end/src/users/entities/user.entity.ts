import { Column, Entity, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class User {

    @PrimaryGeneratedColumn()
    id: number ; 

    @Column()
    userName: string ; 
    
    @Column()
    password: string ; 
    

}
