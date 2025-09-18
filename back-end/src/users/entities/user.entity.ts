import { Column, Entity, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class User {

    @PrimaryGeneratedColumn()
    id: number ; 

    @Column({unique: true })
    userName: string ; 
    
    @Column({unique: true })
    email: string ; 
    
    @Column()
    password: string ; 
    
    @Column({nullable:true} ) 
    token:string ; 
    
    @Column({nullable:true} ) 
    role:string ; 
    

}
