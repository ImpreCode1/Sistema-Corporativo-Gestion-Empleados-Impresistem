/* eslint-disable @typescript-eslint/no-unsafe-call */

import { EstadoPerfilCargo } from '@prisma/client';
import {
  IsString,
  IsDateString,
  IsInt,
  IsNotEmpty,
  IsBoolean,
  IsOptional,
  IsEnum,
} from 'class-validator';

export class CreateReclutamientoDto {
  @IsDateString()
  @IsNotEmpty()
  fechaSolicitud: string;

  @IsEnum(EstadoPerfilCargo)
  estadoPerfilCargo: EstadoPerfilCargo;

  @IsString()
  @IsNotEmpty()
  cargoRequerido: string;

  @IsString()
  @IsNotEmpty()
  division: string;

  @IsString()
  @IsNotEmpty()
  area: string;

  @IsInt()
  numeroVacantes: number;

  @IsBoolean()
  convocatoriaInterna: boolean;

  @IsString()
  @IsNotEmpty()
  plataformas: string;

  @IsBoolean()
  solicitaLineaCelular: boolean;

  @IsString()
  @IsNotEmpty()
  motivoVacante: string;

  @IsString()
  @IsNotEmpty()
  reemplazaA: string;

  @IsString()
  @IsNotEmpty()
  funciones: string;

  @IsString()
  @IsNotEmpty()
  objetivoCargo: string;

  @IsBoolean()
  esComercial: boolean;

  @IsString()
  @IsOptional()
  infoAdicional?: string;

  @IsString()
  @IsNotEmpty()
  kpi: string;

  @IsBoolean()
  financieraVoBo: boolean;

  @IsBoolean()
  ceoVoBo: boolean;

  @IsString()
  @IsNotEmpty()
  conocimientosTecnicos: string;

  @IsString()
  @IsNotEmpty()
  certificaciones: string;

  @IsString()
  @IsNotEmpty()
  sede: string;

  @IsString()
  @IsNotEmpty()
  horario: string;

  @IsString()
  @IsOptional()
  observaciones?: string;

  @IsString()
  @IsNotEmpty()
  solicitanteNombre: string;

  @IsString()
  @IsNotEmpty()
  solicitanteCargo: string;

  @IsString()
  @IsNotEmpty()
  solicitanteArea: string;
}
