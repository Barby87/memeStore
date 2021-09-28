import React from 'react';
import { Card, Col } from 'antd';
import { EditOutlined } from '@ant-design/icons';
import styles from './MemeCardCreate.module.css';
const { Meta } = Card;

const MemeCardCreate = ({ alt, description, src, title, onClickCreate, onClickDelete }) => {
    return (
        <Col sm={24} md={8} xl={6} className={styles.card_wrapper}>
            <Card
                style={{ width: 300}}
                cover={
                    <img
                        alt={alt}
                        src={src}
                        className={styles.image}
                    />
                }
                actions={[
                    <EditOutlined key="create" onClick={onClickCreate} />,
                    // <DeleteOutlined key="delete" onClick={onClickDelete} />,
                ]}
            >
                <Meta
                    title={title}
                    description={description}
                />
            </Card>
        </Col>
    )
}

export default MemeCardCreate;