import gql from 'graphql-tag';
import { getSdk } from './sdk';
import { GraphQLClient } from 'graphql-request';
import { getGqlSDK } from './utils';

let token = '';

let gqlSdk = getGqlSDK();

describe("User api", () => {

    let user = {
        email: "hans@test.at",
        password: "test",
        name: "Hans Peter Haselsteiner",
        description: "Seas, i bins da Hans",
        maxAmountPerTransactionDollar: 125
    }

    beforeAll(async () => {

        gql` mutation dropAndSeedDB {
            dropAndSeedDB
        }
        `

        await gqlSdk.dropAndSeedDB();
    })

    it("register a new user", async () => {

        gql` mutation register($user: RegisterInput!) {
            register(data: $user) {
                token,
                user {
                    id,
                    email,
                    name,
                    description,
                    maxAmountPerTransactionDollar
                }
            }
        }`

        let fetchedUser = (await gqlSdk.register({ user })).register;
        token = fetchedUser.token;

        delete user.password;
        expect(fetchedUser.user).toMatchObject(user);
        expect(fetchedUser.user.id).toBeTruthy();
        expect(fetchedUser.token).toBeTruthy();
    })

    it("cannot register with incorrect email", async () => {

        let userWithIncorretEmail = { ...user };
        userWithIncorretEmail.email = "test@tes"
        userWithIncorretEmail.password = "test";

        await expect(gqlSdk.register({ user: userWithIncorretEmail })).rejects.toThrow();
    })

    it("is not authorized", async () => {

        gql` query me {
            me {
                id,
                email,
                name,
                description,
                maxAmountPerTransactionDollar
            }
        }`

        gqlSdk.me({ user }).then(() => {
            throw new Error("no authoriaztion error returnen")  
        })
        .catch(() => {});
    });

    it("gets me", async () => {

       gqlSdk = getGqlSDK(token);
        

        let fetchedUser = (await gqlSdk.me()).me;
        expect(fetchedUser).toMatchObject(user);
        expect(fetchedUser.id).toBeTruthy();
    });

    it("logs in", async () => {

        gql` mutation login($email: String!, $password: String!) {
            login(email: $email, password: $password) {
                token,
                user {
                    id,
                    email,
                    name,
                    description,
                    maxAmountPerTransactionDollar
                }
            }
        }`

        let fetchedUser = (await gqlSdk.login({
            email: 'hans@test.at',
            password: 'test'
        })).login

        expect(fetchedUser.user).toMatchObject(user);
        expect(fetchedUser.user.id).toBeTruthy();
        expect(fetchedUser.token).toBeTruthy();
    })

    it("cannot log in in with wrong password and email", async () => {

        await expect(gqlSdk.login({
                email: 'test123@test.at',
                password: 'test'
            })).rejects.toThrow();
            
        await expect(gqlSdk.login({
            email: 'test@test.at',
            password: 'test12'
        })).rejects.toThrow();
    })

})

