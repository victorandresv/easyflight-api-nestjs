import { Module } from '@nestjs/common';
import { CityAndAirportSearchController } from './city-and-airport-search.controller';
import { CityAndAirportSearchService } from './city-and-airport-search.service';

@Module({
  controllers: [CityAndAirportSearchController],
  providers: [CityAndAirportSearchService]
})
export class CityAndAirportSearchModule {}
