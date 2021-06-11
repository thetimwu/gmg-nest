import { ApiProperty } from '@nestjs/swagger';
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

@Entity('tbl_Employees')
export class Employee extends BaseEntity {
  @ApiProperty()
  @PrimaryGeneratedColumn({ type: 'int' })
  EmployeeID!: number;

  @ApiProperty()
  @Column({ type: 'nvarchar', length: 50 })
  FirstName!: string;

  @ApiProperty()
  @Column({ type: 'nvarchar', length: 50 })
  LastName!: string;

  @ApiProperty()
  @Column({ type: 'nvarchar', length: 50 })
  AddressLine1!: string;

  @ApiProperty()
  @Column({ type: 'nvarchar', length: 50 })
  AddressLine2: string | null = null;

  @ApiProperty()
  @Column({ type: 'nvarchar', length: 50 })
  City!: string;

  @ApiProperty()
  @Column({ type: 'nvarchar', length: 50 })
  PostCode: string | null = null;

  @Column('smalldatetime')
  DateOfBirth: Date | null = null;

  @Column('bit')
  Tradesman: boolean | null = null;

  //empoyee type
  @Column('int')
  JobID!: number;

  @ApiProperty()
  @Column({ type: 'nvarchar', length: 50 })
  NINumber!: string;

  @ApiProperty()
  @Column({ type: 'nvarchar', length: 50 })
  Mobile: string | null = null;

  @ApiProperty()
  @Column({ type: 'nvarchar', length: 50 })
  EmergContact: string | null = null;

  @ApiProperty()
  @Column({ type: 'nvarchar', length: 50 })
  EmergPhone: string | null = null;

  @ApiProperty()
  @Column('bit')
  Verified: boolean = false;

  @ApiProperty()
  @Column('smalldatetime')
  StartDate: Date | null = null;

  @ApiProperty()
  @Column('smalldatetime')
  LeavingDate: Date | null = null;

  @ApiProperty()
  @Column('bit')
  Current: boolean = false;

  @ApiProperty()
  @Column({ type: 'nvarchar', length: 500 })
  Notes: string | null = null;
}
