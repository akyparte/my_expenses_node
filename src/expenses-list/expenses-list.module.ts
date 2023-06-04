import { Module } from '@nestjs/common';
import { ExpensesListService } from './expenses-list.service';
import { ExpensesListController } from './expenses-list.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Expenses } from '../entities/expenses.entity';
import { JWTUtility } from '../users/services/jwt-utility';

@Module({
  imports:[TypeOrmModule.forFeature([Expenses])],
  controllers: [ExpensesListController],
  providers: [ExpensesListService,JWTUtility]
})
export class ExpensesListModule {}
