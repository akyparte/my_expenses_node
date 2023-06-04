import { HttpCode, HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Expenses } from '../entities/expenses.entity';


@Injectable()
export class ExpensesListService {
  constructor(@InjectRepository(Expenses) private expensesRepository: Repository<Expenses>) { }

  async getList(filters, query, userid) {
    try {
      let whereCon = `where e.userid = '${userid}' `;
      if (typeof filters.filters !== 'undefined' && filters.filters) {
        const parsedFilters = JSON.parse(filters.filters);
        if (Object.keys(parsedFilters).length !== 0) {
          for (const prop in parsedFilters) {
            if (typeof parsedFilters[prop] !== 'undefined') {
              if (prop == 'subType' || prop == 'description') {
                whereCon += " AND e." + prop + " like '%" + parsedFilters[prop] + "%' ";
              } else if (prop == 'amount' || prop == 'type_id') {
                whereCon += " AND e." + prop + " = '" + parsedFilters[prop] + "' ";
              } else if (prop == 'startDate') {
                whereCon = `${whereCon} AND created_at BETWEEN '${parsedFilters.startDate}' AND '${parsedFilters.endDate}'`
              }
            }
          }
        }
  
      }
      //pagination and sorting
      let page_number: any = 1;
      let page_size: any = 10;
      let sort_by: string = "id";
      let sort_order: string = " desc";
  
      if (typeof query.page_number !== 'undefined' && query.page_number) {
        page_number = query.page_number;
      }
  
      if (typeof query.page_size !== 'undefined' && query.page_size) {
        page_size = query.page_size;
      }
  
      if (typeof query.sort_order !== 'undefined' && query.sort_order) {
        sort_order = query.sort_order;
      }
  
      if (typeof query.sort_by !== 'undefined' && query.sort_by) {
        sort_by = query.sort_by;
      }
  
      let offset = (page_number - 1) * page_size;
  
      let sqlQuery = "SELECT SQL_CALC_FOUND_ROWS e.id,e.userid,e.subtype,e.description,e.amount,e.created_at,t.name as type FROM expenses as e "
        + " LEFT JOIN type as t ON e.type_id = t.id "
        + whereCon
        + " order by " + "e." + sort_by + " " + sort_order + " limit " + offset + ", " + page_size + ";";
  
      const data = await this.expensesRepository.query(sqlQuery);
      const no_of_rows = await this.expensesRepository.query("SELECT FOUND_ROWS() as no_of_rows");
      return { "data": data, "total": no_of_rows[0]['no_of_rows'] };
    } catch (error) {
       console.log(error)
       console.log('================query================')
       console.log(query)
       console.log('================filters================')
       console.log(JSON.parse(filters))
       throw new HttpException('error while pagination',HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }
}