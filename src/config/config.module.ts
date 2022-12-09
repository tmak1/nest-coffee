import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';

interface ConfigInterface {
  PORT: number;
  HOST: string;
}

const config = (): ConfigInterface => ({
  PORT: +process.env.PORT,
  HOST: process.env.HOST,
});

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      load: [config],
      expandVariables: true,
    }),
  ],
})
export class ConfigsModule {}
