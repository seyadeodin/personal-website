import Image from 'next/image'
import Link from 'next/link'
import LogoType from '../assets/logotype.svg'

export function Header(){
  return(
    <header className="flex flex-row flex-1 place-content-between items-center mt-4 ">

       <section className='flex flex-row items-center'>

       <img src="/images/logotype.svg" alt="Lucas A. DEV" className="mr-12"/>

       <nav className="flex-row flex gap-4 font-semibold">
         <Link href="/">
          <a href="/">Início</a>
         </Link>
         <Link href="/about">
          <a>Sobre mim</a>
         </Link>
         <Link href="/about">
          <a>Portifólio</a>
         </Link>
       </nav>
       </section>

       <div className="flex items-center gap-4">
         <Link href="https://github.com/seyadodin">
           <img src="/images/github.svg"/>
         </Link>
         <Link href="https://linkedin.com/">
           <img src="/images/linkedin.svg"/>
         </Link>
         <Link href="">
           <div>
           <span>en</span>/<span>pt</span>
          </div>
         </Link>
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