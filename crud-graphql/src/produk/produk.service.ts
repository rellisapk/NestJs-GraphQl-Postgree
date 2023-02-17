import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateProdukInput } from './dto/create-produk.input';
import { UpdateProdukInput } from './dto/update-produk.input';
import { Produk } from './entities/produk.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class ProdukService {
  constructor(
    @InjectRepository(Produk)
    private readonly produkRepository: Repository<Produk>,
  ) {}

  async create(createProdukInput: CreateProdukInput): Promise<Produk> {
    const produk = this.produkRepository.create(createProdukInput);
    return await this.produkRepository.save(produk);
  }

  async findAll(): Promise<Array<Produk>> {
    return await this.produkRepository.find();
  }

  async findOne(id: number): Promise<Produk> {
    const produk = await this.findOne(id);
    if (!produk) {
      throw new NotFoundException(`produk #${id} not found`);
    }
    return produk;
  }

  async update(
    id: number,
    updateProdukInput: UpdateProdukInput,
  ): Promise<Produk> {
    const produk = await this.produkRepository.preload({
      id: id,
      ...updateProdukInput,
    });
    if (!produk) {
      throw new NotFoundException(`produk #${id} not found`);
    }
    return this.produkRepository.save(produk);
  }

  async remove(id: number): Promise<Produk> {
    const produk = await this.findOne(id);
    await this.produkRepository.remove(produk);
    return {
      id: id,
      nama_barang: '',
      kode_barang: '',
      jumlah_barang: 0,
      created_date: '',
      updated_date: '',
    };
  }
}