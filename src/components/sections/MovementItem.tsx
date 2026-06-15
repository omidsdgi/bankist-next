const MovementItem = ({account, key}) => {
    return (
        <li className='flex items-center justify-between gap-4 px-4 sm:px-8 py-4 border-b border-gray-100'>
            <span className='text-xs uppercase font-medium text-white px-3 py-1 rounded-full bg-gradient-to-tl from-emerald-500 to-lime-400 '>{account.owner}</span>
            <span className='text-xs uppercase font-medium text-gray-500'>2037/05/15</span>
            <span className='text-lg ml-auto'>1300€</span>
        </li>
    );
};

export default MovementItem;