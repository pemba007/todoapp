import React from 'react';
import { Form, Input, Button, Checkbox } from 'antd';
import { useForm } from 'antd/lib/form/Form';
import { SingleJob } from '../../../globalTypes';

const layout = {
	labelCol: { span: 8 },
	wrapperCol: { span: 16 },
};
const tailLayout = {
	wrapperCol: { offset: 0, span: 16 },
};

const JobForm: React.FC<{ handleSubmit: Function; initialValues?: SingleJob }> = ({ handleSubmit, initialValues }) => {
	const onFinish = (values: any) => {
		console.log('Success:', values);
		form.resetFields();
		handleSubmit(values);
	};
	const [form] = useForm();

	React.useEffect(() => {
		form.resetFields();
	}, [initialValues]);

	return (
		<Form
			layout='vertical'
			name='job-form'
			onFinish={onFinish}
			form={form}
			initialValues={initialValues ? initialValues : null}
		>
			<Form.Item label='Title' name='title' rules={[{ required: true, message: 'Please input your username!' }]}>
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
