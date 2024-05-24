import { Controller, Param, Post } from '@nestjs/common';
import { VersionsService } from '../services/versions.service';
import { AbstractController } from './../../../../core/src/lib/abstract-controller';
import { VersionEntity } from '../entities/version.entity';

@Controller('versions')
export class VersionsController extends AbstractController<VersionEntity> {
  constructor(protected override service: VersionsService) {
    super(service);
  }

  @Post(':id/duplicate')
  duplicate(@Param('id') id: string) {
    return this.service.duplicate(id);
  }
}
