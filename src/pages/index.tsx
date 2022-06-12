import Head from 'next/head';
import { useRouter } from 'next/router';

import { PaintBrushBroad, Ghost } from 'phosphor-react';
import { Button } from '../components/Button';

const localeText: {[key: string]: any} = {
  en: {
    callToAction: [
      'Development',
      'as if by',
      '',
      'magic',
    ],
    tecnologies: 'and more',
    buttons: [
      'About me',
      'Portfolio'
    ]
  },
  "pt-BR": {
    callToAction: [
      'Desenvolimento',
      'num toque',
      'de',
      'mágica'
    ],
    tecnologies: 'e mais',
    buttons: [
      'Sobre mim',
      'Portfólio'
    ]
  }
}

export default function Home(){
  const router = useRouter();

  const lang: string = router.locale;

  return(
    <>
      <Head>
        <title>Ińício | Lucas A. DEV</title>
      </Head>
      
      <main
        className='grid grid-cols-2 mt-16 fixed'
      >
        <div>
          <h1
            className='font-semibold text-7xl'
          >
            {localeText[lang].callToAction[0]}<br/>
            {localeText[lang].callToAction[1]}<br/>
            {localeText[lang].callToAction[2]}<span className='text-brand-orange-500'> {localeText[lang].callToAction[3]}</span>
          </h1>

          <div className='font-semibold text-3xl mt-10'>
            <h4>React</h4>
            <h4>React Native</h4>
            <h4>Node</h4>
            <h4>{localeText[lang].tecnologies}</h4>

          </div>

          <div className='flex flex-row gap-4 mt-10'>
            <Button type='primary'>
              <Ghost weight='bold' width={36} height={36}/>
              {localeText[lang].buttons[0]}
            </Button>
            <Button type='secondary'>
              <PaintBrushBroad weight='bold' width={36} height={36}/>
              {localeText[lang].buttons[1]}
            </Button>
          </div>
        </div>

        <img
          src='/images/landing.svg'
          alt='Mago segurando uma varinha e uma bola de cristal'
        />
      </main>
      
    </>
  )
}