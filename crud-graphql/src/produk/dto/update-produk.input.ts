import { CreateProdukInput } from './create-produk.input';
import { InputType, Field, PartialType, Int } from '@nestjs/graphql';

@InputType()
export class UpdateProdukInput extends PartialType(CreateProdukInput) {
  @Field(() => Int)
  id: number;
}