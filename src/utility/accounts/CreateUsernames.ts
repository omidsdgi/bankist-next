import {accounts} from "@/data/mockData";

export const createUsernames = accounts.map(acc => ({
    ...acc,
        username:acc.owner
            .toLowerCase()
            .split(" ")
            .map((name)=>name[0])
            .join("")
}))
