import { Controller, Get } from '@nestjs/common';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
constructor(private userService: UsersService){}
    @Get('username')
    async findOne(username: string){
        return await this.userService.findOne(username);
    }
}
