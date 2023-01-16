import { ObjectType, Field } from "type-graphql/dist/decorators";

@ObjectType()
export class userModule {
    @Field()
    name: string

    @Field({ nullable: true })
    phone?: number

    @Field({ nullable: true })
    createdAt?: string

}

@ObjectType()
export class CustomUserModule {
    @Field()
    address: string

}