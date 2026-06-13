const Footer = () => {
    return (
        <footer className="mt-6 flex items-center justify-between text-sm text-gray-600 dark:text-gray-400">
            <div className="flex items-center gap-8">
                <div>
                    <span className="mr-2 uppercase">In</span>
                    <span className="font-medium text-green-500">
        27035.20€
      </span>
                </div>

                <div>
                    <span className="mr-2 uppercase">Out</span>
                    <span className="font-medium text-red-500">
        1082.61€
      </span>
                </div>

                <div>
                    <span className="mr-2 uppercase">Interest</span>
                    <span className="font-medium text-green-500">
        323.46€
      </span>
                </div>

                <button className="uppercase transition hover:text-black dark:hover:text-white">
                    Sort ↓
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

export default Footer;