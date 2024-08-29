import { Column, Entity, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { Professional } from './professional.entity';

@Entity('Services')
export class Service {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  description: string;

  @Column()
  category: string;

  @OneToMany(() => Professional, (professional) => professional.service, {
    onDelete: 'CASCADE',
  })
  professionals: Professional[];
}
