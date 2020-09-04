import React, { useState, useContext } from 'react';
import { Button, Drawer } from 'antd';
import { PlusOutlined } from '@ant-design/icons';

import JobForm from '../Form/JobForm';
import { ListContext } from '../../providers/ListProvider';
import { setNewSingleJob } from '../../utils/jobFunctions/index';
import { SingleJob } from '../../globalTypes';

interface FormInterface {
	title: string;
	description: string;
}

const AddJob: React.FC = () => {
	const listData = useContext(ListContext);

	const [showAddModal, setShowAddModal] = useState<boolean>(false);

	const _formSubmitted = ({ title, description }: FormInterface): void => {
		setShowAddModal(false);
		const newJob = setNewSingleJob({ title: title, description: description });
		let newList: Array<SingleJob> = [...listData.list];
		newList.push(newJob);
		listData.setList(newList);
	};

	return (
		<div
			style={{
				marginTop: '2rem',
			}}
		>
			<Button type='primary' onClick={() => setShowAddModal(true)} size='large'>
				<PlusOutlined /> Add Job
			</Button>
			<Drawer
				title='Adding new job'
				width={720}
				onClose={() => setShowAddModal(false)}
				visible={showAddModal}
				bodyStyle={{ paddingBottom: 80 }}
			>
				<JobForm handleSubmit={_formSubmitted} />
			</Drawer>
		</div>
	);
};

export default AddJob;
