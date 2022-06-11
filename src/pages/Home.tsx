import Head from 'next/head';
import { PaintBrushBroad, Ghost } from 'phosphor-react';
import { Button } from '../components/Button';
import { Header } from '../components/Header';

export default function Home(){

  return(
    <>
      <Head>
        <title>Ińício | Lucas A. DEV</title>
      </Head>
      <Header/>
      
      <main
        className='flex flex-row mt-16 fixed'
      >
        <div>
          <h1
            className='font-semibold text-7xl'
          >
            Desenvolvimento<br/>
            num toque <br/>
            de <span className='text-brand-orange-500'>mágica</span>
          </h1>

          <div className='font-semibold text-3xl mt-10'>
            <h4>React</h4>
            <h4>React Native</h4>
            <h4>Node</h4>
            <h4>e mais</h4>

          </div>

          <div className='flex flex-row gap-4 mt-10'>
            <Button type='primary'>
              <Ghost weight='bold' width={36} height={36}/>
              Sobre mim
            </Button>
            <Button type='secondary'>
              <PaintBrushBroad weight='bold' width={36} height={36}/>
              <span>Portifólio</span>
            </Button>
          </div>
        </div>

        <img
          src='/images/landing.svg'
        />
      </main>
      
    </>
  )
}