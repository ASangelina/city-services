import { Column, Entity, PrimaryGeneratedColumn, OneToOne } from 'typeorm';
import { Professional } from './professional.entity';

@Entity('Contacts')
export class Contact {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ unique: true })
  phoneNumber: string;

  @Column({ unique: true })
  email: string;

  @Column()
  instagram: string;

  @OneToOne(() => Professional, (professional) => professional.contact, {
    onDelete: 'CASCADE',
  })
  professional: Professional;
}
