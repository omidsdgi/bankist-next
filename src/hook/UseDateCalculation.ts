import {Account} from "@/types/Type";

export const formatDateTime=function (account:Account):string {
const now= new Date();
const options: Intl.DateTimeFormatOptions={
    hour:'numeric',
    minute:'numeric',
    weekday:'long',
    day:'numeric',
    year:'numeric',
    month:'long',
}
return  new Intl.DateTimeFormat(
     account.locale,
     options
 ).format(now)
}