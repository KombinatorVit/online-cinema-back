import { Injectable, NotFoundException } from "@nestjs/common";
import { ModelType, DocumentType } from "@typegoose/typegoose/lib/types";
import { genSalt, hash } from "bcryptjs";
import { Types } from "mongoose";
import { InjectModel } from "nestjs-typegoose";
import { UpdateDto } from "./dto/update.dto";
import { UserModel } from "./user.model";

@Injectable()
export class UserService {
  constructor(
    @InjectModel(UserModel) private readonly userModel: ModelType<UserModel>
  ) {
  }

  async byId(id: string): Promise<DocumentType<UserModel>> {
    const user = await this.userModel.findById(id).exec();

    if (user) return user;
    throw new NotFoundException("User not found");
  }


}
