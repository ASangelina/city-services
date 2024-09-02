import { ConflictException, Inject, Injectable } from '@nestjs/common';
import { IContactRepository } from '../interfaces/contact.interface';
import { CreateContactDto } from 'src/application/dtos/create-contact.dto';
import { Contact } from '../entities/contact.entity';
import { ContactValidator } from "../validator/contact.validator";

@Injectable()
export class ContactService {
  private contacts: Contact[] = [];
  constructor(
    @Inject('IContactRepository')
    private readonly contactRepository: IContactRepository,
  ) {}

  async createContact(contact: CreateContactDto): Promise<Contact> {
    ContactValidator.verifyEmail(contact.email);
    ContactValidator.checkEmailAlreadyInUse(this.contacts, contact.email);
    ContactValidator.checkPhoneAlreadyInUse(this.contacts, contact.phoneNumber);

    const newContact = new Contact();
    newContact.phoneNumber = contact.phoneNumber;
    newContact.email = contact.email;
    newContact.instagram = contact.instagram;

    this.contacts.push(newContact);

    return await this.contactRepository.save(newContact);
  }
}
