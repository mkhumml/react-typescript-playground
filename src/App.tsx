import React, { useState, useEffect } from 'react';
import workImg from './icon-work.svg'
import playImg from './icon-play.svg';
import studyImg from './icon-study.svg';
import exerciseImg from './icon-exercise.svg';
import socialImg from './icon-social.svg';
import selfcareImg from './icon-self-care.svg';
import styles from './App.module.css';
import UserCard from './components/UserCard/UserCard';
import ActivityCard from './components/ActivityCard/ActivityCard';

/***
 * im component selbst wird kein switch (daily,monthly,weekly) gemacht -> das muss mittels state im hoc erfolgen & dann die angepassten daten runtergeschoben werden.
 * Logik zum abfragen // type switchen also im CNTAINER <3
 ***/

function App() {
  const [period, setPeriod] = useState("");

  useEffect(() => {
    console.log("period")
    console.log(period)
  }, [period])

  return (
    <div className={styles.App}>
      <UserCard setPeriod={setPeriod} period={period} />
      <div style={{ display: "flex", gap: "2em", flexWrap: "wrap" }}>
        <ActivityCard
          backgroundColor={"hsl(15, 100%, 70%)"}
          svg={workImg}
          title="Work"
          amount={32}
          prevAmount={36}
          prevString={"last Week"}
        />
        <ActivityCard
          backgroundColor={"hsl(195, 74%, 62%)"}
          svg={playImg}
          title="Play"
          amount={32}
          prevAmount={36}
          prevString={"last Week"}
        />
        <ActivityCard
          backgroundColor={"hsl(348, 100%, 68%)"}
          svg={studyImg}
          title="Study"
          amount={32}
          prevAmount={36}
          prevString={"last Week"}
        />
        <ActivityCard
          backgroundColor={"hsl(145, 58%, 55%)"}
          svg={exerciseImg}
          title="Exercise"
          amount={32}
          prevAmount={36}
          prevString={"last Week"}
        />
        <ActivityCard
          backgroundColor={"hsl(264, 64%, 52%)"}
          svg={socialImg}
          title="Social"
          amount={32}
          prevAmount={36}
          prevString={"last Week"}
        />
        <ActivityCard
          backgroundColor={"hsl(43, 84%, 65%)"}
          svg={selfcareImg}
          title="Self Care"
          amount={32}
          prevAmount={36}
          prevString={"last Week"}
        />
      </div>
    </div>
  );
}

export default App;
