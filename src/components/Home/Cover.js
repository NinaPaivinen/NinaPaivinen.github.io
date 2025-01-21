import React from "react";
import styles from "./Cover.module.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";


function Cover() {
  useEffect(() => {
    AOS.init({
      duration: 3000,
    });
  });
  return (
<div>
<div class={styles.imageContainer}>
  

<div className={styles.koodattuT}>CLOCK-TIMER</div>
</div>


</div>
  );
}

export default Cover;

