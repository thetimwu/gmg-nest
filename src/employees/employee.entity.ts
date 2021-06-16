import { ApiProperty } from '@nestjs/swagger';
import { Field, Float, ID, Int, ObjectType } from '@nestjs/graphql';
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
  @Field((type) => ID)
  @ApiProperty()
  @PrimaryGeneratedColumn({ type: 'int' })
  EmployeeID!: number;

  @Field((type) => String)
  @ApiProperty()
  @Column({ type: 'nvarchar', length: 50 })
  FirstName!: string;

  @Field((type) => String)
  @ApiProperty()
  @Column({ type: 'nvarchar', length: 50 })
  LastName!: string;

  @Field((type) => String)
  @ApiProperty()
  @Column({ type: 'nvarchar', length: 50 })
  AddressLine1!: string;

  @Field((type) => String, { nullable: true })
  @ApiProperty()
  @Column({ type: 'nvarchar', length: 50 })
  AddressLine2: string | null = null;

  @Field((type) => String)
  @ApiProperty()
  @Column({ type: 'nvarchar', length: 50 })
  City!: string;

  @Field((type) => String, { nullable: true })
  @ApiProperty()
  @Column({ type: 'nvarchar', length: 50 })
  PostCode: string | null = null;

  @Field((type) => Date, { nullable: true })
  @Column('smalldatetime')
  DateOfBirth: Date | null = null;

  @Field((type) => Boolean, { nullable: true })
  @Column('bit')
  Tradesman: boolean | null = null;

  //empoyee type
  @Field((type) => Int)
  @Column('int')
  JobID!: number;

  @Field((type) => String)
  @ApiProperty()
  @Column({ type: 'nvarchar', length: 50 })
  NINumber!: string;

  @Field((type) => String, { nullable: true })
  @ApiProperty()
  @Column({ type: 'nvarchar', length: 50 })
  Mobile: string | null = null;

  @Field((type) => String, { nullable: true })
  @ApiProperty()
  @Column({ type: 'nvarchar', length: 50 })
  EmergContact: string | null = null;

  @Field((type) => String, { nullable: true })
  @ApiProperty()
  @Column({ type: 'nvarchar', length: 50 })
  EmergPhone: string | null = null;

  @Field((type) => Boolean, { nullable: true })
  @ApiProperty()
  @Column('bit')
  Verified: boolean = false;

  @Field((type) => Date, { nullable: true })
  @ApiProperty()
  @Column('smalldatetime')
  StartDate: Date | null = null;

  @Field((type) => Date, { nullable: true })
  @ApiProperty()
  @Column('smalldatetime')
  LeavingDate: Date | null = null;

  @Field((type) => Boolean, { nullable: true })
  @ApiProperty()
  @Column('bit')
  Current: boolean = false;

  @Field((type) => String, { nullable: true })
  @ApiProperty()
  @Column({ type: 'nvarchar', length: 500 })
  Notes: string | null = null;
}
