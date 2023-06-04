import { type } from "os";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('user')
export class User {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    user_id: string;

    @Column()
    password: string;

    @Column()
    email: string;
    
    @Column({type:'datetime'})
    created_at: string

 }
