import Head from 'next/head'
import Link from 'next/link'
import Layout from '../../components/layout'

export default function ProductPage() {
  return (
    <Layout>
      <Head>
        <title>The Product</title>
      </Head>
      <h1>Product Name</h1>
      <h3>Product Description</h3>
      <h3>Product Image</h3>
      <h2>
        <Link href="/">
          <a>Back to home</a>
        </Link>
      </h2>
    </Layout>
  )
}