import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { HighlightsModule } from './highlights/highlights.module';
import { UsersService } from './users/users.service';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';
import { SettingsController } from './settings/settings.controller';
import { SettingsService } from './settings/settings.service';
import { OpenaiController } from './openai/openai.controller';
import { OpenaiService } from './openai/openai.service';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    MongooseModule.forRoot(process.env.MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }),
    HighlightsModule,
    UsersModule,
    AuthModule,
  ],
  controllers: [AppController, SettingsController, OpenaiController],
  providers: [AppService, UsersService, SettingsService, OpenaiService],
})
export class AppModule {}
