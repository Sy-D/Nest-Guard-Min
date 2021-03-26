import { Body, Controller, Delete, Get, Post, UseGuards } from '@nestjs/common';
import { ApiResponse } from '@nestjs/swagger/dist/decorators/api-response.decorator';
import { Metadata } from '@grpc/grpc-js';
import { ObjectId } from 'mongoose';
import { LanguageService } from './language.service';
import { LanguageDto } from './dto/create-language.dto';
import { BaseUpdateDto } from '../../dto/core/update-entity.dto';
import { JwtAuthGuard } from '../../iam/auth/guard/jwt-auth.guard';
import { LocalAuthGuard } from '../../iam/auth/guard/local-auth.guard';
import { Public } from '../../decorator/public.decorator';

@Controller('lookup/languages')
export class LanguageController {
    constructor(private readonly languageService: LanguageService) {}

    @Get()
 //   @UseGuards(JwtAuthGuard)
    @ApiResponse({ status: 200, description: 'Get all countries successfull' })
    @ApiResponse({ status: 404, description: 'Countries do not exists' })
    async getAll() {
        //return await this.languageService.methods.findAll({});
    }

    @Post()
  //  @UseGuards(JwtAuthGuard)
    @ApiResponse({ status: 200, description: 'Save successfull' })
    @ApiResponse({ status: 404, description: 'Entity does not exist' })
    async create(
        @Body() language: Readonly<Exclude<LanguageDto, BaseUpdateDto>>,
    ) {
        console.log('language recieved', language);
        const metadata = new Metadata();
        metadata.add('role', 'admin');
        console.log('meta', metadata);
       /* const val = await this.languageService.methods.create(
            language,
            metadata,
        );
        console.log('save', val);
        return val;*/
    }

    @Get(':id')
   // @UseGuards(JwtAuthGuard)
    @ApiResponse({ status: 200, description: 'Get language successfull' })
    @ApiResponse({ status: 404, description: 'Entity does not exist' })
    async getSingle(@Body() id: ObjectId): Promise<any> {
      /*  const val = await this.languageService.methods.findById(id);
        console.log('single', val);
        return val;*/

        return 'de-DE';
    }

    @Post(':id')
   // @UseGuards(JwtAuthGuard)
    @ApiResponse({ status: 200, description: 'Get language successfull' })
    @ApiResponse({ status: 404, description: 'Entity does not exist' })
    async update(@Body() id: Required<Readonly<LanguageDto>>): Promise<any> {
        console.log('Update language', id);
        /*const val = await this.languageService.methods.update(id);
        console.log('single', val);
        return val;*/

        return 'de-DE';
    }

    @Delete(':id')
   // @UseGuards(JwtAuthGuard)
    @ApiResponse({ status: 200, description: 'Delete operation successfull' })
    @ApiResponse({ status: 404, description: 'Entity does not exist' })
    async delete(@Body() id: ObjectId) {
       /*const val = await this.languageService.methods.delete(id);
        console.log('del', val);
        return val;*/

    }

    @Public()
    @Post('is-supported')
    @ApiResponse({status: 200, description: 'Returns application supported language'})
    @ApiResponse({ status: 404, description: 'Entity does not exist' })
    async isSupportedLanguage(@Body() language: string) {
        console.log('supported lang', language);

        return true;
    }
}
