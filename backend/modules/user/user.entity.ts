import { Entity, Column, PrimaryColumn, Generated } from 'typeorm';
import { IsEmail } from 'class-validator';
import { User } from '~/backend/types/graphql';

@Entity('user')
export class UserEntity implements User {
  @PrimaryColumn()
  @Generated('uuid')
  id: string;

  @Column({ unique: true })
  @IsEmail()
  email: string;

  @Column()
  password: string;
}
