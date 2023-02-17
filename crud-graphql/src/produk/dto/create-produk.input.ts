import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreateProdukInput {
  @Field(() => String, { description: 'Nama Barang' })
  nama_barang: string;
  @Field(() => String, { description: 'Kode Barang' })
  kode_barang: string;
  @Field(() => Int, { description: 'Jumlah Barang' })
  jumlah_barang: number;
  @Field(() => Date, { description: 'Tanggal Bikin' })
  created_date: string;
  @Field(() => Date, { description: 'Tanggal Updated' })
  updated_date: string;
}