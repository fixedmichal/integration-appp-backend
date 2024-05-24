import { Module } from '@nestjs/common';
import { VersionsController } from './controllers/versions.controller';
import { VersionsService } from './services/versions.service';
import { DatabaseModule } from './../../../database/src/lib/database.module';

@Module({
  imports: [DatabaseModule],
  controllers: [VersionsController],
  providers: [VersionsService],
  exports: [VersionsService],
})
export class VersionsModule {}
