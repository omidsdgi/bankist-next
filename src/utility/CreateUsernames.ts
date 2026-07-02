import {Account} from "@/types/Type";

export const createUsernames = (accounts:Account[]):Account[] => {
    return accounts.map((acc) => ({
        ...acc,
        username: acc.owner
            .toLowerCase()
            .split(" ")
            .map((name) => name[0])
            .join("")
    }))
}
