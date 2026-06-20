import {Account} from "@/types/Type";

export const getCurrentAccount= (
    accounts: Account[],
    username: string,
):Account | undefined =>{
    return accounts.find((acc) => acc.username === username);
}
