import { Field, Float, Int, ObjectType } from '@nestjs/graphql';
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  OneToMany,
  JoinColumn,
} from 'typeorm';
// import { MenAllocation } from "./MenAllocation";

@ObjectType()
@Entity('tbl_CatRate')
export class CatRate {
  @Field(() => Int)
  @PrimaryGeneratedColumn({ type: 'int' })
  RateID!: number;

  @Field(() => String, { description: 'Category name' })
  @Column({ type: 'nvarchar', length: 50 })
  Category!: string;

  @Field(() => Float, { description: 'Pay rate' })
  @Column('money')
  Rate!: number;

  @Field(() => String, { nullable: true })
  @Column({ type: 'nvarchar', length: 50 })
  UsedFor: string | null = null;

  // @Field(() => [MenAllocation])
  // @OneToMany(() => MenAllocation, (menAllocation) => menAllocation.catRate)
  // @JoinColumn()
  // menAllocs!: MenAllocation[];
}
