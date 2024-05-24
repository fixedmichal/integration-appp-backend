import { Injectable } from '@nestjs/common';
import { AbstractService } from './../../../../core/src/lib/abstract-service';
import { DatabaseService } from './../../../../database/src/lib/database.service';

import { CategoryEntity } from '../entities/category.entity';
import { CreateCategoryDto } from '../dto/create-category.dto';
import { UpdateCategoryDto } from '../dto/update-category.dto';

@Injectable()
export class CategoriesService extends AbstractService<
  CategoryEntity,
  CreateCategoryDto,
  UpdateCategoryDto
> {
  constructor(protected override db: DatabaseService) {
    super(db);
    this.entityName = 'category';
  }
}
