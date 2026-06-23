import {Account} from "@/types/Type";
import {useAccountSummary} from "@/hook/UseAccountSummary";

interface SummaryProps {
    isSorted:boolean;
    setIsSorted:(isSorted:boolean) => void;
    account:Account
}

const Summary = ({isSorted, setIsSorted,account}:SummaryProps) => {
    const {totalIn, totalOut, interest}=useAccountSummary(account)

        return (
        <footer className="grid grid-cols-1  sm:grid-cols-[4fr_3fr] gap-6 mt-8 text-xs md:text-sm text-gray-600 dark:text-gray-400">
            <div className="flex items-center  justify-between flex-1 ">
                <div>
                    <span className="mr-2 uppercase">In</span>
                    <span className="font-medium text-green-500">
    {totalIn}
      </span>
                </div>

                <div>
                    <span className="mr-2 uppercase">Out</span>
                    <span className="font-medium text-red-500">
        {totalOut}
      </span>
                </div>

                <div>
                    <span className="mr-2 uppercase">Interest</span>
                    <span className="font-medium text-green-500">
{interest}
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