import { Module } from '@nestjs/common';
import { ProdukService } from './produk.service';
import { ProdukResolver } from './produk.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Produk } from './entities/produk.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Produk])],
  providers: [ProdukResolver, ProdukService],
})
export class ProdukModule {}