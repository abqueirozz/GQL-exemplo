import {
  Query,
  Resolver,
  Arg,
  Mutation,
  FieldResolver,
  Root,
} from "type-graphql/dist/decorators";
import { userInput } from "./input";
import { userModule, CustomUserModule } from "./module";
import { data } from "./data";

@Resolver(() => userModule)
export class UserResolver {
  @Query(() => String)
  async hello(@Arg("greeting") greeting: String) {
    return `Hello ${greeting}`;
  }
  

  @Query(() => [userModule])
  async getUsers() {
    return data;
  }

  @Query(() => userModule)
  async getUsersByEmail(@Arg("email") email: String) {
    const user = data.find((element) => element.email === email);

    return user;
  }

  @Mutation(() => [userModule])
  async deleteUserByEmail(@Arg("email") email: String) {
    const user = data.filter((element) => element.email !== email);

    return user;
  }

  @Mutation(() => userModule)
  async createUser(@Arg("user") user: userInput) {
    const newUser = {
      name: user.name,
      email: user.email,
      phone: user.phone,
      createdAt: new Date().toString(),
    };

    data.push(newUser);

    return newUser;
  }

  @FieldResolver(() => CustomUserModule)
  async customUser(@Root() user: userModule) {
    return {
      address: `${user.name} address`,
    };
  }
}
