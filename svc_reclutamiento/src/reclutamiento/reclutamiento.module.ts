import { Module } from '@nestjs/common';
import { ReclutamientoService } from './reclutamiento.service';
import { ReclutamientoController } from './reclutamiento.controller';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  imports: [PrismaModule],
  providers: [ReclutamientoService],
  controllers: [ReclutamientoController],
})
export class ReclutamientoModule {}
