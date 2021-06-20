import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  ValidationPipe,
} from '@nestjs/common';
import { SitesService } from './sites.service';
import { CreateSiteDto } from './dto/create-site.dto';
import { UpdateSiteDto } from './dto/update-site.dto';
import {
  ApiBadRequestResponse,
  ApiCreatedResponse,
  ApiNotFoundResponse,
  ApiOkResponse,
  ApiOperation,
  ApiTags,
} from '@nestjs/swagger';
import { Site } from './entities/site.entity';

@ApiTags('Site')
@Controller('sites')
export class SitesController {
  constructor(private readonly sitesService: SitesService) {}

  @ApiCreatedResponse({ type: CreateSiteDto, description: 'Site created!' })
  @ApiBadRequestResponse()
  @Post()
  @ApiOperation({ summary: 'Create a new Site' })
  create(@Body(new ValidationPipe()) createSiteDto: CreateSiteDto) {
    return this.sitesService.create(createSiteDto);
  }

  @ApiOkResponse({ type: [Site], description: 'Successful' })
  @Get()
  findAll() {
    return this.sitesService.findAll();
  }

  @ApiOkResponse()
  @ApiNotFoundResponse()
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.sitesService.findOne(+id);
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Update a Site' })
  update(
    @Param('id') id: string,
    @Body(new ValidationPipe()) updateSiteDto: UpdateSiteDto,
  ) {
    return this.sitesService.update(+id, updateSiteDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.sitesService.remove(+id);
  }
}
