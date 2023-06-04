import { Controller, Get, Post, Body, Patch, Param, Delete, Query, Req, UseGuards } from '@nestjs/common';
import { ExpensesListService } from './expenses-list.service';
import { CreateExpensesListDto } from './dto/create-expenses-list.dto';
import { VerifyUserGuard } from '../guards/verified_user.guard';

@Controller('expenses-list')
export class ExpensesListController {
  constructor(private readonly expensesListService: ExpensesListService) {}

  @UseGuards(VerifyUserGuard)
  @Post('get-list')
  getExpensesList(@Body() filters , @Query() query,@Req() req){
     let userid = req.user.user_id;
     return this.expensesListService.getList(filters , query,userid);
  }

}