import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DatabaseModule } from './database/database.module';
import { ProductModule } from './product/product.module';
import { OrderModule } from './order/order.module';
import { PaymentModule } from './payment/payment.module';
import { CartModule } from './cart/cart.module';
import { AuthorizationModule } from '@choi-seunghwan/authorization';
import { ConfigModule } from '@nestjs/config';
import { PrismaService } from './database/prisma.service';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: '.env',
    }),
    DatabaseModule,
    AuthorizationModule.forRoot({ jwtSecret: process.env.JWT_SECRET }),
    ProductModule,
    OrderModule,
    PaymentModule,
    CartModule,
  ],
  controllers: [AppController],
  providers: [AppService, PrismaService],
})
export class AppModule {}
