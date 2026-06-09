import Image from "next/image";

const Header = () => {
    return (
        <nav>
            <p>Log in to get started</p>
            <Image src='/logo.png' alt={'Bankist logo'} width={100} height={100} />
            <form>
            <input type='text' placeholder='user' />
            <input type="password" placeholder='PIN' maxLength={4} />
                <button>&rarr;</button>
            </form>
        </nav>
    );
};

export default Header;
