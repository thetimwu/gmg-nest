import { Entity, PrimaryGeneratedColumn, Column, BaseEntity } from 'typeorm';

@Entity('Employees')
export class Employee extends BaseEntity {
  @PrimaryGeneratedColumn({ type: 'int' })
  EmployeeID!: number;

  @Column({ type: 'nvarchar', length: 50 })
  FirstName!: string;

  @Column({ type: 'nvarchar', length: 50 })
  LastName!: string;
}
