import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css'
import Link from 'next/link' // Link is a component that enables us to link to other pages by client side routing x

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>クリサポくんです</p>
        <p>
         ブログは <Link href="/posts/first-post">
            <a>こちら</a>
          </Link>
        </p>
      </section>
    </Layout>
  )
}