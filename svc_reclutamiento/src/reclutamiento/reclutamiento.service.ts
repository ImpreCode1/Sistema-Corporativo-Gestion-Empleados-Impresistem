/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/require-await */
import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateReclutamientoDto } from './dto/createReclutamiento.dto';

@Injectable()
export class ReclutamientoService {
  constructor(private prisma: PrismaService) {}

  async create(data: CreateReclutamientoDto) {
    return this.prisma.reclutamiento.create({
      data,
    });
  }

  async findAll() {
    return this.prisma.reclutamiento.findMany();
  }

  async findOne(id: number) {
    return this.prisma.reclutamiento.findUnique({
      where: { id },
    });
  }

  async update(id: number, data: Partial<CreateReclutamientoDto>) {
    return this.prisma.reclutamiento.update({
      where: { id },
      data,
    });
  }

  async remove(id: number) {
    return this.prisma.reclutamiento.delete({
      where: { id },
    });
  }
}
