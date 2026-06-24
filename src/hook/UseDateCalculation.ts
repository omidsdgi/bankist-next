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
export const formatMovementDate= function (date:string):string {
    const calcDaysPassed=(date1:Date,date2:Date):number=>Math.round(Math.abs(date2.getTime()-date1.getTime())/(1000 * 60 * 60 * 24))
        const daysPassed=calcDaysPassed(new Date(),new Date(date))

    if(daysPassed === 0) return 'Today'
    if(daysPassed === 1) return "Yesterday"
    if(daysPassed <= 7) return `${daysPassed} days ago`

    const dateObj= new Date(date)
    const day= `${dateObj.getDate()}`.padStart(2,'0')
    const month = `${dateObj.getMonth() + 1}`.padStart(2,'0')
    const year= dateObj.getFullYear()
    return `${year}/${month}/${day}`
}