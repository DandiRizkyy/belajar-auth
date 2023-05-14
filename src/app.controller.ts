import { Controller, Get, Post, Req, UseGuards } from '@nestjs/common';
import { AppService } from './app.service';
import { LocalAuthGuard } from './auth/local-auth.guard';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}


   //POST /login
   @UseGuards(LocalAuthGuard)
   @Post('login')
   login(@Req() req):any{
     return {msg:'Logged in successfully'};
   }

  // GET /protected
  @Get('protected')
  getHello(@Req() req) {
    return this.appService.getHello(req);
  }
}
