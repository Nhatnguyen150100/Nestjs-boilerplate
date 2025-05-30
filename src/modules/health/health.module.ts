import { Module } from '@nestjs/common';
import { HealthController } from './health.controller';
import { TerminusModule } from '@nestjs/terminus';
import { DbHealthService } from './services/db-health.service';
import { MemoryHealthService } from './services/memory-health.service';
import { HttpModule } from '@nestjs/axios';

@Module({
  imports: [TerminusModule, HttpModule],
  controllers: [HealthController],
  providers: [DbHealthService, MemoryHealthService],
})
export class HealthModule {}
