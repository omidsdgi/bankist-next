import React from "react";

interface OperationCardProps {
    title: string;
    variant:  'transfer' | 'loan' | 'close';
    children: React.ReactNode;
}

const variantStyles = {
    transfer: 'bg-gradient-to-tl from-amber-500 to-yellow-400 ',
    loan: 'bg-gradient-to-tl from-emerald-500 to-lime-400 ',
    close: 'bg-gradient-to-tl from-rose-500 to-red-400 ',
}
const OperationCard = ({title, variant, children}:OperationCardProps) => {
    return (
        <section className={`rounded-2xl p-4 sm:p-6 ${variantStyles[variant]}`}>
            <h2 className='text-lg font-semibold mb-4'>{title}</h2>
            {children}
        </section>
    );
};

export default OperationCard;