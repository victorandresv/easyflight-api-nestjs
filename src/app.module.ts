import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CityAndAirportSearchModule } from './city-and-airport-search/city-and-airport-search.module';

@Module({
  imports: [CityAndAirportSearchModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
