import React from 'react';
import { Button, Form, Input } from 'antd';

// import styles from './FormUser.module.css';

const FormLogin = ({
    onFinish, 
    onFinishFailed,
    handleChangeForm, 
    onChangeInput, 
    valueEmail, 
    valuePassword,
    initialValues

}) => {
    const [form] = Form.useForm();
    const layout = {
        labelCol: { span: 8 },
        wrapperCol: { span: 16 },
    };

    React.useEffect(() => {
        form.setFieldsValue({
            username: valueEmail,
            password: valuePassword
           
        });
      }, [form, valueEmail, valuePassword]);

    return (
        <div>
            <Form 
                {...layout}
                onFinish={onFinish} 
                onFinishFailed={onFinishFailed}
                form={form} 
                onFieldsChange={(values) =>
                    handleChangeForm(values[0])
                }
                initialValues={initialValues}
            >
                <Form.Item 
                    name="username"
                    onChange={onChangeInput}
                    label="Nombre de usuario" 
                    rules={[{ required: true, message:"Porfavor, ingresa tu e-mail" }]}>
                        <Input type="text" />
                </Form.Item>
                <Form.Item 
                    name="password"
                    onChange={onChangeInput} 
                    label="Contraseña" 
                    rules={[{ required: true }]}>
                        <Input.Password />
                </Form.Item>
               
                <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                    <Button type="primary" htmlType="submit">
                    Submit
                    </Button>
                </Form.Item>
            </Form>
        </div>
    )
}

export default FormLogin;
