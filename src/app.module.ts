import { Module } from '@nestjs/common';

import { DatabaseModule } from './api/database/src/lib/database.module';
import { CategoriesModule } from './api/categories/src';
import { CategoryItemsModule } from './api/category-items/src';
import { IntegrationsModule } from './api/integrations/src';
import { VersionsModule } from './api/versions/src';

@Module({
  imports: [
    DatabaseModule,
    IntegrationsModule,
    CategoriesModule,
    CategoryItemsModule,
    VersionsModule,
  ],
})
export class AppModule {}
