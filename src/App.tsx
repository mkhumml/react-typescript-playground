import { useState } from 'react';
import styles from './App.module.css';
import UserCard from './components/UserCard/UserCard';
import ActivityCard from './components/ActivityCard/ActivityCard';
import jsonData from './data/data.json'
import { DisplaySvgArray } from './data/DisplaySvgArray';
import { PrevText } from './data/PrevText';

type Timeframes = {
  daily: { current: number, previous: number },
  weekly: { current: number, previous: number },
  monthly: { current: number, previous: number }
};

type TimeframesKey = keyof Timeframes;

type IActivityData = {
  title: string,
  timeframes: Timeframes,
}


function App() {
  // only needed when data is non static
  //const [data, setData] = useState<IActivityData[]>(() => jsonData);
  const data: IActivityData[] = jsonData;
  const [timeframe, setTimeframe] = useState<TimeframesKey>("daily");
  const [activeCard, setActiveCard] = useState<string | undefined>();


  return (
    <div className={styles.App}>
      <UserCard setTimeframe={setTimeframe} timeframe={timeframe} />
      <div className={styles.ActivityCardsContainer}>
        {data.map((item, index) =>
          <ActivityCard
            setActive={setActiveCard}
            active={activeCard}
            key={'ActivityCard-' + index}
            svg={DisplaySvgArray[index].svg}
            title={item.title}
            backgroundColor={DisplaySvgArray[index].backgroundColor}
            prevAmount={item.timeframes[timeframe].previous}
            amount={item.timeframes[timeframe].current}
            prevText={PrevText[timeframe]}
          />
        )}
      </div>
    </div >
  );
}

export default App;
