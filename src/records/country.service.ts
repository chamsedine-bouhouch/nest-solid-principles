import { Injectable } from '@nestjs/common';
import { CreateRecordDto } from './dto/create-record.dto';
import { UpdateRecordDto } from './dto/update-record.dto';
import { AbstractRecordsService } from './abstract-records.service';

@Injectable()
export class CountryService implements AbstractRecordsService {
  private readonly records = [];

  create(createRecordDto: CreateRecordDto) {
    const newRecord = { id: Date.now(), ...createRecordDto };
    this.records.push(newRecord);
    return newRecord;
  }

  findAll() {
    return this.records;
  }

  findOne(id: number) {
    const record = this.records.find((record) => record.id === id);
    if (!record) {
      throw new Error(`Record with ID ${id} not found`);
    }
    return record;
  }

  update(id: number, updateRecordDto: UpdateRecordDto) {
    const recordIndex = this.records.findIndex((record) => record.id === id);
    if (recordIndex === -1) {
      throw new Error(`Record with ID ${id} not found`);
    }
    const updatedRecord = { ...this.records[recordIndex], ...updateRecordDto };
    this.records[recordIndex] = updatedRecord;
    return updatedRecord;
  }

  remove(id: number) {
    const recordIndex = this.records.findIndex((record) => record.id === id);
    if (recordIndex === -1) {
      throw new Error(`Record with ID ${id} not found`);
    }
    const removedRecord = this.records.splice(recordIndex, 1);
    return removedRecord[0];
  }
}
