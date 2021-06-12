import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  OneToMany,
  JoinColumn,
} from 'typeorm';

@Entity('tbl_Customers')
export class Customer {
  @PrimaryGeneratedColumn({ type: 'int' })
  CustomerID!: number;

  @Column({ type: 'nvarchar', length: 50 })
  CustomerName!: string;

  @Column({ type: 'nvarchar', length: 50 })
  BillingAddressLine1!: string;

  @Column({ type: 'nvarchar', length: 50 })
  BillingAddressLine2: string | null = null;

  @Column({ type: 'nvarchar', length: 50 })
  City!: string;

  @Column({ type: 'nvarchar', length: 8 })
  PostalCode!: string;

  @Column({ type: 'nvarchar', length: 50 })
  Country: string | null = null;

  @Column({ type: 'nvarchar', length: 30 })
  PhoneNumber!: string;

  @Column({ type: 'nvarchar', length: 30 })
  FaxNumber!: string;

  @Column('bit')
  NonPrivate: boolean = false;

  @Column('bit')
  CustomerType: boolean = false;

  //SSMA TimeStamp
  // @CreateDateColumn()
  // SSMA_TimeStamp!: Date;
}
