import {
  Column,
  Entity,
  PrimaryGeneratedColumn,
  ManyToOne,
  JoinColumn,
  OneToOne,
} from 'typeorm';

import { Location } from './location.entity';
import { Service } from './service.entity';
import { Contact } from './contact.entity';

@Entity('Professionals')
export class Professional {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;

  @ManyToOne(() => Service, (service) => service.professionals, {
    cascade: true,
  })
  @JoinColumn({ name: 'service_id' })
  service: Service;

  @ManyToOne(() => Location, (location) => location.professionals, {
    cascade: true,
  })
  @JoinColumn({ name: 'location_id' })
  location: Location;

  @OneToOne(() => Contact, (contact) => contact.professional, {
    cascade: true,
  })
  @JoinColumn({ name: 'contact_id' })
  contact: Contact;
}
