import Link, { LinkProps } from 'next/link';
import { useRouter } from 'next/router';
import { ReactElement, cloneElement } from 'react';

interface ActiveLinkProps{
  children: ReactElement;
  activeClassName: string;
}

export function ActiveLink({}){
  const { asPath } = useRouter();
}