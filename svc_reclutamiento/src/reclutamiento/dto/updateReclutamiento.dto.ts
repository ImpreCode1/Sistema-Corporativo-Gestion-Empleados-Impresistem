import { PartialType } from '@nestjs/swagger';
import { CreateReclutamientoDto } from './createReclutamiento.dto';

export class UpdateReclutamientoDto extends PartialType(
  CreateReclutamientoDto,
) {}
