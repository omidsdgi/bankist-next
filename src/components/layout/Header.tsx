import Image from "next/image";
import {IconButton, ThemeToggle} from "@/components";

const Header = () => {
    return (
        <header className="flex flex-col-2 gap-4 flex-wrap items-center justify-between md:flex-row  px-4  py-1">

            <h1 className='text-xl font-medium'>Log in to get started</h1>
            <Image src='/logo.png' alt="Bankist logo" width={52.5} height={52.5}/>
            <form className='grid grid-cols-[2fr_2fr_1fr] gap-4'>
                <input
                    type='text'
                    placeholder='user'
                    className='login--input '/>
                <input
                    type="password"
                    placeholder='PIN'
                    maxLength={4}
                    className='login--input '/>
                <IconButton/>
            </form>
                <ThemeToggle />
        </header>
    );
};

export default Header;
