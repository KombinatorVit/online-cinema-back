import { ConfigService } from "@nestjs/config";
import { TypegooseModuleOptions } from "nestjs-typegoose";
import { JwtModuleOptions } from "@nestjs/jwt";

export const getJWTDbConfig = async (configService: ConfigService): Promise<JwtModuleOptions> => ({
  secret: configService.get("JWT_SECRET")
});