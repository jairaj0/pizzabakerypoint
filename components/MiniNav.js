import React from 'react';
import styles from '@/styles/mininav.module.scss';

const MiniNav = () => {
  return (
    <div className={styles.mininav}>
        <div className="container flex-center">
            <h1>FLAT ₹50 OFF</h1>
            <h2>Use Code : <span>PIZ50</span></h2>
        </div>
    </div>
  )
}

export default MiniNav