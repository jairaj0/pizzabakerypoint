import React from 'react';
import styles from '@/styles/features.module.scss'
import { Player } from '@lottiefiles/react-lottie-player';

const Features = () => {
  return (
    <div className={styles.features}>
    <div className={`${styles.box}`}>
    <div className={`${styles.main_box} container flex-between`}>
    <div className={`${styles.inbox} flex column`}>
    <Player
              autoplay
              loop
              src={"https://assets3.lottiefiles.com/packages/lf20_GUQObWT5Mw.json"}
              style={{ width: "300px" }}
            ></Player>
        <div className={`${styles.texts} flex-center column`}>
          <h1>order your food</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse pariatur repudiandae architecto incidunt deleniti corrupti fugiat debitis excepturi id ducimus?</p>
        </div>
    </div>
    <div className={`${styles.inbox} flex column`}>
    <Player
              autoplay
              loop
              src={"https://assets4.lottiefiles.com/packages/lf20_oV72KM.json"}
              style={{ width: "300px" }}
            ></Player>
        <div className={`${styles.texts} flex-center column`}>
          <h1>Delivery or pick up</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse pariatur repudiandae architecto incidunt deleniti corrupti fugiat debitis excepturi id ducimus?</p>
        </div>
    </div>
    <div className={`${styles.inbox} flex column`}>
    <Player
              autoplay
              loop
              src={"https://assets1.lottiefiles.com/packages/lf20_jBvjF3.json"}
              style={{ width: "300px" }}
            ></Player>
        <div className={`${styles.texts} flex-center column`}>
          <h1>Enjoy it</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse pariatur repudiandae architecto incidunt deleniti corrupti fugiat debitis excepturi id ducimus?</p>
        </div>
    </div>
    </div>
    </div>
    </div>
  )
}

export default Features;