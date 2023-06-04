import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Expenses } from '../entities/expenses.entity';
import moment from 'moment';
import { Type } from '../entities/type.entity';

@Injectable()
export class AddExpensesService {
  constructor(@InjectRepository(Expenses) private expensesRepository: Repository<Expenses>,
   @InjectRepository(Type) private typeRepository: Repository<Type>) {
  }
  
  async addExpenses(user_id:string,expensesList){
    try {
      for (const data of expensesList) {
        let newList = this.expensesRepository.create({
            userid:user_id,
            type_id:data.type_id,
            subtype:data.subType,
            amount:data.amt,
            description:data.description,
            created_at:moment().format('YYYY-MM-DD HH:mm:ss')
         });
         await this.expensesRepository.save(newList);
      }
      return {
        response:'DATASAVED'
      } 
    } catch (error) {
       return {
        response:'DATANOTSAVED'
       }
    }
  }


  async getTypeList(user_id:string){
    try {
      let records = await this.typeRepository.query('select * from type;');
      let data = {
        userid : user_id,
        records:records
      }
      return data;
    } catch (error) {
       console.log(error)
    }
  }
  
}
