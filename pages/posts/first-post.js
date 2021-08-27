import Head from 'next/head'
import Link from 'next/link'
import Layout from '../../components/layout'

export default function FirstPost() {
	return (
		<Layout>
			<Head>
				<title>First Post</title>
			</Head>
			<h1>First Post</h1>
			<h2>
				My precious days are here.
				{/* <Link href="/">
					<a>Back to home</a>
				</Link> */}
			</h2>
			<p>
				Life is a journey, and I'm a part of it.
			</p>
		</Layout>
	)
}
