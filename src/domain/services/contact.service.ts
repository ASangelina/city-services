import { ConflictException, Inject, Injectable } from '@nestjs/common';
import { IContactRepository } from '../interfaces/contact.interface';
import { CreateContactDto } from 'src/application/dtos/create-contact.dto';
import { Contact } from '../entities/contact.entity';

@Injectable()
export class ContactService {
  constructor(
    @Inject('IContactRepository')
    private readonly contactRepository: IContactRepository,
  ) {}

  async createContact(contact: CreateContactDto): Promise<Contact> {
    const contactExists = await this.contactRepository.findByEmailOrPhoneNumber(
      contact.email,
      contact.phoneNumber,
    );

    if (contactExists) {
      throw new ConflictException(
        'Contact with the same email or phone number already exists.',
      );
    }

    const newContact = new Contact();
    newContact.phoneNumber = contact.phoneNumber;
    newContact.email = contact.email;
    newContact.instagram = contact.instagram;

    return this.contactRepository.save(newContact);
  }
}
