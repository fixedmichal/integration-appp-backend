import { Controller } from '@nestjs/common';
import { CategoryEntity } from '../entities/category.entity';
import { CategoriesService } from '../services/categories.service';
import { AbstractController } from './../../../../core/src/lib/abstract-controller';

@Controller('categories')
export class CategoriesController extends AbstractController<CategoryEntity> {
  constructor(protected service: CategoriesService) {
    super(service);
  }
}
