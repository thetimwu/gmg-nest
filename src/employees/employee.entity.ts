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
  @PrimaryGeneratedColumn({ type: 'int' })
  EmployeeID!: number;

  @Column({ type: 'nvarchar', length: 50 })
  FirstName!: string;

  @Column({ type: 'nvarchar', length: 50 })
  LastName!: string;

  @Column({ type: 'nvarchar', length: 50 })
  AddressLine1!: string;

  @Column({ type: 'nvarchar', length: 50 })
  AddressLine2: string | null = null;

  @Column({ type: 'nvarchar', length: 50 })
  City!: string;

  @Column({ type: 'nvarchar', length: 50 })
  PostCode: string | null = null;

  @Column('smalldatetime')
  DateOfBirth: Date | null = null;

  @Column('bit')
  Tradesman: boolean | null = null;

  //empoyee type
  @Column('int')
  JobID: number | null = null;

  @Column({ type: 'nvarchar', length: 50 })
  NINumber!: string;

  @Column({ type: 'nvarchar', length: 50 })
  Mobile: string | null = null;

  @Column({ type: 'nvarchar', length: 50 })
  EmergContact: string | null = null;

  @Column({ type: 'nvarchar', length: 50 })
  EmergPhone: string | null = null;

  @Column('bit')
  Verified: boolean = false;

  @Column('smalldatetime')
  StartDate: Date | null = null;

  @Column('smalldatetime')
  LeavingDate: Date | null = null;

  @Column('bit')
  Current: boolean = false;

  @Column({ type: 'nvarchar', length: 500 })
  Notes: string | null = null;
}
