'use client'
import styles from '../styles/LowStadistics.module.css'
import lowStadistics from '../fixtures/lowStadistics.json'
import { useEffect, useState } from 'react'

export default function LowStadistics() {
    const [data, setData] = useState<
        {
            id: number;
            value: string;
            ourInfo: string;
        }[]
    >([]);

    useEffect(() => {
        setData(lowStadistics)
    }, [])

    return (
        <section className={styles.numberCounter}>
          <div className={styles.numberCounterGrid}>
            {lowStadistics.map((data) => (
            <div key={data.id} className={styles.numberCounterItem}>
              <p className={styles.numberCounterValue}>{data.value}</p>
              <p className={styles.numberCounterLabel}>{data.ourInfo}</p>
            </div>
            ))}
          </div>
        </section>
    )
}