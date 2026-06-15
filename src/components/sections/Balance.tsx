const Balance = () => {
    return (
        <section className="flex items-end justify-between flex-wrap gap-4 mb-2 col-span-2 ">
            <div className='flex flex-col'>
                <p className='text-xl font-medium '>Current balance</p>
                <p className='text-sm '>As of <span>05/03/02037</span></p>
            </div>
            <p className='text-4xl sm:text-5xl font-normal'>446100€</p>
        </section>
    );
};

export default Balance;