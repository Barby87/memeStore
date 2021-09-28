import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { memesSelector } from '../../store/memes/selectors';
import { createMemeStartThunk, fetchMemesStartThunk } from '../../store/memes/thunks';
import { Button, Col, Row } from 'antd';
import styles from './MemeCreate.module.css';
import MemeCardCreate from '../../components/memeCardCreate/MemeCardCreate';
import MemeForm from '../../components/memeForm/MemeForm';
import useFormUsers from '../../hooks/useFormUsers';
import LoadingSpinner from '../../components/loadingSpinner/LoadingSpinner';
import { useHistory } from 'react-router';

const MemeCreate = () => {
    const memes = useSelector(memesSelector);
    const { isLoading } = useSelector((state) => state.memes);
    const dispatch = useDispatch();
    const { formValues, handleChange, setFormValues } = useFormUsers({
        text0: '',
        text1: '',
      });
    const [memeLimit, setMemeLimit] = useState(10);
    const history = useHistory();

    useEffect(() => {
        if(isLoading === 'iddle') 
            dispatch(fetchMemesStartThunk());
    }, [isLoading, dispatch]);

    
    const cb = () => history.push("/my-list");

    const handleCreateMeme = (id) => {
        if(formValues.text0 !== "" && formValues.text1 !== "") {
            // Se pone como argumento un callback con el history.push para que espere la respuesta de la api antes de dirigir a esa ruta
            dispatch(createMemeStartThunk({
                text0: formValues.text0,
                text1: formValues.text1,
                template_id: id,
            }, cb));
        } else {
            return
        }
        setFormValues({
            text0: "",
            text1: ""
        })
    };

    return (
        isLoading === 'loading' ? (
            <LoadingSpinner/>
        ) : (
            <div className={styles.container}>
                <h2 className={styles.title}>Bienvenido a MemeStore</h2>
                <Row type="flex" justify="center">
                    <Col span={8}>
                        <MemeForm
                            handleChangeForm={handleChange}
                            valueText0={formValues?.text0}
                            valueText1={formValues?.text1}
                        />
                    </Col>
                </Row>
                
                <Row 
                    type="flex" 
                    justify="space-around" 
                    align="center" 
                    className={styles.list_container} 
                > 
                        {memes?.slice(0, memeLimit).map((meme) => (
                                <MemeCardCreate
                                    key={meme?.id}
                                    alt={meme?.name}
                                    src={meme?.url}
                                    title={meme?.name}
                                    onClickCreate={() => handleCreateMeme(meme.id)}
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

export default MemeCreate;
