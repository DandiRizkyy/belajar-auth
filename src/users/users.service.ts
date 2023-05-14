import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class UsersService {

    constructor(private prismaService: PrismaService){}

    async findOne(username: string){
        return await this.prismaService.user.findFirst({
            where: {username}
        });
    }
}

