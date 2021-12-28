import styles from '../styles/Main.module.css'
import Search from './Search';
import Image from 'next/image';
import { dateFormat,dateToString } from '../src/utils';

const Main = ({temperature,image,date,location,temperatureUnit,weatherState}) => {
    console.log(date)
    return (
        <div className={styles.main}>
            <div className={styles.places}>
                <Search/>
                <div className='emplacement'/>
            </div>
            <div className={styles.images}>
                <div className={styles.bgImage}>
                    <div>
                        <Image
                            src="/Cloud-background.png"
                            alt="image"
                            layout='fill'
                            priority={true}
                        />
                    </div>
                </div>
                <Image
                        src={image}
                        alt="image"
                        height={234}
                        width={202}
                        layout='fixed'
                />
            </div>
            <div className={styles.temperature}>
                <span className="temperature-value">
                    {parseInt(temperature)}
                </span>
                <span className="temparture-unit">
                    {temperatureUnit}
                </span>
            </div>
            <div className={styles.state}>{weatherState}</div>
            <div className={styles.dates}>
                {dateFormat(date)} .  {dateToString(date)}
            </div>
            <div className={styles.location}>
                {location}
            </div>
        </div>
    );
}

export default Main;