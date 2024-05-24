import { Injectable } from '@nestjs/common';
import { IntegrationEntity } from '../entities/integration.entity';
import { AbstractService } from './../../../../core/src/lib/abstract-service';
import { CreateIntegrationDto } from '../dto/create-integration.dto';
import { UpdateIntegrationDto } from '../dto/update-integration.dto';
import { DatabaseService } from './../../../../database/src/lib/database.service';

@Injectable()
export class IntegrationsService extends AbstractService<
  IntegrationEntity,
  CreateIntegrationDto,
  UpdateIntegrationDto
> {
  constructor(protected db: DatabaseService) {
    super(db);
    this.entityName = 'integration';
  }

  findFull(id: number) {
    console.log(id);
    return this.db.integration.findFirst({
      where: {
        id,
      },
      include: {
        categories: true,
        versions: {
          include: {
            categoryItems: true,
          },
        },
      },
    });
  }
}
