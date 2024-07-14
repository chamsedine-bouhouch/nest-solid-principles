import { Injectable } from '@nestjs/common';
import { CreateRecordDto } from './dto/create-record.dto';
import { UpdateRecordDto } from './dto/update-record.dto';

@Injectable()
export abstract class AbstractRecordsService {
  abstract create(createRecordDto: CreateRecordDto);

  abstract findAll();

  abstract findOne(id: number);

  abstract update(id: number, updateRecordDto: UpdateRecordDto);

  abstract remove(id: number);
}
