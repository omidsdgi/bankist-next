import React from "react";

export type MovementType = "deposit" | "withdrawal";
export type MovementAmount = number;
export type MovementDate = string

export interface Account {
    owner: string;
    movements: MovementAmount[];
    interestRate:number;
    pin: number;
    movementsDates: MovementDate[];
    currency: string;
    locale:string;
    username?: string
}

export interface Movement{
    id: string;
    type: MovementType;
    date: MovementDate;
    value: MovementAmount;
}
export interface SummaryType{
    totalIn: number;
    totalOut: number;
    interest: number;
}

export interface HeaderProps {
     accounts: Account[];
    currentAccount: Account | null;
    setCurrentUsername:React.Dispatch<React.SetStateAction<string | null>>;
}

export interface BalanceProps {
    account:Account;
    balance: number;
}
export interface OperationProps{
    accounts:Account[],
    setAccounts:React.Dispatch<React.SetStateAction<Account[]>>;
    currentAccount:Account
    balance:number
}

export interface TransferFormData {
    accounts:Account[],
    setAccounts:React.Dispatch<React.SetStateAction<Account[]>>,
    currentAccount:Account;
    balance:number
}

export interface LoanFormData {
    currentAccount:Account;
    setAccounts:React.Dispatch<React.SetStateAction<Account[]>>;
}