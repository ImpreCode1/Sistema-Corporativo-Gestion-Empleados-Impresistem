import { IsEnum } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

import { EstadoRequisicion } from '@prisma/client';

export class UpdateEstadoDto {
  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
  @ApiProperty({ enum: EstadoRequisicion })
  // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
  @IsEnum(EstadoRequisicion)
  estado: EstadoRequisicion;
}
