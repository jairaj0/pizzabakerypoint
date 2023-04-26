import React,{useState} from 'react';
import styles from '@/styles/market.module.scss';
import { categories } from '@/helper/helper';
import Image from 'next/image';

const Market = () => {
  const [active, setActive] = useState('All')
  return (
    <div className={styles.market}>
    <div className="container">
    <h2>Fresh from Pizza bakery point</h2>
      <h1>Our Special Menu</h1>
      <div className={styles.options}>
      {categories.map((value , i)=>
        <div onClick={()=>setActive(value[0])} key={i} className={`${active === value[0] ? [styles.option,styles.active].join(" ") : styles.option} flex`}>
          <Image src={value[1]} alt={value[0]} />
          <p>{value[0]}</p>
        </div>
      )}
      </div>
    </div>
    </div>
  )
}

export default Market