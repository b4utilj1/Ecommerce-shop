import { useContext } from 'react'
import { ShopContext } from '../Context/ShopContext'
import { useParams } from 'react-router-dom'
import  ProductHd  from '../components/ProductHd'
import { ProductsDisplay } from '../components/ProductsDisplay'
import {ProductDescription} from '../components/ProductDescription'
import { RelatedProduct } from '../components/RelatedProduct'

 export const Product = () => {

  const {all_products} = useContext(ShopContext)
  const {productId} = useParams()
  const product = all_products.find((e) => e.id === Number(productId))
  if(!product){
  return <div>Producto no disponible</div>
  }

  return (
    <section className='max_padd_container py-28'>
      <div>
        <ProductHd product={product} />
        <ProductsDisplay product={product} />
        <ProductDescription/>
        <RelatedProduct/>
      </div>
    </section>
  )
}

