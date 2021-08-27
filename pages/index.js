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
        <p>Hi. I'm Sayu Hagihara. Heroine of the story "Higehiro".</p>
        <p>
          My Blog page is <Link href="/posts/first-post">
            <a>here.</a>
          </Link>
        </p>
      </section>
    </Layout>
  )
}