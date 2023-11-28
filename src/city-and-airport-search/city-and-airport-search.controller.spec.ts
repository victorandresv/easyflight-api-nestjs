import { Test, TestingModule } from '@nestjs/testing';
import { CityAndAirportSearchController } from './city-and-airport-search.controller';

describe('CityAndAirportSearchController', () => {
  let controller: CityAndAirportSearchController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CityAndAirportSearchController],
    }).compile();

    controller = module.get<CityAndAirportSearchController>(CityAndAirportSearchController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
