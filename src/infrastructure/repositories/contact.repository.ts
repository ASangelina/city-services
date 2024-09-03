import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Contact } from '../../domain/entities/contact.entity';
import { IContactRepository } from 'src/domain/interfaces/contact.interface';

@Injectable()
export class ContactRepository implements IContactRepository {
  constructor(
    @InjectRepository(Contact)
    private readonly contactRepository: Repository<Contact>,
  ) {}

  async findAll(): Promise<Contact[]> {
    return await this.contactRepository.find({
      relations: ['professional'],
    });
  }

  async findById(id: string): Promise<Contact> {
    return this.contactRepository.findOne({
      where: { id },
      relations: ['professional'],
    });
  }

  async save(contact: Contact): Promise<Contact> {
    return await this.contactRepository.save(contact);
  }

  async delete(id: string): Promise<boolean> {
    const result = await this.contactRepository.delete(id);
    return result.affected > 0;
  }
}
