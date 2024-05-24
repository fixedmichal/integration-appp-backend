import { Module } from '@nestjs/common';
import { CategoryItemsController } from './controllers/category-items.controller';
import { CategoryItemsService } from './services/category-items.service';
import { DatabaseModule } from './../../../database/src/lib/database.module';

@Module({
  imports: [DatabaseModule],
  controllers: [CategoryItemsController],
  providers: [CategoryItemsService],
  exports: [CategoryItemsService],
})
export class CategoryItemsModule {}
