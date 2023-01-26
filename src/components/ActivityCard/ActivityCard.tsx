import { useState } from 'react';
import styles from './ActivityCard.module.css';
import dots from '../../images/icon-ellipsis.svg'

type ActivityCardProps = {
    svg: string;
    title: string;
    amount: number;
    prevAmount: number;
    prevText: string;
    backgroundColor: string;
    active: string | undefined;
    setActive: Function;
}

const ActivityCard = ({ svg, title, amount, prevAmount, prevText, backgroundColor, active, setActive }: ActivityCardProps) => {

    return (
        <div onClick={() => setActive(title)} className={`${styles.ActivityCardContainer} ${active === title ? styles.Active : ''}`} style={{ backgroundColor: backgroundColor }}>
            <div className={styles.ActivityCardImgContainer}>
                <img className={styles.ActivityCardImg} src={svg} alt="work" />
            </div>
            <div className={styles.ActivityContainer}>
                <div className={styles.ActivityContainerHeadRow}>
                    <h5 className={styles.Head5}>{title}</h5>
                    <img src={dots} alt={title} />
                </div>
                <div className={styles.AmountHeader}>
                    <h4 className={styles.Head4}>
                        {amount} hrs
                    </h4>
                    <h2 className={styles.Head2}>
                        {prevText} - {prevAmount} hrs
                    </h2>
                </div>
            </div>
        </div>
    )
}

export default ActivityCard