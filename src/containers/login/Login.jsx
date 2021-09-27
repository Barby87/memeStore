import { Col, Row } from 'antd';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router';
import FormLogin from '../../components/formLogin/FormLogin';
import useFormUsers from '../../hooks/useFormUsers';
import { userLogin } from '../../store/login/actions';
import styles from './Login.module.css';

const Login = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  const { formValues, handleChange } = useFormUsers({
    username: '',
    password: '',
  });

  const cb = () => history.push("/meme/create");

  const handleSubmit = () => {
    // Se pone como argumento un callback con el history.push para que espere la respuesta de la api antes de dirigir a esa ruta
    dispatch(userLogin(formValues, cb));
  };
  
  return (
   <div>
      <h2 className={styles.title}>Login</h2>
      <Row type="flex" justify="center" align="middle">
          <Col span={8}>
              <FormLogin 
                onFinish={handleSubmit} 
                handleChangeForm={handleChange}
                valueEmail={formValues?.username}
                valuePassword={formValues?.password}
              />
          </Col>
      </Row>
   </div>
  );
};

export default Login;