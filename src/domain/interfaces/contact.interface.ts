import { Contact } from '../entities/contact.entity';

export interface IContactRepository {
  findById(id: string): Promise<Contact | null>;
  save(contact: Contact): Promise<Contact>;
  findAll(): Promise<Contact[]>;
  delete(id: string): Promise<boolean>;

}
