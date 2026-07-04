import {SummaryProps} from "@/types/Type";
import {accountSummaryUtils} from "@/utility/AccountSummaryUtils";
import {useEffect, useState} from "react";
import {setInterval} from "node:timers";

const Summary = ({isSorted, setIsSorted,account}:SummaryProps) => {
    const {totalIn, totalOut, interest}=accountSummaryUtils(account)
    const [time, setTime] = useState(80);
    const min= String(Math.trunc(time / 60)).padStart(2, "0");
    const second = String(Math.trunc(time % 60)).padStart(2, "0");

    useEffect(() => {
       const timeOut= setInterval(() => {
        setTime(prevTime => prevTime - 1);
        }, 1000)
    return ()=> clearInterval(timeOut)
    },[])
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
                    onClick={()=> setIsSorted(prev=>!prev)}
                    className="uppercase transition hover:text-blue-500 ">
                    Sort {isSorted ? '↑' : '↓'}
                </button>
            </div>

            <p>
                {`You will be logged out in ${min}: ${second}`}
                <span className="font-semibold text-black dark:text-white">
      05:00
    </span>
            </p>
        </footer>
    );
};

export default Summary;