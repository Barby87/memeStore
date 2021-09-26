import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { memesSelector } from '../../store/memes/selectors';
import { fetchMemesStartThunk } from '../../store/memes/thunks';
import { Card, Col, Row } from 'antd';
import { EditOutlined, DeleteOutlined } from '@ant-design/icons';
import styles from './MemesList.module.css';
const { Meta } = Card;

const MemesList = () => {
    const memes = useSelector(memesSelector);
    const { isLoading } = useSelector((state) => state.memes);
    const dispatch = useDispatch();

    useEffect(() => {
        if(isLoading === 'iddle') 
            dispatch(fetchMemesStartThunk());
    }, [isLoading, dispatch]);

    return (
        <div>
            <h2 className={styles.title}>Bienvenido a MemeStore</h2>
            <Row 
                type="flex" 
                justify="space-around" 
                align="center" 
                className={styles.list_container} 
            > 
                    {memes?.map((meme) => (
                            <Col span={6} className={styles.card_wrapper} key={meme?.id}>
                                <Card
                                    style={{ width: 300}}
                                    cover={
                                        <img
                                            alt={meme?.name}
                                            src={meme?.url}
                                        />
                                    }
                                    actions={[
                                        <EditOutlined key="edit" />,
                                        <DeleteOutlined />,
                                    ]}
                                >
                                    <Meta
                                        title={meme?.name}
                                        description="This is the description"
                                    />
                                </Card>
                            </Col>
                        ))
                    } 
            </Row>
        </div>
    )
}

export default MemesList;
