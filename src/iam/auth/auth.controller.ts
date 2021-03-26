import { Controller, UseGuards, Post, Request, Get, Body } from '@nestjs/common';
import { ApiResponse } from '@nestjs/swagger/dist/decorators/api-response.decorator';
import { AuthGuard } from '@nestjs/passport';
import { AuthService } from './auth.service';
import { LocalAuthGuard } from './guard/local-auth.guard';

@Controller('auth')
export class AuthController {
    constructor(
        public readonly authService: AuthService) {
      }

    @Post('login')
    @ApiResponse({ status: 200, description: 'Update password successfully.' })
    @ApiResponse({ status: 404, description: 'Entity does not exist' })
    async login(@Body() req: any): Promise<any> {
        console.log('Login: ', req);
        return this.authService.login(req);
    }

    @UseGuards(LocalAuthGuard)
    @Get('logout')
    @ApiResponse({ status: 200, description: 'Logout successfully.' })
    @ApiResponse({ status: 404, description: 'Entity does not exist' })
    async logout(@Request() req): Promise<any> {
        req.logout();
    }


}
