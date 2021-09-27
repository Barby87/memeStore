import React from 'react';
import { Spin } from 'antd';
import styles from './LoadingSpinner.module.css';

const LoadingSpinner = () => {
    return (
        <div className={styles.spinner_container}>
            <Spin className={styles.spinner} tip="Loading..."/>
        </div>
    )
}

export default LoadingSpinner;
