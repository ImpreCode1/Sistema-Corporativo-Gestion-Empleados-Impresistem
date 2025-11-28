/* eslint-disable @typescript-eslint/no-unsafe-call */

import {
  IsString,
  IsDateString,
  IsInt,
  IsEmail,
  IsNotEmpty,
} from 'class-validator';

export class CreateEmpleadoDto {
  @IsString()
  @IsNotEmpty()
  nombres: string;

  @IsString()
  @IsNotEmpty()
  apellidos: string;

  @IsString()
  @IsNotEmpty()
  documento: string;

  @IsEmail()
  @IsNotEmpty()
  correo: string;

  @IsDateString()
  @IsNotEmpty()
  fechaingreso: string;

  @IsString()
  @IsNotEmpty()
  estado: string;

  @IsString()
  @IsNotEmpty()
  cargo: string;

  @IsInt()
  @IsNotEmpty()
  vicepresidenciaId: number;

  @IsInt()
  @IsNotEmpty()
  contratoId: number;
}
