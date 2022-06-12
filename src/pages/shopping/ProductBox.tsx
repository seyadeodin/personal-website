import Link from 'next/link';
import { ProductDTO } from '../../DTO/ProductDTO';

interface ProductBox {
  product:  ProductDTO
}

export function ProductBox({ product }: ProductBox) {

  return(
    
    <article >
      {
        product?.attributes.images !== null ?
        <img
          src={`http://localhost:1337${product.attributes.images?.data[0].attributes?.formats?.small?.url}`}
          width='200'
        /> :null
      }
      <Link href={`/shopping/${product.id}`} className='cursor-grabbing'>
          <a className='font-black'>{product.attributes.name}</a>
      </Link>
      <p className='font-medium'>R$ {product.attributes.price}</p>
    </article>

  )
}