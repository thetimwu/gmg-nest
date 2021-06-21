import { ObjectType, Field, Int } from '@nestjs/graphql';
import {
  Entity,
  PrimaryColumn,
  Column,
  BaseEntity,
  OneToMany,
  OneToOne,
  JoinColumn,
} from 'typeorm';

@ObjectType()
@Entity('GMGUser')
export class Gmguser extends BaseEntity {
  @Field(() => Int)
  @PrimaryColumn({ type: 'int', insert: true })
  id!: number;

  @Field(() => String)
  @Column({ type: 'nvarchar', length: 255 })
  firstName!: string;

  @Field(() => String)
  @Column({ type: 'nvarchar', length: 255 })
  lastName!: string;

  @Field(() => String, { nullable: true })
  @Column('nvarchar')
  usertype: string | null = null;

  @Field(() => String, { nullable: true })
  @Column('nvarchar')
  email: string | null = null;

  @Field(() => String)
  @Column({ type: 'nvarchar', length: 255 })
  password!: string;

  @Field(() => String)
  @Column({ type: 'nvarchar', unique: true })
  username!: string;

  @Field(() => Boolean, { nullable: true })
  @Column('bit')
  emailVerified: string | null = null;

  @Field(() => String, { nullable: true })
  @Column({ type: 'nvarchar', length: 255 })
  verificationToken: string | null = null;
}
