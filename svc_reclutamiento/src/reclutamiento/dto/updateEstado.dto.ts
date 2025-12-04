import { IsEnum, IsOptional, IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

import { EstadoRequisicion } from '@prisma/client';

export class UpdateEstadoDto {
  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
  @ApiProperty({ enum: EstadoRequisicion })
  // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
  @IsEnum(EstadoRequisicion)
  estado: EstadoRequisicion;

  @ApiProperty({
    example: 'Revisión realizada, listo para aprobación.',
    required: false,
  })
  @IsOptional()
  @IsString()
  comentario?: string;

  @ApiProperty({
    example: 'juan.perez@empresa.com',
    required: false,
  })
  @IsOptional()
  @IsString()
  usuario?: string; // OVERRIDE: también puede llegar desde el token
}
