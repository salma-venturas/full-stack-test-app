import { Entity, Column, PrimaryGeneratedColumn, IsNull } from 'typeorm';

@Entity({ name: 'detail' })
export class Detail {
  @Column({ default: 1 })
  userId: number;

  @PrimaryGeneratedColumn()
  id: number;

  @Column( {default: null})
  title: string;

  @Column({default: null})
  body: string;
}
