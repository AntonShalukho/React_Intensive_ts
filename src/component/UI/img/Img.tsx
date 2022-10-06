import React from 'react';
import styles from './Img.module.css';

type ImgPropsType = {
    src: string,
    alt: string,
    method: () => void
}

const Img: React.FC<ImgPropsType> = ({src, alt, method}) => {
    return (
        <img className={styles.img} onClick={method} src={src} alt={alt} />
    )
}

export default Img