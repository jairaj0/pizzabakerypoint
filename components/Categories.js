import React from 'react';
import styles from '@/styles/categories.module.scss';
import { categories } from '@/helper/helper';
import Image from 'next/image';

const Categories = () => {
  return (
    <div className={styles.categories}>
        <div className="container">
        <h1>Categories</h1>
        <div className={styles.allcat}>

        {
          categories.map((value , i) => <div className={`${styles.items} flex-center column`} key={i}>
            <Image src={value[1]} alt={value[0]} />
            <h2>{value[0]}</h2>
          </div>)
        }
        </div>
        </div>
    </div>
  )
}

export default Categories