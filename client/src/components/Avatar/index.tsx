import Image from 'next/image'
import styles from './styles.module.css'
export const Avatar = ({ imgUrl }: {
    imgUrl?: string
}) => {
    return (
        <div className={styles.index}>
            {
                imgUrl ? <Image src={imgUrl} alt="Avatar Image" className={styles.image} /> : <div className={styles.background}></div>
            }
        </div>
    )
}