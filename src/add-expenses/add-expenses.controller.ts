import { Controller, Get, Post, Body, Patch, Param, Delete, ParseArrayPipe, Req, UseGuards } from '@nestjs/common';
import { VerifyUserGuard } from '../guards/verified_user.guard';
import { AddExpensesService } from './add-expenses.service';
import { AddExpensesDto } from './dto/add-expenses.dto';
@Controller('expenses')
export class AddExpensesController {
  constructor(private readonly addExpensesService: AddExpensesService) {}

  @UseGuards(VerifyUserGuard)
  @Post('add-expenses')
  addExpenses(@Body() expensesList , @Req() req){
     let result = req.user;
     return this.addExpensesService.addExpenses(result.user_id,expensesList);
  }

  @UseGuards(VerifyUserGuard)
  @Get('get-type-list')
  getTast(@Req() req){
    console.log(req.user)
     return this.addExpensesService.getTypeList(req.user.user_id);
  }
}
