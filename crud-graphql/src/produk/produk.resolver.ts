import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { ProdukService } from './produk.service';
import { Produk } from './entities/produk.entity';
import { CreateProdukInput } from './dto/create-produk.input';
import { UpdateProdukInput } from './dto/update-produk.input';

@Resolver(() => Produk)
export class ProdukResolver {
  constructor(private readonly ProdukService: ProdukService) {}

  @Mutation(() => Produk)
  createproduk(@Args('createProdukInput') createProdukInput: CreateProdukInput) {
    return this.ProdukService.create(createProdukInput);
  }

  @Query(() => [Produk], { name: 'produk' })
  findAll() {
    return this.ProdukService.findAll();
  }

  @Query(() => Produk, { name: 'Produk' })
  findOne(@Args('id', { type: () => Int }) id:  number) {
    return this.ProdukService.findOne(id);
  }

  @Mutation(() => Produk)
  updateProduk(@Args('updateProdukInput') updateProdukInput: UpdateProdukInput) {
    return this.ProdukService.update(updateProdukInput.id, updateProdukInput);
  }

  @Mutation(() => Produk)
  removeProduk(@Args('id', { type: () => Int }) id:  number) {
    return this.ProdukService.remove(id);
  }
}