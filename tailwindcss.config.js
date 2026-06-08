const tailwindConfig = {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx}",
        "./components/**/*.{js,ts,jsx,tsx}",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend:{
            fontFamily:{
                sans:['Poppins', 'sans-serif'],
            },
            colors:{
                bank:'#2a9d8f'
            }
        },
    } ,
    plugins: []
}
export default tailwindConfig;
