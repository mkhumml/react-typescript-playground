import React from 'react';
import imageJeremy from './image-jeremy.png'
import workImg from './icon-work.svg'
import styles from './App.module.css';

function App() {
  return (
    <div className={styles.App}>
      <div className={styles.UserCardContainer}>
        <div className={styles.UserContainer}>
          <img className={styles.Img} src={imageJeremy} alt="jeremy" />
          <h2 className={styles.Head2}>Report for</h2>
          <h1 className={styles.Head1}>Jeremy Robson</h1>
        </div>
        <div className={styles.ButtonContainer}>
          <button>Daily</button>
          <button>Weekly</button>
          <button>Monthly</button>
        </div>
      </div>
      {/** other ccard**/}
      <div style={{ display: "flex", flexDirection: "column", gap: "2em" }}>
        <div className={styles.ActivityCardContainer}>
          <div className={styles.ActivityCardImgContainer}>
            <img className={styles.ActivityCardImg} src={workImg} alt="work" />
          </div>
          <div className={styles.ActivityContainer}>
            <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "1em" }}>
              <h5>Work</h5>
              <h5>...</h5>
            </div>
            <h4 className={styles.Head4}>
              32 hrs
            </h4>
            <h2 className={styles.Head2}>
              Last week - 36 hrs
            </h2>
          </div>
        </div>
        <div className={styles.ActivityCardContainer}>
          <div className={styles.ActivityCardImgContainer}>
            <img className={styles.ActivityCardImg} src={workImg} alt="work" />
          </div>
          <div className={styles.ActivityContainer}>
            <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "1em" }}>
              <h5>Work</h5>
              <h5>...</h5>
            </div>
            <h4 className={styles.Head4}>
              32 hrs
            </h4>
            <h2 className={styles.Head2}>
              Last week - 36 hrs
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
