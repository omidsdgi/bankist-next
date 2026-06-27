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
   setCurrentAccount:React.Dispatch<React.SetStateAction<Account | null>>;
}

export interface BalanceProps {
    account:Account;
    balance: number;
}
export interface OperationProps{
    receiverUsername:string,
    setReceiverUsername:React.Dispatch<React.SetStateAction<string>>,
    transferAmount:string,
    setTransferAmount:React.Dispatch<React.SetStateAction<string>>,
}

export interface TransferFormData {
    receiverUsername: string;
    setReceiverUsername: React.Dispatch<React.SetStateAction<string>>;
    transferAmount: string;
    setTransferAmount: React.Dispatch<React.SetStateAction<string>>;
}