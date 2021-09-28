import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { memesSelector } from '../../store/memes/selectors';
import { fetchMemesStartThunk } from '../../store/memes/thunks';
import { Alert, Button, Col, Row } from 'antd';
import styles from './MyList.module.css';
import LoadingSpinner from '../../components/loadingSpinner/LoadingSpinner';
import MemeCardItem from '../../components/memeCardItem/MemeCardItem';

const MyList = () => {
    const memes = useSelector(memesSelector);
    const myListMemes = memes.slice(100,)
    const { isLoading } = useSelector((state) => state.memes);
    const dispatch = useDispatch();
    const [memeLimit, setMemeLimit] = useState(10);
    console.log('myListMemes', myListMemes)

    useEffect(() => {
        if(isLoading === 'iddle') 
            dispatch(fetchMemesStartThunk());
    }, [isLoading, dispatch]);

    return (
        isLoading === 'loading' ? (
            <LoadingSpinner/>
        ) : (
            <div className={styles.container}>
                <h2 className={styles.title}>Mi lista de memes</h2>
                {myListMemes.length === 0 ? 
                    (<Row type="flex" justify="center">
                    <Col span={12}>
                            <Alert message="Tu lista de memes está vacía" type="warning" showIcon/>
                    </Col>
                    </Row>) : (
                        <div>
                            <Row 
                            type="flex" 
                            justify="space-around" 
                            align="center" 
                            className={styles.list_container} 
                        > 
                            {myListMemes?.slice(0, memeLimit).map((meme) => (
                                    <a target="_blank" rel="noreferrer" href={meme?.url} className={styles.link}>
                                        <MemeCardItem
                                            key={meme?.id}
                                            alt={meme?.name}
                                            src={meme?.url}
                                            title={meme?.name}
                                        />
                                    </a>
                                ))
                            }
                        </Row >
                        {myListMemes.length > 10 &&<Row type="flex" justify="center">
                            <Col>
                                <Button onClick={() => setMemeLimit(memeLimit+10)} type="primary">Mostrar más</Button>
                            </Col>
                        </Row>}
                        </div>
                        
                    )
                
                        }
            </div>
        )
    )
}

export default MyList;
