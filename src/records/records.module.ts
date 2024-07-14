import { Module } from '@nestjs/common';
import { RecordsController } from './records.controller';
import { DrugService } from './drug.service';
import { CountryService } from './country.service';
import { RecordsServiceFactory } from './records-service.factory';

@Module({
  controllers: [RecordsController],
  providers: [DrugService, CountryService, RecordsServiceFactory],
})
export class RecordsModule {}
