import { IContactRepository } from '../interfaces/contact.interface';
import { CreateContactDto } from 'src/application/dtos/create-contact.dto';
import { Contact } from '../entities/contact.entity';
import { ContactValidator } from '../validator/contact.validator';
import { Inject, Injectable } from '@nestjs/common';

@Injectable()
export class ContactService {
  constructor(
    @Inject('IContactRepository')
    private readonly contactRepository: IContactRepository,
  ) {}

  async createContact(contact: CreateContactDto): Promise<Contact> {
    const contacts = await this.contactRepository.findAll();
    ContactValidator.verifyEmail(contact.email);
    ContactValidator.checkEmailAlreadyInUse(contacts, contact.email);
    ContactValidator.checkPhoneAlreadyInUse(contacts, contact.phoneNumber);

    const newContact = new Contact();
    newContact.phoneNumber = contact.phoneNumber;
    newContact.email = contact.email;
    newContact.instagram = contact.instagram;

    return await this.contactRepository.save(newContact);
  }

  async deleteContact(id: string) {
    const contact = await this.contactRepository.findById(id);
    if (!contact) {
      throw new Error('Contact not found');
    }
    return await this.contactRepository.delete(id);
  }
}
