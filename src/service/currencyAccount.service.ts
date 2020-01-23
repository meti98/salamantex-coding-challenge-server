import { Context } from "../utils";
import { NexusGenInputs } from "../generated/nexus";
import * as yup from 'yup';


export async function addCurrenyAccount(ctx: Context, data: NexusGenInputs["CurrencyAccountInput"]) {
    const currency = await ctx.photon.currencies.findOne({ where: { name: data.currencyName } });
    if (!currency) {
        throw new Error('Currency not available');
    }
    const currencyAccounts = (await ctx.photon.currencyAccounts.findMany({
        where: {
            AND: [
                {
                    user: {
                        id: ctx.userId
                    },
                },
                {
                    currency: {
                        name: currency.name
                    }
                }
            ]
        }
    }));
    if (currencyAccounts.length > 0) {
        throw new Error("You already have this account");
    }

    let schema = yup.object().shape({
        walletId: yup.string().matches(new RegExp(currency.addressRegExp)),
    });

    await ctx.photon.currencyAccounts.create({
        data: {
            walletId: data.walletId,
            balance: data.balance,
            user: {
                connect: {
                    id: ctx.userId
                }
            },
            currency: {
                connect: {
                    id: currency.id
                }
            }
        }
    });
    const user = await ctx.photon.users.findOne({ where: { id: ctx.userId } });
    if (!user) {
        throw new Error('unexpected error');
    }
    return user;
}

export async function deleteCurrencyAccount(ctx: Context, currencyName: string) {

    const currencyAcount = await ctx.photon.currencyAccounts.deleteMany({where: {
        user: {
            id: ctx.userId
        },
        currency: {
            name: currencyName
        }
    }})

    if(currencyAcount.count == 0)
        throw new Error('Currency account does not exist');

    const user = await ctx.photon.users.findOne({ where: { id: ctx.userId }});

    if(!user) {
        throw new Error('Unexpected error')
    }

    return user;
}