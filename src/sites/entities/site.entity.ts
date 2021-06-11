import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  OneToMany,
  JoinColumn,
} from 'typeorm';

@Entity('tbl_Sites')
export class Site {
  @PrimaryGeneratedColumn({ type: 'int' })
  SiteID!: number;

  @Column({ type: 'nvarchar', length: 50 })
  SiteName!: string;

  @Column({ type: 'nvarchar', length: 50 })
  AddressLine1!: string;

  @Column({ type: 'nvarchar', length: 50 })
  AddressLine2: string | null = null;

  @Column({ type: 'nvarchar', length: 50 })
  City!: string;

  @Column({ type: 'nvarchar', length: 8 })
  PostalCode: string | null = null;

  @Column('int')
  ContactID: number = 0;

  @Column('int')
  CustomerID!: number;

  @Column('int')
  NoOfUnits!: number;

  @Column('int')
  Status: number = 2;

  @Column('bit')
  LiveSite: boolean = true;

  @Column('real')
  MCD: number = 0;

  @Column('real')
  RetentionRate: number = 0;

  @Column('money')
  CappedRetentionValue: number = 0;

  @Column('money')
  RenderCappedRetentionValue: number = 0;

  @Column('money')
  CurrentRetentionValue: number = 0;

  @Column({ type: 'nvarchar', length: 50 })
  Notes: string | null = null;

  @Column('bit')
  Awarded: boolean = true;

  @Column({ type: 'nvarchar', length: 50 })
  User: string = 'Admin';

  //@CreateDateColumn('smalldatetime')
  @Column('smalldatetime')
  Date: Date = new Date();
}
