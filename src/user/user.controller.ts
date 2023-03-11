import { Controller, Get } from "@nestjs/common";
import { UserService } from "./user.service";
import { User } from "./decorators/user.decorator";
import { Auth } from "../auth/decorators/auth.decorator";

@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}



  @Get('profile')
  @Auth()
  async getProfile(@User('_id') _id: string) {
    return this.userService.byId(_id)
  }



}
