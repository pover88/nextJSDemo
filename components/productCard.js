import Link from 'next/link'
import Image from 'next/image'

export default function ProductCard({product}){
    const {productName, productDescription, productImage} = product.fields
    
    
    return(
        <div className="card">
            <div className="featured">
                <Image
                    src={'https:' + productImage.fields.file.url}
                    width={productImage.fields.file.details.image.width}
                    height={productImage.fields.file.details.image.height}
                />
            </div>
            <div className="content">
                <div className="info">
                    <h4>{productName}</h4>
                    <p>{productDescription}</p>
                    <br></br>
                </div>
                <div className="actions">
                    <Link href="/products/productPage"><a>More Information</a></Link>
                </div>
            </div>
            <br></br>

        </div>
    )
}