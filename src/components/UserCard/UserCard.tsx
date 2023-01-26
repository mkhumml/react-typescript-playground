import React, { useState } from 'react'
import styles from './UserCard.module.css';
import imageJeremy from '../../images/image-jeremy.png'

type Props = {
    timeframe: string;
    setTimeframe: Function;
}

const UserCard = ({ timeframe, setTimeframe }: Props) => {
    const [active, setActive] = useState(timeframe);

    const handleClick = (e: any) => {
        setTimeframe(e.target.innerHTML.toLowerCase());
        setActive(e.target.innerHTML.toLowerCase());
    }

    return (
        <div className={styles.UserCardContainer}>
            <div className={styles.UserContainer}>
                <img className={styles.Img} src={imageJeremy} alt="jeremy" />
                <div className={styles.HeadContainer}>
                    <h2 className={styles.Head2}>Report for</h2>
                    <h1 className={styles.Head1}>Jeremy Robson</h1>
                </div>
            </div>
            <div className={styles.ButtonContainer}>
                <button className={active === "daily" ? styles.Active : ""} onClick={(e: any) => handleClick(e)}>Daily</button>
                <button className={active === "weekly" ? styles.Active : ""} onClick={(e: any) => handleClick(e)}>Weekly</button>
                <button className={active === "monthly" ? styles.Active : ""} onClick={(e: any) => handleClick(e)}>Monthly</button>
            </div>
        </div>
    )
}

export default UserCard