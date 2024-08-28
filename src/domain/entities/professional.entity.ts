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

  @Column()
  email: string;

  @ManyToOne(() => Service, (service) => service.professionals)
  @JoinColumn({ foreignKeyConstraintName: 'service_id' })
  service: Service;

  @ManyToOne(() => Location, (location) => location.professionals)
  @JoinColumn({ foreignKeyConstraintName: 'location_id' })
  location: Location;

  @OneToOne(() => Contact, (contact) => contact.professional)
  @JoinColumn({ foreignKeyConstraintName: 'contact_id' })
  contact: Contact;
}
