import Layout from '../components/Layout'
import Head from 'next/head'
import DNav from '../components/nav/DNav'
import Bg from '../components/bg/Bg'
import Intro from '../components/about/Intro'
import Carousel from '../components/about/Carousel'
import Footer from '../components/footer/Footer'

export default function about() {
    return (
        <>
            <Layout>
                <Head>
                    <title>About Us</title>
                </Head>
                <Bg page="about" />
                <DNav page="about" />
                <Intro />
                <Footer />
            </Layout>
        </>
    )
}
