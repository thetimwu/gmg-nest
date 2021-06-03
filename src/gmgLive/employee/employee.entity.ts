import { Field, ObjectType, Int } from 'type-graphql';
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  BaseEntity,
  OneToMany,
  JoinColumn,
  OneToOne,
  ManyToOne,
} from 'typeorm';

@ObjectType()
@Entity('tbl_Employees')
export class Employee extends BaseEntity {
  @Field(() => Int)
  @PrimaryGeneratedColumn({ type: 'int' })
  EmployeeID!: number;

  @Field(() => String)
  @Column({ type: 'nvarchar', length: 50 })
  FirstName!: string;

  @Field(() => String)
  @Column({ type: 'nvarchar', length: 50 })
  LastName!: string;

  @Field(() => String)
  @Column({ type: 'nvarchar', length: 50 })
  AddressLine1!: string;

  @Field(() => String, { nullable: true })
  @Column({ type: 'nvarchar', length: 50 })
  AddressLine2: string | null = null;

  @Field(() => String)
  @Column({ type: 'nvarchar', length: 50 })
  City!: string;

  @Field(() => String, { nullable: true })
  @Column({ type: 'nvarchar', length: 50 })
  PostCode: string | null = null;

  @Field(() => Date, { nullable: true })
  @Column('smalldatetime')
  DateOfBirth: Date | null = null;

  @Field(() => Boolean, { nullable: true })
  @Column('bit')
  Tradesman: boolean | null = null;

  //empoyee type
  @Field(() => Int, { nullable: true })
  @Column('int')
  JobID: number | null = null;

  @Field(() => String)
  @Column({ type: 'nvarchar', length: 50 })
  NINumber!: string;

  @Field(() => String, { nullable: true })
  @Column({ type: 'nvarchar', length: 50 })
  Mobile: string | null = null;

  @Field(() => String, { nullable: true })
  @Column({ type: 'nvarchar', length: 50 })
  EmergContact: string | null = null;

  @Field(() => String, { nullable: true })
  @Column({ type: 'nvarchar', length: 50 })
  EmergPhone: string | null = null;

  @Field(() => Boolean)
  @Column('bit')
  Verified: boolean = false;

  @Field(() => Date, { nullable: true })
  @Column('smalldatetime')
  StartDate: Date | null = null;

  @Field(() => Date, { nullable: true })
  @Column('smalldatetime')
  LeavingDate: Date | null = null;

  @Field(() => Boolean)
  @Column('bit')
  Current: boolean = false;

  @Field(() => String, { nullable: true })
  @Column({ type: 'nvarchar', length: 500 })
  Notes: string | null = null;
}
