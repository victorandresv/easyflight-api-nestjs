import { Test, TestingModule } from '@nestjs/testing';
import { CityAndAirportSearchService } from './city-and-airport-search.service';

describe('CityAndAirportSearchService', () => {
  let service: CityAndAirportSearchService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CityAndAirportSearchService],
    }).compile();

    service = module.get<CityAndAirportSearchService>(CityAndAirportSearchService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
