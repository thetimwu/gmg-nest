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
@Entity('tbl_Sites')
export class Site {
  @Field((type) => ID)
  @PrimaryGeneratedColumn({ type: 'int' })
  SiteID!: number;

  @Field((type) => String)
  @Column({ type: 'nvarchar', length: 50 })
  SiteName!: string;

  @Field((type) => String)
  @Column({ type: 'nvarchar', length: 50 })
  AddressLine1!: string;

  @Field((type) => String, { nullable: true })
  @Column({ type: 'nvarchar', length: 50 })
  AddressLine2: string | null = null;

  @Field((type) => String, { nullable: true })
  @Column({ type: 'nvarchar', length: 50 })
  City!: string;

  @Field((type) => String, { nullable: true })
  @Column({ type: 'nvarchar', length: 8 })
  PostalCode: string | null = null;

  @Field((type) => Int, { nullable: true })
  @Column('int')
  ContactID: number = 0;

  @Field((type) => Int, { nullable: true })
  @Column('int')
  CustomerID!: number;

  @Field((type) => Int)
  @Column('int')
  NoOfUnits!: number;

  @Field((type) => Int, { nullable: true })
  @Column('int')
  Status: number = 2;

  @Field((type) => Boolean, { nullable: true })
  @Column('bit')
  LiveSite: boolean = true;

  @Field((type) => Float, { nullable: true })
  @Column('real')
  MCD: number = 0;

  @Field((type) => Float, { nullable: true })
  @Column('real')
  RetentionRate: number = 0;

  @Field((type) => Float, { nullable: true })
  @Column('money')
  CappedRetentionValue: number = 0;

  @Field((type) => Float, { nullable: true })
  @Column('money')
  RenderCappedRetentionValue: number = 0;

  @Field((type) => Float, { nullable: true })
  @Column('money')
  CurrentRetentionValue: number = 0;

  @Field((type) => String, { nullable: true })
  @Column({ type: 'nvarchar', length: 50 })
  Notes: string | null = null;

  @Field((type) => Boolean, { nullable: true })
  @Column('bit')
  Awarded: boolean = true;

  @Field((type) => String, { nullable: true })
  @Column({ type: 'nvarchar', length: 50 })
  User: string = 'Admin';

  //@CreateDateColumn('smalldatetime')
  @Field((type) => Date, { nullable: true })
  @Column('smalldatetime')
  Date: Date = new Date();
}
