import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('expenses')
export class Expenses {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    userid:string

    @Column()
    type_id: number;

    @Column()
    subtype: string;

    @Column({default:null})
    description: string;

    @Column()
    amount: number;
    
    @Column({type:'date'})
    created_at: string

 }
