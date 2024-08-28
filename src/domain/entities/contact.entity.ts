import { Column, Entity, PrimaryGeneratedColumn, OneToOne } from 'typeorm';
import { Professional } from './professional.entity';

@Entity('Contacts')
export class Contact {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  phoneNumber: string;

  @Column()
  email: string;

  @Column()
  instagram: string;

  @OneToOne(() => Professional, (professional) => professional.contact)
  professional: Professional;
}
