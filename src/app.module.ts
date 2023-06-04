import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { dataSourceOptions } from '../db/data-source';
import { UsersModule } from './users/users.module';
import { AddExpensesModule } from './add-expenses/add-expenses.module';
import { ExpensesListModule } from './expenses-list/expenses-list.module';

@Module({
  imports: [TypeOrmModule.forRoot(dataSourceOptions),UsersModule, AddExpensesModule, ExpensesListModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
