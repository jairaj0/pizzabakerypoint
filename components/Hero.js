import React from 'react';
import { Player } from "@lottiefiles/react-lottie-player";
import styles from '@/styles/hero.module.scss';
import Image from 'next/image';

const Hero = () => {
  return (
    <div className={styles.hero}>
          <div className="container">
            <div className={styles.heroText}>
            <h1>Pi<span>zz</span>a bakery Point</h1>
            <p>I am do location one location address best <span>Patel Nagar Patna</span> second location is <span>Danapur khagaul opposite Bank of India</span>.</p>
            </div>
            <div className={styles.pizza_image}></div>
          </div>
          <div className={styles.border}></div>
        </div>
  )
}

export default Hero