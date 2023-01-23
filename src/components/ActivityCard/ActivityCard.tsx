import React from 'react'
import styles from './ActivityCard.module.css';
import dots from '../../icon-ellipsis.svg'

type Props = {
    svg: string;
    title: string;
    amount: number;
    prevAmount: number;
    prevString: string;
    backgroundColor: string;
}

const ActivityCard = ({ svg, title, amount, prevAmount, prevString, backgroundColor }: Props) => {
    return (
        <div className={styles.ActivityCardContainer} style={{ backgroundColor: backgroundColor }}>
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
                        {prevString} - {prevAmount} hrs
                    </h2>
                </div>
            </div>
        </div>
    )
}

export default ActivityCard