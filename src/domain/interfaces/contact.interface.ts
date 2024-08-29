import { Contact } from '../entities/contact.entity';

export interface IContactRepository {
  findById(id: string): Promise<Contact | null>;
  findByEmailOrPhoneNumber(
    email: string,
    phoneNumber: string,
  ): Promise<Contact | null>;
  save(contact: Contact): Promise<Contact>;
}
