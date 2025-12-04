/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import {
  Injectable,
  NotFoundException,
  BadRequestException,
} from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateReclutamientoDto } from './dto/createReclutamiento.dto';
import { UpdateReclutamientoDto } from './dto/updateReclutamiento.dto';
import { UpdateEstadoDto } from './dto/updateEstado.dto';
import { ALLOWED_TRANSITIONS } from './workflow.transitions';

@Injectable()
export class ReclutamientoService {
  constructor(private prisma: PrismaService) {}

  // Crear requisición
  async create(data: CreateReclutamientoDto) {
    try {
      return await this.prisma.reclutamiento.create({
        data: {
          ...data,
          fechaSolicitud: new Date(data.fechaSolicitud),
        },
      });
    } catch (error) {
      throw new BadRequestException('Error al crear la requisición', {
        cause: error,
      });
    }
  }

  // Listar todas
  async findAll() {
    return this.prisma.reclutamiento.findMany({
      orderBy: { id: 'desc' },
    });
  }

  // Buscar una por ID
  async findOne(id: number) {
    const req = await this.prisma.reclutamiento.findUnique({
      where: { id },
    });

    if (!req) {
      throw new NotFoundException(`Requisición con ID ${id} no encontrada`);
    }

    return req;
  }

  // Actualizar requisición
  async update(id: number, data: UpdateReclutamientoDto) {
    await this.findOne(id); // valida existencia

    try {
      return await this.prisma.reclutamiento.update({
        where: { id },
        data: {
          ...data,
          fechaSolicitud: data.fechaSolicitud
            ? new Date(data.fechaSolicitud)
            : undefined,
        },
      });
    } catch (error) {
      throw new BadRequestException('Error al actualizar la requisición', {
        cause: error,
      });
    }
  }

  // Cambiar estado del workflow
  async updateEstado(id: number, dto: UpdateEstadoDto) {
    const req = await this.findOne(id);

    const estadoActual = req.estado;
    const estadoNuevo = dto.estado;

    // Validar transición permitida
    const permitidos = ALLOWED_TRANSITIONS[estadoActual];

    if (!permitidos.includes(estadoNuevo)) {
      throw new BadRequestException(
        `No se puede cambiar de estado "${estadoActual}" a "${estadoNuevo}". Permitidos: ${permitidos.join(', ')}`,
      );
    }

    // Actualizar estado principal
    const updated = await this.prisma.reclutamiento.update({
      where: { id },
      data: { estado: estadoNuevo },
    });

    // Registrar historial
    await this.prisma.reclutamientoEstadoHistorial.create({
      data: {
        reclutamientoId: id,
        estadoAnterior: estadoActual,
        estadoNuevo: estadoNuevo,
        comentario: dto.comentario ?? null,
        usuario: dto.usuario ?? 'Sistema', // o tomado del token
      },
    });

    return updated;
  }

  // Eliminar requisición
  async remove(id: number) {
    await this.findOne(id);

    return this.prisma.reclutamiento.delete({
      where: { id },
    });
  }

  async getHistorial(id: number) {
    await this.findOne(id);

    return this.prisma.reclutamientoEstadoHistorial.findMany({
      where: { reclutamientoId: id },
      orderBy: { fecha: 'desc' },
    });
  }
}
