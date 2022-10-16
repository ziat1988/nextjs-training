import '../styles/reset.css'
import '../styles/globals.css'
import '../styles/layout.css'
import {ThemeProvider} from "styled-components";
import Header from "../components/Header";
import Footer from "../components/Footer";


const theme = {
    colors: {
        primary: '#355C7D'
    }
}

function MyApp({ Component, pageProps }) {

    if(Component.getLayout){
        return  (
            <ThemeProvider theme={theme}>
                {Component.getLayout(<Component {...pageProps} />)}
            </ThemeProvider>
        )
    }

    return (
        <ThemeProvider theme={theme}>
            <Header />
            <Component {...pageProps} />
            <Footer />
        </ThemeProvider>
    )
}

export default MyApp
