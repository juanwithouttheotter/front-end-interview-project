import Head from "next/head";
import { Navbar, Footer } from "..";




const Index = ({ title, children }) => {
    return (
        <div>
            <Head>
                <title>{title}</title>
                <link rel="icon" href="/favicon.ico" />
                <link rel="stylesheet" href="https://use.typekit.net/zdz0zoa.css" />
            </Head>
            <Navbar />
            {children}
            <Footer />
        </div>
    )
}

export default Index;