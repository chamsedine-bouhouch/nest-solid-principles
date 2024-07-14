import { Injectable } from '@nestjs/common';
import { DrugService } from './drug.service';
import { CountryService } from './country.service';

@Injectable()
export class RecordsServiceFactory {
  constructor(
    private readonly drugService: DrugService,
    private readonly countryService: CountryService,
  ) {}

  getService(type: string) {
    if (type === 'Drug') {
      return this.drugService;
    } else if (type === 'Country') {
      return this.countryService;
    }
    throw new Error('Invalid service type');
  }
}
