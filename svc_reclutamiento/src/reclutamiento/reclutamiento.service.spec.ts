import { Test, TestingModule } from '@nestjs/testing';
import { ReclutamientoService } from './reclutamiento.service';

describe('ReclutamientoService', () => {
  let service: ReclutamientoService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ReclutamientoService],
    }).compile();

    service = module.get<ReclutamientoService>(ReclutamientoService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
