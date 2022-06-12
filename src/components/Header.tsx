import Image from 'next/image'
import Link from 'next/link'
import LogoType from '../assets/logotype.svg'
import { useRouter, NextRouter } from 'next/router'

const menuText = {
  en: ['Home', 'About me', 'Portfolio', 'Store'],
  'pt-BR': ['Início', 'Sobre mim', 'Portfólio', 'Loja']
}


export function Header(){
  const router = useRouter()
  const locale = router.locale;

  function handleChangeLanguage(){
    console.log(locale)
    if (locale !== 'en'){
      router.push(router.asPath, undefined ,{locale: 'en'})
    } else {
      router.push(router.asPath, undefined ,{locale: 'pt-BR'})
    }
  }

  const activeStyle = 'text-brand-orange-500'

  return(
    <header className="flex flex-row flex-1 place-content-between items-center mt-4 ">

       <section className='flex flex-row items-center'>

       <img src="/images/logotype.svg" alt="Lucas A. DEV" className="mr-12"/>

       <nav className="flex-row flex gap-4 font-semibold">
         <Link href="/">
          <a>{menuText[locale][0]}</a>
         </Link>
         <Link href="/about">
          <a>{menuText[locale][1]}</a>
         </Link>
         <Link href="/about">
          <a>{menuText[locale][2]}</a>
         </Link>
         <Link href="/shopping">
          <a>{menuText[locale][3]}</a>
         </Link>
       </nav>
       </section>

       <div className="flex items-center gap-4">
         <Link href="https://github.com/seyadodin">
           <img src="/images/github.svg" alt=''/>
         </Link>
         <Link href="https://linkedin.com/">
           <img src="/images/linkedin.svg" alt=''/>
         </Link>
          <button onClick={handleChangeLanguage} className='font-semibold'>
          <span className={router.locale == 'en' && activeStyle} >en</span>/<span  className={router.locale == 'pt-BR' && activeStyle}>pt</span>
        </button>
       </div>
    </header>
  )
}

        // <ActiveLink activeClassName={styles.active} href="/"> 
        //    <a>Home</a>
        //   </ActiveLink>
        //   <ActiveLink activeClassName={styles.active} href="/posts"> 
        //    <a>Posts</a>
        //   </ActiveLink>