import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css'
import Link from 'next/link'
import { getSortedPostsData } from '../lib/posts'
import { createClient } from 'contentful'
import ProductCard from '../components/productCard'

export async function getStaticProps() {
  const allPostsData = getSortedPostsData()

  const client = createClient({
    space: process.env.CONTENTFUL_SPACE_ID,
    accessToken: process.env.CONTENTFUL_ACCESS_KEY
  })

  const res = await client.getEntries({content_type: 'product'})




  return {
    props: {
      allPostsData,
      products: res.items
    }
  }
}



export default function Home({ allPostsData, products }) {
  
  //console.log(products)
  
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>This is a test to showcase different rendering strategies in conjunction with nextJS and contentful</p>
        
      </section>

      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Product Stories</h2>
        <p>Read interesting stories about how other customer use our products</p>
        
          {products.map(product => (
            <ProductCard key={product.sys.id} product={product}/>
          ))}
        
      </section>


    
    

    </Layout>
  )
}