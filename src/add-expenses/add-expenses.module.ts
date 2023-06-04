import { Module } from '@nestjs/common';
import { AddExpensesService } from './add-expenses.service';
import { AddExpensesController } from './add-expenses.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Expenses } from '../entities/expenses.entity';
import { JWTUtility } from '../users/services/jwt-utility';
import { Type } from '../entities/type.entity';
@Module({
  imports:[TypeOrmModule.forFeature([Expenses,Type])],
  controllers: [AddExpensesController],
  providers: [AddExpensesService,JWTUtility]
})
export class AddExpensesModule {}
