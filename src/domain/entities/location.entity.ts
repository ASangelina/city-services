import { Column, Entity, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { Professional } from './professional.entity';

@Entity('Locations')
export class Location {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  city: string;

  @Column()
  state: string;

  @OneToMany(() => Professional, (professional) => professional.location)
  professionals: Professional[];
}
