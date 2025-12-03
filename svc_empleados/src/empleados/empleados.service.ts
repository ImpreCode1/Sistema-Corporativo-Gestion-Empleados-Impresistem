/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/require-await */
import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateEmpleadoDto } from './dto/createEmpleado.dto';

@Injectable()
export class EmpleadosService {
  constructor(private prisma: PrismaService) {}

  async create(data: CreateEmpleadoDto) {
    return this.prisma.empleado.create({
      data,
    });
  }

  async findAll() {
    return this.prisma.empleado.findMany({
      include: {
        contrato: true,
        vicepresidencia: true,
        historial: true,
      },
    });
  }

  async findOne(id: number) {
    return this.prisma.empleado.findUnique({
      where: { id },
      include: {
        contrato: true,
        vicepresidencia: true,
        historial: true,
      },
    });
  }

  async update(id: number, data: Partial<CreateEmpleadoDto>) {
    return this.prisma.empleado.update({
      where: { id },
      data,
    });
  }

  async remove(id: number) {
    return this.prisma.empleado.delete({
      where: { id },
    });
  }
}
