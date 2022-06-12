import { GetServerSideProps } from 'next';
import Head from 'next/head';
import qs from 'qs';

import { strapiApi } from '../../lib/strapiApi';
import { ProductDTO } from '../../DTO/ProductDTO';
import { ProductBox } from './ProductBox';

interface ShoppingProps {
  products: ProductDTO[];
}

export default function Shopping({ products }: ShoppingProps){


  return(
    <>
      <Head>
        <title>Ińício | Lucas A. DEV</title>
      </Head>

      <h1
        className='font-semibold text-3xl mt-16'
      > 
        Loja
      </h1>

      <main
        className='grid grid-cols-3 gap-2 mt-4'
      >
        {products.map(product => (
          <ProductBox key={product.id} product={product}/>
        ))}
      </main>
      
    </>
  )
}

export const getServerSideProps: GetServerSideProps = async({ req, params, locale}) => {
  // console.log({req});
  // console.log({params});

  const query = qs.stringify({
    // sort: ['name:asc'],
    // filters: {
    //   title: {
    //     $eq: 'hello',
    //   },
    // },
    populate: '*',
    locale,
    pagination: {
      pageSize: 10,
      page: 1,
    },
    // publicationState: 'live',
  }, {
    encodeValuesOnly: true, // prettify url
  });

  let products = [];
  try {
    const response = await strapiApi.get(`/api/products?${query}`)
    if (response.status == 200){
      products = response.data.data
    }
  } catch(e) {
    console.log(e)
  }

  return{
    props:{
      products
    }
  }
}