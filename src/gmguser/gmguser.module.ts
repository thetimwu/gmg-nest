import { Module } from '@nestjs/common';
import { GmguserService } from './gmguser.service';
import { GmguserResolver } from './gmguser.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Gmguser } from './entities/gmguser.entity';

@Module({
  providers: [GmguserResolver, GmguserService],
  imports: [TypeOrmModule.forFeature([Gmguser], 'gmgAppDb')],
})
export class GmguserModule {}
