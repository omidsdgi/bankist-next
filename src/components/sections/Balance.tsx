const Balance = () => {
    return (
        <section className="flex items-end justify-between gap-4 ">
            <div className='flex flex-col'>
                <h2 className='text-2xl font-medium '>Current balance</h2>
                <p className='text-sm '>As of <span>05/03/02037</span></p>
            </div>
            <p className='text-4xl sm:text-5xl font-normal'>446100€</p>
        </section>
    );
};

export default Balance;