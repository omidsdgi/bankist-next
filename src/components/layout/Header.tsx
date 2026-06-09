import Image from "next/image";

const Header = () => {
    return (
        <nav className="flex items-center justify-between py-6 ">

            <p className='text-xl font-light'>Log in to get started</p>
            <Image src='/logo.png' alt={'Bankist logo'} width={52.5} height={52.5}/>
            <form className='flex items-center justify-center gap-3'>
                <input type='text' placeholder='user' className='login--input '/>
                <input type="password" placeholder='PIN' maxLength={4} className='login--input '/>
                <button className='border-none bg-transparent text-xl  cursor-pointer transition-all duration-300 hover:outline-none hover:text-gray-500 focus:outline-none focus:text-gray-500'> &rarr;</button>
            </form>
        </nav>
    );
};

export default Header;
