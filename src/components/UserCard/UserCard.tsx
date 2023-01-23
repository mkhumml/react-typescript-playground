import React from 'react'
import styles from './UserCard.module.css';
import imageJeremy from '../../image-jeremy.png'

type Props = {
    period: string;
    setPeriod: Function;
}

const UserCard = ({ period, setPeriod }: Props) => {
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
                <button onClick={(e: any) => setPeriod(e.target.innerHTML)}>Daily</button>
                <button onClick={(e: any) => setPeriod(e.target.innerHTML)}>Weekly</button>
                <button onClick={(e: any) => setPeriod(e.target.innerHTML)}>Monthly</button>
            </div>
        </div>
    )
}

export default UserCard