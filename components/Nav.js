import React from 'react';
import styles from '@/styles/nav.module.scss';
import Link from 'next/link';
import Image from 'next/image';
import logo from "../assets/logo.svg";
import search from '../assets/search.svg';
import cart from '../assets/cart.svg';
import user from '../assets/user.svg';

const Nav = () => {
  return (
    <nav className={styles.nav}>
    <div className="container flex-between">
      <Link className={`${styles.logo} flex`} href="/">
        <Image src={logo} alt="logo" />
        <h1>Pizza bakery point</h1>
      </Link>

      <div className={`${styles.links} flex`}>
        <Link href="/">Home</Link>
        <Link href="/">Categories</Link>
        <Link href="/">About Us</Link>
      </div>
      <div className={styles.btns}>
      <button><Image src={search} alt="search" /> Search</button>
      <button>Login <Image src={user} alt="user" /></button>
      <button>Cart <Image src={cart} alt="cart" /></button>
      </div>
    </div>
  </nav>
  )
}

export default Nav