import { Injectable } from "@nestjs/common";
import { CreateUserDto } from "./dto/create-user.dto";
import { UpdateUserDto } from "./dto/update-user.dto";
import { InjectRepository } from "@nestjs/typeorm";
import { User } from "./entities/user.entity";
import { Repository } from "typeorm";
import { v4 as uuid } from "uuid";

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User) private usersRepository: Repository<User>,
  ) {}

  create(createUserDto: CreateUserDto) {
    const newUser = this.usersRepository.create(createUserDto);
    return this.usersRepository.save({
      ...newUser,
      id: uuid(),
    });
  }

  findAll() {
    const users = this.usersRepository.find() ?? [];
    return users;
  }

  async findOne(id: string): Promise<User | null> {
    const result = await this.usersRepository.query(
      `SELECT * FROM "public"."user" WHERE "id"::text = $1`,
      [id],
    );
    return result.length > 0 ? result[0] : null;
  }

  async update(id: number, updateUserDto: UpdateUserDto) {
    return this.usersRepository.update(id, updateUserDto);
  }

  async remove(id: string) {
    const user = await this.usersRepository.findOneBy({ id });
    return this.usersRepository.remove(user);
  }
}
