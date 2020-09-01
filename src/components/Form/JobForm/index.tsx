import React from "react";
import { Form, Input, Button, Checkbox } from "antd";

const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 },
};
const tailLayout = {
  wrapperCol: { offset: 2, span: 16 },
};

const JobForm: React.FC = () => {
  const onFinish = (values: any) => {
    console.log("Success:", values);
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <Form
      layout='vertical'
      name='job-form'
      //   initialValues={{ remember: true }}
      onFinish={onFinish}
    >
      <Form.Item
        label='Title'
        name='title'
        rules={[{ required: true, message: "Please input your username!" }]}
      >
        <Input />
      </Form.Item>

      <Form.Item name='description' label='Description'>
        <Input.TextArea />
      </Form.Item>
      <Form.Item {...tailLayout}>
        <Button type='primary' htmlType='submit'>
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
};

export default JobForm;
