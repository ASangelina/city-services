import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { InfrastructureModule } from './infrastructure/infrastructure.module';
import { DomainModule } from './domain/domain.module';
import { ApplicationModule } from './application/application.module';
import { ConfigModule } from '@nestjs/config';
import { Contact } from './domain/entities/contact.entity';
import { Professional } from './domain/entities/professional.entity';
import { Service } from './domain/entities/service.entity';
import { Location } from './domain/entities/location.entity';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    TypeOrmModule.forRoot({
      type: 'postgres',
      url: process.env.DATABASE_URL,
      entities: [Contact, Professional, Service, Location],
      synchronize: true,
    }),
    InfrastructureModule,
    DomainModule,
    ApplicationModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
