import { Injectable } from '@nestjs/common';
import { CreateRecordDto } from './dto/create-record.dto';
import { UpdateRecordDto } from './dto/update-record.dto';
import { AbstractRecordsService } from './abstract-records.service';
@Injectable()
export class DrugService implements AbstractRecordsService {
  create(createRecordDto: CreateRecordDto) {
    console.log(createRecordDto);
    return 'This action adds a new drug record';
  }

  findAll() {
    return `This action returns all drug records`;
  }

  findOne(id: number) {
    return `This action returns a #${id} drug record`;
  }

  update(id: number, updateRecordDto: UpdateRecordDto) {
    console.log(updateRecordDto);
    return `This action updates a #${id} drug record`;
  }

  remove(id: number) {
    return `This action removes a #${id} drug record`;
  }
}
