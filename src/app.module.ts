import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigsModule } from './config/config.module';
import { CoffeesModule } from './coffees/coffees.module';
import { DatabaseModule } from './db/database.module';

@Module({
  imports: [ConfigsModule, DatabaseModule, CoffeesModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
