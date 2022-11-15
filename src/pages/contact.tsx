import Layout from '../components/Layout'
import Head from 'next/head'
import DNav from '../components/nav/DNav'
import Bg from '../components/bg/Bg'
import Header from '../components/contact/Header'
import GetInTouch from '../components/contact/GetInTouch'
import Footer from '../components/footer/Footer'

export default function contact() {
    return (
        <>
            <Layout>
                <Head>
                    <title>Contact Us</title>
                </Head>
                <Bg page="contact" />
                <DNav page="contact" />
                <Header />
                <GetInTouch />
                <Footer />
            </Layout>
        </>
    )
}
