import { Col, Row } from 'antd';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router';
import FormLogin from '../../components/privateRoute/formLogin/FormLogin';
import useFormUsers from '../../hooks/useFormUsers';
import { userLogin } from '../../store/login/actions';

const Login = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  const { formValues, handleChange } = useFormUsers({
    username: '',
    password: '',
});

console.log('formValues', formValues);
  const cb = () => history.push("/memes-list");

  const handleSubmit = () => {
    // Se pone como argumento un callback con el history.push para que espere la respuesta de la api antes de dirigir a esa ruta
    dispatch(userLogin(formValues, cb));
  };
  
  return (
    <Row type="flex" justify="center" align="middle">
        <Col>
            <FormLogin 
              onFinish={handleSubmit} 
              handleChangeForm={handleChange}
              onChangeInput={handleChange}
              valueEmail={formValues?.username}
              valuePassword={formValues?.password}
            />
        </Col>
    </Row>
  );
};

export default Login;