import styles from './home.module.css'
import Head from 'next/head'
import DNav from '../components/nav/DNav'
import Bg from '../components/home/Bg'
import Section1 from '../components/home/Section1'
import Section2 from '../components/home/Section2'
import Section3 from '../components/home/Section3'
import Section4 from '../components/home/Section4'
import Section5 from '../components/home/Section5'
import Footer from '../components/footer/Footer'
import Layout from '../components/Layout'

export default function home() {
    return (
        <>
            <Layout>
                <Head>
                    <title>Contact Us</title>
                </Head>
                <Bg />
                <Section1 />
                <Section2 />
                <Section3 />
                <Section4 />
                {/* <Section5 /> */}
                <Footer />
            </Layout>
        </>
    )
}
