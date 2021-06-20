import { Field, Float, ID, Int, ObjectType } from '@nestjs/graphql';
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  OneToMany,
  JoinColumn,
} from 'typeorm';

@ObjectType()
@Entity('tbl_Customers')
export class Customer {
  @Field((type) => ID)
  @PrimaryGeneratedColumn({ type: 'int' })
  CustomerID!: number;

  @Field((type) => String)
  @Column({ type: 'nvarchar', length: 50 })
  CustomerName!: string;

  @Field((type) => String)
  @Column({ type: 'nvarchar', length: 50 })
  BillingAddressLine1!: string;

  @Field((type) => String, { nullable: true })
  @Column({ type: 'nvarchar', length: 50 })
  BillingAddressLine2: string | null = null;

  @Field((type) => String)
  @Column({ type: 'nvarchar', length: 50 })
  City!: string;

  @Field((type) => String)
  @Column({ type: 'nvarchar', length: 8 })
  PostalCode!: string;

  @Field((type) => String, { nullable: true })
  @Column({ type: 'nvarchar', length: 50 })
  Country: string | null = null;

  @Field((type) => String)
  @Column({ type: 'nvarchar', length: 30 })
  PhoneNumber!: string;

  @Field((type) => String)
  @Column({ type: 'nvarchar', length: 30 })
  FaxNumber!: string;

  @Field((type) => Boolean, { nullable: true })
  @Column('bit')
  NonPrivate: boolean = false;

  @Field((type) => Boolean, { nullable: true })
  @Column('bit')
  CustomerType: boolean = false;
}
