import { Module } from '@nestjs/common';
import { IntegrationsController } from './controllers/integrations.controller';
import { IntegrationsService } from './services/integrations.service';
import { DatabaseModule } from './../../../database/src/lib/database.module';

@Module({
  imports: [DatabaseModule],
  controllers: [IntegrationsController],
  providers: [IntegrationsService],
  exports: [IntegrationsService],
})
export class IntegrationsModule {}
