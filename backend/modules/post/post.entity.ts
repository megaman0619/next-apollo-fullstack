import { Entity, Column, PrimaryColumn, Generated, ManyToOne } from 'typeorm';
import { Post } from '~/backend/types/graphql';
import { UserEntity } from '../user/user.entity';

@Entity('post')
export class PostEntity implements Post {
  @PrimaryColumn()
  @Generated('uuid')
  id: string;

  @Column()
  title: string;

  @Column()
  content: string;

  @ManyToOne(type => UserEntity, { nullable: false })
  author: UserEntity;
}
