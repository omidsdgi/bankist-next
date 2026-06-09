import {Features, Footer, Header, Hero, Operations, SignUp, Testimonials} from "@/components";


export default function Home() {
    return (
        <>
            <Header/>
            <main>
                <Hero/>
                <Features/>
                <Operations/>
                <Testimonials/>
                <SignUp/>
            </main>
            <Footer/>
        </>
    )
}
