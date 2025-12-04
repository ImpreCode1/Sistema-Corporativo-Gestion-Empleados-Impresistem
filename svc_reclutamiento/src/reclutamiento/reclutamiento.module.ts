import { Module } from '@nestjs/common';
import { ReclutamientoService } from './reclutamiento.service';
import { ReclutamientoController } from './reclutamiento.controller';

@Module({
  providers: [ReclutamientoService],
  controllers: [ReclutamientoController],
})
export class ReclutamientoModule {}
