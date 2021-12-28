import Image from 'next/image';
import { dateFormat } from '../src/utils';
import styles from '../styles/Day.module.css'


const Day = ({date,maxTemp,minTemp,icon="ni",tempUnit}) => {

    return (
        <div className={styles.day}>
            <h3>
                {dateFormat(date)}
            </h3>
            <div className={styles.imageContainer}>
                <Image
                    src={icon}
                    alt={icon}
                    width={56}
                    height={62}
                    // layout='fill'
                />
            </div>
            <div className={styles.temperatures}>
                <span>{parseInt(maxTemp)}°{tempUnit}</span>
                <span>{parseInt(minTemp)}°{tempUnit}</span>
            </div>
        </div>
    );
}

export default Day; 