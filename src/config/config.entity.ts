import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('config')
export class ConfigEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column('json', {
    nullable: false,
  })
  config: string;
}
