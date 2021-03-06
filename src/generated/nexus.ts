/**
 * This file was automatically generated by GraphQL Nexus
 * Do not make changes to this file directly
 */

import * as Context from "../utils"
import * as photon from "@prisma/photon"
import { core } from "nexus"
declare global {
  interface NexusGenCustomInputMethods<TypeName extends string> {
    monetary<FieldName extends string>(fieldName: FieldName, opts?: core.ScalarInputFieldConfig<core.GetGen3<"inputTypes", TypeName, FieldName>>): void // "Monetary";
  }
}
declare global {
  interface NexusGenCustomOutputMethods<TypeName extends string> {
    monetary<FieldName extends string>(fieldName: FieldName, ...opts: core.ScalarOutSpread<TypeName, FieldName>): void // "Monetary";
  }
}
declare global {
  interface NexusGenCustomOutputProperties<TypeName extends string> {
    crud: NexusPrisma<TypeName, 'crud'>
    model: NexusPrisma<TypeName, 'model'>
  }
}

declare global {
  interface NexusGen extends NexusGenTypes {}
}

export interface NexusGenInputs {
  CurrencyAccountInput: { // input type
    balance: number; // Float!
    currencyName: string; // String!
    walletId: string; // String!
  }
  RegisterInput: { // input type
    description?: string | null; // String
    email: string; // String!
    maxAmountPerTransactionDollar: number; // Float!
    name: string; // String!
    password: string; // String!
  }
  SubmitTransactionInput: { // input type
    amount: number; // Float!
    currencyName: string; // String!
    targetUserId: string; // String!
  }
}

export interface NexusGenEnums {
}

export interface NexusGenRootTypes {
  AuthResponse: { // root type
    token: string; // String!
    user: NexusGenRootTypes['User']; // User!
  }
  Currency: photon.Currency;
  CurrencyAccount: photon.CurrencyAccount;
  Mutation: {};
  Query: {};
  Transaction: photon.Transaction;
  User: photon.User;
  String: string;
  Int: number;
  Float: number;
  Boolean: boolean;
  ID: string;
  Monetary: any;
}

export interface NexusGenAllTypes extends NexusGenRootTypes {
  CurrencyAccountInput: NexusGenInputs['CurrencyAccountInput'];
  RegisterInput: NexusGenInputs['RegisterInput'];
  SubmitTransactionInput: NexusGenInputs['SubmitTransactionInput'];
}

export interface NexusGenFieldTypes {
  AuthResponse: { // field return type
    token: string; // String!
    user: NexusGenRootTypes['User']; // User!
  }
  Currency: { // field return type
    exchangeRateDollar: number; // Float!
    id: string; // ID!
    name: string; // String!
  }
  CurrencyAccount: { // field return type
    balance: number; // Float!
    currency: NexusGenRootTypes['Currency']; // Currency!
    id: string; // ID!
    walletId: string; // String!
  }
  Mutation: { // field return type
    addCurrencyAccount: NexusGenRootTypes['User']; // User!
    deleteCurrencyAccount: NexusGenRootTypes['User']; // User!
    dropAndSeedDB: boolean; // Boolean!
    login: NexusGenRootTypes['AuthResponse']; // AuthResponse!
    register: NexusGenRootTypes['AuthResponse']; // AuthResponse!
    submitTransaction: NexusGenRootTypes['Transaction']; // Transaction!
  }
  Query: { // field return type
    currencies: NexusGenRootTypes['Currency'][]; // [Currency!]!
    me: NexusGenRootTypes['User']; // User!
    otherUsers: NexusGenRootTypes['User'][]; // [User!]!
    transaction: NexusGenRootTypes['Transaction']; // Transaction!
    transactions: NexusGenRootTypes['Transaction'][]; // [Transaction!]!
  }
  Transaction: { // field return type
    amount: number; // Float!
    createdAt: string; // String!
    currency: NexusGenRootTypes['Currency']; // Currency!
    error: string | null; // String
    id: string; // ID!
    processedAt: string | null; // String
    source: NexusGenRootTypes['User']; // User!
    state: string; // String!
    target: NexusGenRootTypes['User']; // User!
  }
  User: { // field return type
    currencyAccounts: NexusGenRootTypes['CurrencyAccount'][]; // [CurrencyAccount!]!
    description: string | null; // String
    email: string; // String!
    id: string; // ID!
    maxAmountPerTransactionDollar: number; // Float!
    name: string; // String!
  }
}

export interface NexusGenArgTypes {
  Mutation: {
    addCurrencyAccount: { // args
      data: NexusGenInputs['CurrencyAccountInput']; // CurrencyAccountInput!
    }
    deleteCurrencyAccount: { // args
      currencyName: string; // String!
    }
    login: { // args
      email: string; // String!
      password: string; // String!
    }
    register: { // args
      data: NexusGenInputs['RegisterInput']; // RegisterInput!
    }
    submitTransaction: { // args
      data: NexusGenInputs['SubmitTransactionInput']; // SubmitTransactionInput!
    }
  }
  Query: {
    transaction: { // args
      transactionId: string; // String!
    }
  }
}

export interface NexusGenAbstractResolveReturnTypes {
}

export interface NexusGenInheritedFields {}

export type NexusGenObjectNames = "AuthResponse" | "Currency" | "CurrencyAccount" | "Mutation" | "Query" | "Transaction" | "User";

export type NexusGenInputNames = "CurrencyAccountInput" | "RegisterInput" | "SubmitTransactionInput";

export type NexusGenEnumNames = never;

export type NexusGenInterfaceNames = never;

export type NexusGenScalarNames = "Boolean" | "Float" | "ID" | "Int" | "Monetary" | "String";

export type NexusGenUnionNames = never;

export interface NexusGenTypes {
  context: Context.Context;
  inputTypes: NexusGenInputs;
  rootTypes: NexusGenRootTypes;
  argTypes: NexusGenArgTypes;
  fieldTypes: NexusGenFieldTypes;
  allTypes: NexusGenAllTypes;
  inheritedFields: NexusGenInheritedFields;
  objectNames: NexusGenObjectNames;
  inputNames: NexusGenInputNames;
  enumNames: NexusGenEnumNames;
  interfaceNames: NexusGenInterfaceNames;
  scalarNames: NexusGenScalarNames;
  unionNames: NexusGenUnionNames;
  allInputTypes: NexusGenTypes['inputNames'] | NexusGenTypes['enumNames'] | NexusGenTypes['scalarNames'];
  allOutputTypes: NexusGenTypes['objectNames'] | NexusGenTypes['enumNames'] | NexusGenTypes['unionNames'] | NexusGenTypes['interfaceNames'] | NexusGenTypes['scalarNames'];
  allNamedTypes: NexusGenTypes['allInputTypes'] | NexusGenTypes['allOutputTypes']
  abstractTypes: NexusGenTypes['interfaceNames'] | NexusGenTypes['unionNames'];
  abstractResolveReturn: NexusGenAbstractResolveReturnTypes;
}


declare global {
  interface NexusGenPluginTypeConfig<TypeName extends string> {
  }
  interface NexusGenPluginFieldConfig<TypeName extends string, FieldName extends string> {
  }
  interface NexusGenPluginSchemaConfig {
  }
}