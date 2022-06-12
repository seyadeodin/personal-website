/* eslint-disable @next/next/no-img-element */
import { GetServerSideProps, GetStaticPaths, GetStaticProps } from "next";
import Head from "next/head";
import qs from 'qs'

import { strapiApi } from "../../lib/strapiApi";
import { Button } from "../../components/Button";
import { ProductDTO } from "../../DTO/ProductDTO";
import { useRouter } from "next/router";
import { ShoppingBag } from "phosphor-react";

interface ProductProps {
  product: ProductDTO;
}

const textLocale = {
  en: [
    'U$',
    'Product description',
    'Dimensions',
    'Height',
    'Width',
    'Depth',
    'Quantity',
    'Buy'
  ],
  'pt-BR': [
    'R$',
    'Descrição do produto',
    'Dimensões',
    'Altura',
    'Largura',
    'Comprimento',
    'Quantidade',
    'comprar',
  ]
}

export default function Product({ product }: ProductProps) {
  const router = useRouter();
  const locale = router.locale;

  return(
    <>
      <Head>
        <title>{product.attributes?.name} || Lucas A. Dev</title>
      </Head>

      <main
        className='grid grid-cols-2 gap-8 mt-16'
      >
        <img src={`http://localhost:1337${product.attributes?.images?.data[0].attributes?.url}`} alt='' />
        <div>
          <h1
            className='text-3xl'
          >
            {product?.attributes?.name}
          </h1>
          <h4
            className="text-xl mt-4" 
          >
            {textLocale[locale][0]} {product?.attributes?.price}
          </h4>
          <div className=" border-brand-gray-300 border-solid w-full h-[1px] mt-6 bg-brand-gray-300"> </div>
          <p className="mt-6">{textLocale[locale][1]}</p>
          <p className="mt-4">{product.attributes?.description}</p>
          <p className="mt-6">{textLocale[locale][2]}</p>
          <div className="flex flex-row gap-8 mt-2">
            <div>
              <span>{textLocale[locale][3]}</span>
              <p>{product?.attributes?.height} cm</p>
            </div>
            <div>
              <span>{textLocale[locale][4]}</span>
              <p>{product?.attributes?.width} cm</p>
            </div>
            <div>
              <span>{textLocale[locale][5]}</span>
              <p>{product?.attributes?.depth} cm</p>
            </div>
          </div>
          <label className="mt-6 block">{textLocale[locale][6]}</label>
          <input className="mb-6 bg-brand-blue-900 p-2 text-center rounded-lg"/>
          <Button
            type="primary"
          >
            <ShoppingBag weight='bold' width={36} height={36}/>
            {textLocale[locale][7]}
          </Button>
        </div>
      </main>
    </>
  )
}

export const getStaticPaths: GetStaticPaths = async() => {
  return({
    paths: [
      //points which posts witll be generated during build
      // { params: {slug: 'slug_name'}}
    ],
    fallback: 'blocking'
  })
}

export const getStaticProps: GetStaticProps = async({ params, locale }) => {
  console.log({params})
  const { slug } = params;


  const query = qs.stringify({
    // sort: ['name:asc'],
    // filters: {
    //   title: {
    //     $eq: 'hello',
    //   },
    // },
    populate: '*',
    pagination: {
      pageSize: 10,
      page: 1,
    },
    // publicationState: 'live',
  }, {
    encodeValuesOnly: true, // prettify url
  });

  let  product = [];
  let response;
  try {
    console.log(`/api/products/1?${query}`)
    response = await strapiApi.get(`/api/products/${slug}?${query}&locale=${locale}`)
    if (response.status == 200){
      if (response.data.data.attributes.locale !== locale){
        const id = response.data.data.attributes.localizations.data[0].id;
        response = await strapiApi.get(`/api/products/${id}?${query}&locale=${locale}`)
      }
      product = response.data.data
    }
    console.log(product)
  } catch(e) {
    console.log(e)
  }


  return{
    props:{
      product
    }
  }

}
