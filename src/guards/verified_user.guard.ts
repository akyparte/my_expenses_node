
import { Injectable, CanActivate, ExecutionContext } from '@nestjs/common';
import { Request } from 'express';
import { concatAll, Observable } from 'rxjs';
import { JWTUtility } from '../users/services/jwt-utility';

@Injectable()
export class VerifyUserGuard implements CanActivate {
  constructor(private readonly jwtUtilirt: JWTUtility) { }
  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {
    const request = context.switchToHttp().getRequest();

    return this.validateRequest(request);
  }

  validateRequest(request): boolean {
    try {
      let token: string = request.header('auth');
      if (token) {
        let result: Object = this.jwtUtilirt.verifyToken(token);
        console.log(result)
        if (result) {
          request.user = result;
          return true
        } else return false
      } else return false
    } catch (error) {
      console.log(error)
       return false;
    }
  }
}