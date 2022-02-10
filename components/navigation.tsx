import React, { FunctionComponent, useState, useEffect, useContext } from 'react';
import NavItem from './navItem';
import styles from '../styles/components/navigation.module.css';
import Link from 'next/link';
import Button from './button';
import {useSession, signOut} from 'next-auth/react'
import { AppContext } from '../context';

type Props = {};

const Navigation: FunctionComponent<Props> = (props) => {

  const { data: session } = useSession()
  const {state, dispatch} = useContext(AppContext)
  const [open, setOpen] = useState(true)
  

  useEffect (() => {
    window.innerWidth > 800?setOpen(true) : setOpen(false)
    window.addEventListener('resize', () => {
      window.innerWidth > 800?setOpen(true) : setOpen(false)
    }
    )
},[])

  return (
    <>
    {window.innerWidth < 800 && open && <div onClick={()=> setOpen(false)} className={styles.backdrop}></div>}
  <nav className={styles.nav}>
    <Link href={'/'}>
    <h1 className={styles.brand} >Juicy Kotas</h1>
    </Link>
    <i onClick={()=> setOpen(!open)} id={styles.openButton} className='bi bi-list'></i>
    {open &&
    <div className={styles.nav_items}>
      <NavItem link='/menu' title='Menu'/>
      <NavItem link='/about' title='About'/>
      <NavItem link='/faq' title='FAQ'/>
      {!session? <NavItem link='/contact' title='Contact'/>: <p onClick={() => signOut()}>My Account</p> }
      {!session? <Link href={'/order'}><Button title='Order'/></Link> : 
                  <Link href={'/cart'}>
                    <div className={styles.cart}>
                      {state.cart > 0 && <p>{state.cart}</p>}
                      <i className='bi bi-cart'></i>
                    </div>
                  </Link>}
    </div>
}
  </nav>
    </>
  );
};

export default Navigation;


