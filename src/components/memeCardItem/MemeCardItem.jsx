import React from 'react';
import { Card, Col } from 'antd';
import styles from './MemeCardItem.module.css';

const { Meta } = Card;

const MemeCardItem = ({src, title}) => {
    return (
        <Col sm={24} md={8} xl={6} className={styles.card_wrapper}>
            <Card
                hoverable
                style={{ width: 300 }}
                cover={<img alt="example" src={src} />}
                className={styles.image}
            >
                <Meta title={title} />
            </Card>
        </Col>
    )
}

export default MemeCardItem
