import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Put,
  Delete,
} from '@nestjs/common';
import { ReclutamientoService } from './reclutamiento.service';
import { CreateReclutamientoDto } from './dto/createReclutamiento.dto';

@Controller('reclutamiento')
export class ReclutamientoController {
  constructor(private readonly reclutamientoService: ReclutamientoService) {}

  @Post()
  create(@Body() createReclutamientoDto: CreateReclutamientoDto) {
    return this.reclutamientoService.create(createReclutamientoDto);
  }

  @Get()
  findAll() {
    return this.reclutamientoService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.reclutamientoService.findOne(Number(id));
  }

  @Put(':id')
  update(
    @Param('id') id: string,
    @Body() updateEmpleadoDto: Partial<CreateReclutamientoDto>,
  ) {
    return this.reclutamientoService.update(Number(id), updateEmpleadoDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.reclutamientoService.remove(Number(id));
  }
}
