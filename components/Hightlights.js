import styles from '../styles/Hightlights.module.css';


const WindStatus = ({speed,directionCompass}) => {
    return(
        <div className={styles.cardContainer}>
            <h3>Wind status</h3>
            <div className={styles.numberValue}>
                <span>{parseInt(speed)}</span>mph
            </div>
            <div>
                {directionCompass}
            </div>
        </div>
        );
}

const Humidity = ({humidity}) => {
    return (
        <div className={styles.cardContainer}>
            <h3>Humidity</h3>
            <div className={styles.numberValue}>
                <span>{humidity}</span>%
            </div>
            <div className={styles.progressBar}>
                <ul>
                    <li>0</li>
                    <li>50</li>
                    <li>100</li>
                </ul>
                <progress max="100" value={humidity}/>
                <span>%</span>
            </div>

        </div>
    );
}

const Visibility = ({visibility}) => {
    return (
        <div  className={styles.cardContainer}>
            <h3>Visibility</h3>
            <div className={styles.numberValue}>
                <span>{visibility.toFixed(2)}</span>miles
            </div>
        </div>
    );
}

const AirPressure = ({airPressure = 998}) => {
    return (
        <div className={styles.cardContainer}>
            <h3>Air Pressure</h3>
            <div className={styles.numberValue}>
                <span>{airPressure}</span>mb
            </div>
        </div>
    );
}


const Hightlights = ({speed,directionCompass,humidity,visibility,airPressure}) => {
    return (
        <div className={styles.hightlights}>
            <h2>Today{"'"}s Hightlights</h2>
            <div className={styles.hightlightsContainer}>
                <WindStatus
                    speed={speed}
                    directionCompass={directionCompass}
                />
                <Humidity
                    humidity={humidity}
                />
                <Visibility
                    visibility={visibility}
                />
                <AirPressure
                    airPressure={airPressure}
                />
                
            </div>
        </div>
    );
}

export default Hightlights;