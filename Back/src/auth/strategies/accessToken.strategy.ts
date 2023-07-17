import { PassportStrategy } from "@nestjs/passport";
import { ExtractJwt, Strategy } from "passport-jwt";

type JwtPayload={
    sub:string ,
    userName : string
}

export class AccessTokenStrategy extends PassportStrategy(Strategy,'jwt'){
    constructor(){
        super({
            jwtFromRequest:ExtractJwt.fromAuthHeaderAsBearerToken(),
            secretOrKey:process.env.JWT_ACCESS_TOKEN_SECRET
        })
    }

    validate(JwtPayload:JwtPayload){
        return JwtPayload
    }
}