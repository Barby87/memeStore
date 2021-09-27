import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { memesSelector } from '../../store/memes/selectors';
import { fetchMemesStartThunk } from '../../store/memes/thunks';
import { Alert, Button, Col, Row } from 'antd';
import styles from './MemesList.module.css';
import LoadingSpinner from '../../components/loadingSpinner/LoadingSpinner';
import MemeCardItem from '../../components/memeCardItem/MemeCardItem';

const MemesList = () => {
    const memes = useSelector(memesSelector);
    const { isLoading } = useSelector((state) => state.memes);
    const dispatch = useDispatch();
    const [memeLimit, setMemeLimit] = useState(10);

    useEffect(() => {
        if(isLoading === 'iddle') 
            dispatch(fetchMemesStartThunk());
    }, [isLoading, dispatch]);

    return (
        isLoading === 'loading' ? (
            <LoadingSpinner/>
        ) : (
            <div className={styles.container}>
                <h2 className={styles.title}>Bienvenido a MemeStore</h2>
                <Row type="flex" justify="center">
                   <Col span={12}>
                        <Alert message="Para crear tus memes personalizados debes loguearte" type="warning" showIcon/>
                   </Col>
                </Row>
                
                <Row 
                    type="flex" 
                    justify="space-around" 
                    align="center" 
                    className={styles.list_container} 
                > 
                    {memes?.slice(0, memeLimit).map((meme) => (
                            <MemeCardItem
                                key={meme?.id}
                                alt={meme?.name}
                                src={meme?.url}
                                title={meme?.name}
                            />
                        ))
                    }
                </Row >
                <Row type="flex" justify="center">
                    <Col>
                        <Button onClick={() => setMemeLimit(memeLimit+10)} type="primary">Mostrar más</Button>
                    </Col>
                </Row>
            </div>
        )
    )
}

export default MemesList;
