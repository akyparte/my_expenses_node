import { IsJSON } from "class-validator";

export class AddExpensesDto {

    @IsJSON()
    expensesList:string
}
