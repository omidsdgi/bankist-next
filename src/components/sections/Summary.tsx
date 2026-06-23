import {Account} from "@/types/Type";

interface SummaryProps {
    isSorted:boolean;
    setIsSorted:(isSorted:boolean) => void;
    account:Account
}
    const formatCur=function (value:number, locale:string, currency:string){
        return new Intl.NumberFormat(locale, {
            style: "currency",
            currency: currency
        }).format(value);
    }

const Summary = ({isSorted, setIsSorted,account}:SummaryProps) => {

    const totalIn=account.movements
        .filter(movement => movement>0)
        .reduce((acc, mov) => acc + mov, 0)
        .toFixed(2);

    const totalOut=account.movements
        .filter(movement => movement<0)
        .reduce((acc, mov) => acc + mov, 0)
        .toFixed(2)


    const interest=account.movements
        .filter(move => move>0)
            .map(deposit =>(deposit* account.interestRate)/100)
            .filter(int=>int>1)
            .reduce((acc, int) => acc + int, 0)
        .toFixed(2)

    return (
        <footer className="grid grid-cols-1  sm:grid-cols-[4fr_3fr] gap-6 mt-8 text-xs md:text-sm text-gray-600 dark:text-gray-400">
            <div className="flex items-center  justify-between flex-1 ">
                <div>
                    <span className="mr-2 uppercase">In</span>
                    <span className="font-medium text-green-500">
    {formatCur(+totalIn, account.locale, account.currency)}
      </span>
                </div>

                <div>
                    <span className="mr-2 uppercase">Out</span>
                    <span className="font-medium text-red-500">
        {formatCur(Math.abs(+totalOut), account.locale, account.currency)}
      </span>
                </div>

                <div>
                    <span className="mr-2 uppercase">Interest</span>
                    <span className="font-medium text-green-500">
    {formatCur(+interest, account.locale, account.currency)}
      </span>
                </div>

                <button
                    onClick={()=> setIsSorted(!isSorted)}
                    className="uppercase transition hover:text-blue-500 ">
                    Sort {isSorted ? '↑' : '↓'}
                </button>
            </div>

            <p>
                You will be logged out in{' '}
                <span className="font-semibold text-black dark:text-white">
      05:00
    </span>
            </p>
        </footer>
    );
};

export default Summary;