import { Injectable } from '@nestjs/common';
import { DatabaseService } from './../../../../database/src/lib/database.service';
import { AbstractService } from './../../../../core/src/lib/abstract-service';

import { CategoryItemEntity } from '../entities/category-item.entity';
import { CreateCategoryItemDto } from '../dto/create-category-item.dto';
import { UpdateCategoryItemDto } from '../dto/update-category-item.dto';

@Injectable()
export class CategoryItemsService extends AbstractService<
  CategoryItemEntity,
  CreateCategoryItemDto,
  UpdateCategoryItemDto
> {
  constructor(protected override db: DatabaseService) {
    super(db);
    this.entityName = 'categoryItem';
  }
}
