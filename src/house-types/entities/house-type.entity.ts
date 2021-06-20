import { Field, Int, Float, ObjectType } from '@nestjs/graphql';
import { IsBoolean, IsInt, IsString, Max, Min } from 'class-validator';
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  OneToMany,
  JoinColumn,
} from 'typeorm';
// import { JobScheduling } from "./JobScheduling";

@ObjectType()
@Entity('tbl_HouseType')
export class HouseType {
  @Field(() => Int)
  @PrimaryGeneratedColumn({ type: 'int' })
  HouseTypeID!: number;

  @Field(() => String)
  @IsString()
  @Column({ type: 'nvarchar', length: 70 })
  HouseName!: string;

  @Field(() => String)
  @IsString()
  @Column({ type: 'nvarchar', length: 50 })
  HouseDescription!: string;

  @Field(() => Boolean, { nullable: true })
  @IsBoolean()
  @Column('bit')
  Roofing: boolean = false;

  @Field(() => Boolean, { nullable: true })
  @Column('bit')
  Roughcasting: boolean = false;

  @Field(() => Int, { nullable: true })
  @Column('int')
  FixingSpec: number | null = null;

  @Field(() => Int, { nullable: true })
  @IsInt()
  @Column('int')
  Vents: number | null = null;

  @Field(() => Int)
  @IsInt()
  @Column('int')
  CustomerID!: number;

  @Field(() => Int)
  @IsInt()
  @Column('int')
  SiteID!: number;

  @Field(() => Float)
  @Column('money')
  HouseValue!: number;

  @Field(() => Float, { nullable: true })
  @Column('real')
  ValSplit: number = 1;

  @Field(() => Int)
  @Column('int')
  RateID!: number;

  @Field(() => Float, { nullable: true })
  @Column('money')
  PlotValueTotal!: number;

  @Field(() => Date, { nullable: true })
  @Column('smalldatetime')
  ValueDate: Date | null = null;

  @Field(() => Float)
  @Column('real')
  Area!: number;

  @Field(() => Int, { nullable: true })
  @Column('int')
  ValleyCutsArea: number | null = null;

  @Field(() => Int, { nullable: true })
  @Column('int')
  HipCutsArea: number | null = null;

  @Field(() => Int, { nullable: true })
  @Column('int')
  Beads: number | null = null;

  @Field(() => Int, { nullable: true })
  @Column('int')
  Velux: number | null = null;

  @Field(() => Int, { nullable: true })
  @Column('int')
  Lath: number | null = null;

  @Field(() => Int, { nullable: true })
  @Column('int')
  Ingoes: number | null = null;

  @Field(() => Int, { nullable: true })
  @Column('int')
  Bands: number | null = null;

  @Field(() => Int)
  @IsInt()
  @Min(1)
  @Max(46)
  @Column('int')
  Colour!: number;

  @Field(() => String, { nullable: true })
  @Column({ type: 'nvarchar', length: 255 })
  Remarks: string | null = null;

  @Field(() => Boolean, { nullable: true })
  @Column('bit')
  Verified: boolean = false;

  @Field(() => Date, { nullable: true })
  @Column('smalldatetime')
  VerifiedDate: Date | null = null;

  //SSMA TimeStamp
  // @CreateDateColumn()
  // SSMA_TimeStamp!: Date;

  //   @Field(() => [JobScheduling])
  //   @OneToMany(() => JobScheduling, (jobSched) => jobSched.houseType)
  //   @JoinColumn()
  //   jobScheds!: JobScheduling[];
}
