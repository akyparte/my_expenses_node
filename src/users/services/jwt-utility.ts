import { Injectable } from "@nestjs/common";

const jwt = require("jsonwebtoken");

const config = process.env;
@Injectable()
export class JWTUtility {

    verifyToken(token:string){
          return jwt.verify(token, config.TOKEN_KEY);
    }

      createToken(userid:string) {
        const token = jwt.sign(
          { user_id: userid},
          process.env.TOKEN_KEY
        );
  
        return token
      
    }
}
