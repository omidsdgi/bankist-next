import {initialAccounts} from "@/data/mockData";

export const createUsernames = initialAccounts.map(acc => ({
    ...acc,
        username:acc.owner
            .toLowerCase()
            .split(" ")
            .map((name)=>name[0])
            .join("")
}))
