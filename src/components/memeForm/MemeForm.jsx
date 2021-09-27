import React, { useEffect } from 'react';
import { Form, Input } from 'antd';

const MemeForm = ({
    handleChangeForm, 
    initialValues,
    valueText0,
    valueText1,
}) => {
    const [form] = Form.useForm();

    useEffect(() => {
        form.setFieldsValue({
            text0: valueText0,
            text1: valueText1
        });
    }, [form, valueText0, valueText1]);
    
    return (
        <Form 
            form={form} 
            onFieldsChange={(values) =>
                handleChangeForm(values[0])
            }
            initialValues={initialValues}
        >
            <Form.Item 
                name="text0" 
                label="Texto 1"
            >
                <Input />
            </Form.Item>
            <Form.Item 
                name="text1" 
                label="Texto 2"
            >
                <Input />
            </Form.Item>
        </Form>
    )
}

export default MemeForm
