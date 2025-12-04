import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Put,
  Delete,
  Patch,
  ParseIntPipe,
} from '@nestjs/common';
import { ReclutamientoService } from './reclutamiento.service';
import { CreateReclutamientoDto } from './dto/createReclutamiento.dto';
import { UpdateReclutamientoDto } from './dto/updateReclutamiento.dto';
import { UpdateEstadoDto } from './dto/updateEstado.dto';
import { ApiTags, ApiBody, ApiOperation } from '@nestjs/swagger';

@ApiTags('Reclutamiento')
@Controller('reclutamiento')
export class ReclutamientoController {
  constructor(private readonly reclutamientoService: ReclutamientoService) {}

  @Post()
  @ApiOperation({ summary: 'Crear una nueva solicitud de reclutamiento' })
  @ApiBody({ type: CreateReclutamientoDto })
  create(@Body() createReclutamientoDto: CreateReclutamientoDto) {
    return this.reclutamientoService.create(createReclutamientoDto);
  }

  @Get()
  @ApiOperation({ summary: 'Listar todas las solicitudes' })
  findAll() {
    return this.reclutamientoService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Obtener una solicitud por ID' })
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.reclutamientoService.findOne(id);
  }

  @Put(':id')
  @ApiOperation({ summary: 'Actualizar una solicitud' })
  update(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateDto: UpdateReclutamientoDto,
  ) {
    return this.reclutamientoService.update(id, updateDto);
  }

  @Patch(':id/estado')
  @ApiOperation({ summary: 'Cambiar el estado de la solicitud' })
  updateEstado(
    @Param('id', ParseIntPipe) id: number,
    @Body() dto: UpdateEstadoDto,
  ) {
    return this.reclutamientoService.updateEstado(id, dto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Eliminar una solicitud' })
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.reclutamientoService.remove(id);
  }
}
