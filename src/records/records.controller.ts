import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Query,
} from '@nestjs/common';
import { CreateRecordDto } from './dto/create-record.dto';
import { UpdateRecordDto } from './dto/update-record.dto';
import { RecordsServiceFactory } from './records-service.factory';

@Controller('records')
export class RecordsController {
  constructor(private readonly recordsServiceFactory: RecordsServiceFactory) {}

  @Post()
  create(
    @Query('type') type: string,
    @Body() createRecordDto: CreateRecordDto,
  ) {
    const service = this.recordsServiceFactory.getService(type);
    return service.create(createRecordDto);
  }

  @Get()
  findAll(@Query('type') type: string) {
    const service = this.recordsServiceFactory.getService(type);
    return service.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string, @Query('type') type: string) {
    const service = this.recordsServiceFactory.getService(type);
    return service.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Query('type') type: string,
    @Body() updateRecordDto: UpdateRecordDto,
  ) {
    const service = this.recordsServiceFactory.getService(type);
    return service.update(+id, updateRecordDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string, @Query('type') type: string) {
    const service = this.recordsServiceFactory.getService(type);
    return service.remove(+id);
  }
}
