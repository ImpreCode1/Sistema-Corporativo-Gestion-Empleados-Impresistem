import { Test, TestingModule } from '@nestjs/testing';
import { ReclutamientoController } from './reclutamiento.controller';

describe('ReclutamientoController', () => {
  let controller: ReclutamientoController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ReclutamientoController],
    }).compile();

    controller = module.get<ReclutamientoController>(ReclutamientoController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
