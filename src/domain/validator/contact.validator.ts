import { Contact } from '../entities/contact.entity';

export class ContactValidator {
  public static ERROR_EMAIL_INVALID = 'Invalid email';
  public static ERROR_EMAIL_ALREADY_IN_USE = 'Email already in use';
  public static ERROR_PHONE_NUMBER_ALREADY_IN_USE = 'Phone Number already in use';


  static verifyEmail(email: string): void {
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      throw new Error(this.ERROR_EMAIL_INVALID);
    }
  }

  static checkEmailAlreadyInUse(contacts: Contact[], email: string): boolean {
    if (contacts.some((contact) => contact.email === email)) {
      throw new Error(this.ERROR_EMAIL_ALREADY_IN_USE);
    }

    return true;
  }

  static checkPhoneAlreadyInUse(contacts: Contact[], phone: string): boolean {
    if (contacts.some((contact) => contact.phoneNumber === phone)) {
      throw new Error(this.ERROR_PHONE_NUMBER_ALREADY_IN_USE);
    }

    return true;
  }

}
