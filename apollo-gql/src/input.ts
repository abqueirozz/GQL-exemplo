import { InputType, Field } from "type-graphql/dist/decorators";

@InputType()
export class userInput {
    @Field()
    name: string

    @Field()
    email: string

    @Field({ nullable: true })
    phone: number
}
