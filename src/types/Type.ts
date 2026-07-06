import React, {ChangeEventHandler, HTMLInputTypeAttribute} from "react";

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

export interface MovementListProps {
    isSorted: boolean;
    account:Account
}
export interface MovementItemProps {
    index:number;
    amount:number
    date:string;
    locale:string;
    currency:string;
}

export interface SummaryProps {
    time:string;
    isSorted:boolean;
    setIsSorted:React.Dispatch<React.SetStateAction<boolean>>;
    account:Account
}

export interface HeaderProps {
     accounts: Account[];
    currentAccount: Account | null;
   onLoginSuccess: (username:string | null) => void;
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
    restLogoutTimer:()=>void
}

export interface TransferFormData {
    accounts:Account[],
    setAccounts:React.Dispatch<React.SetStateAction<Account[]>>,
    currentAccount:Account;
    balance:number
    restLogoutTimer:()=>void
}

export interface LoanFormData {
    currentAccount:Account;
    setAccounts:React.Dispatch<React.SetStateAction<Account[]>>;
    restLogoutTimer:()=>void
}

export interface CloseAccountProps {
    setAccounts:React.Dispatch<React.SetStateAction<Account[]>>;
    currentAccount:Account;
}

export interface BaseInputProps {
    type?:HTMLInputTypeAttribute,
    className?: string;
    placeholder?: string;
    value?: string;
    onChange?: ChangeEventHandler<HTMLInputElement>
}