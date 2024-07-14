import { Test, TestingModule } from '@nestjs/testing';
import { RecordsController } from './records.controller';
import { DrugService } from './drug.service';
import { CountryService } from './country.service';
import { RecordsServiceFactory } from './records-service.factory';

describe('RecordsController', () => {
  let controller: RecordsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [RecordsController],
      providers: [RecordsServiceFactory, DrugService, CountryService],
    }).compile();

    controller = module.get<RecordsController>(RecordsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
