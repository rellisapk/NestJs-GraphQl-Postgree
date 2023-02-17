import { ObjectType, Field, Int } from '@nestjs/graphql';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
@ObjectType()
export class Produk {
  @PrimaryGeneratedColumn()
  @Field(() => Int, { description: 'ID Barang' })
  id: number;
  @Column()
  @Field(() => String, { description: 'Nama Barang' })
  nama_barang: string;
  @Column()
  @Field(() => String, { description: 'Kode Barang' })
  kode_barang: string;
  @Column('int')
  @Field(() => Int, { description: 'Jumlah Barang' })
  jumlah_barang: number;
  @Column()
  @Field(() => Date, { description: 'Tanggal Bikin' })
  created_date: string;
  @Column()
  @Field(() => Date, { description: 'Tanggal Updated' })
  updated_date: string;
}