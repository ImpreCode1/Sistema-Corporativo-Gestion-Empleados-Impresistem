import {
  IsString,
  IsInt,
  IsBoolean,
  IsOptional,
  IsEnum,
  IsDateString,
  Min,
  IsArray,
} from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
import { EstadoPerfilCargo } from '@prisma/client';

export class CreateReclutamientoDto {
  @ApiProperty({ example: '2025-11-14' })
  @IsDateString()
  fechaSolicitud: string;

  @ApiProperty({ enum: EstadoPerfilCargo })
  @IsEnum(EstadoPerfilCargo)
  estadoPerfilCargo: EstadoPerfilCargo;

  @ApiProperty()
  @IsString()
  cargoRequerido: string;

  @ApiProperty()
  @IsString()
  division: string;

  @ApiProperty()
  @IsString()
  area: string;

  @ApiProperty()
  @IsInt()
  @Min(1)
  numeroVacantes: number;

  @ApiProperty()
  @IsBoolean()
  convocatoriaInterna: boolean;

  @ApiProperty({
    type: [String],
    example: ['Correo Corporativo', 'Teams'],
  })
  @IsArray()
  @IsString({ each: true })
  plataformas: string[];

  @ApiProperty()
  @IsBoolean()
  solicitaLineaCelular: boolean;

  // Motivo
  @ApiProperty()
  @IsString()
  motivoVacante: string;

  @ApiProperty({ required: false })
  @IsOptional()
  @IsString()
  reemplazaA?: string;

  @ApiProperty()
  @IsString()
  funciones: string; // OBLIGATORIO

  @ApiProperty()
  @IsString()
  objetivoCargo: string; // OBLIGATORIO

  @ApiProperty()
  @IsBoolean()
  esComercial: boolean;

  @ApiProperty({ required: false })
  @IsOptional()
  @IsString()
  infoAdicional?: string;

  @ApiProperty()
  @IsString()
  kpi: string; // OBLIGATORIO

  @ApiProperty()
  @IsBoolean()
  financieraVoBo: boolean;

  @ApiProperty()
  @IsBoolean()
  ceoVoBo: boolean;

  @ApiProperty()
  @IsString()
  conocimientosTecnicos: string;

  @ApiProperty()
  @IsString()
  certificaciones: string;

  @ApiProperty()
  @IsString()
  sede: string;

  @ApiProperty()
  @IsString()
  horario: string;

  @ApiProperty({ required: false })
  @IsOptional()
  @IsString()
  observaciones?: string;

  // Solicitante
  @ApiProperty()
  @IsString()
  solicitanteNombre: string;

  @ApiProperty()
  @IsString()
  solicitanteCargo: string;

  @ApiProperty()
  @IsString()
  solicitanteArea: string;
}
