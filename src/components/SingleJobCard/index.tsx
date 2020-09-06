import React from 'react';
import { SingleJob } from '../../globalTypes';
import { Card, Collapse, Typography, Tooltip, Space, Popconfirm } from 'antd';
import { SwapOutlined, EditOutlined, DeleteOutlined, CheckCircleOutlined, InfoCircleOutlined } from '@ant-design/icons';
import { JobStatus } from '../../enums/jobStatus';

const { Panel } = Collapse;
const { Text } = Typography;

interface SingleJobCardInterface {
	job: SingleJob;
	handleJobChange: Function;
	deleteJob: Function;
	infoJob: Function;
	statusChange: Function;
}

export const sentenceCase = (str: string): string => {
	if (str === null || str === '') return '';
	else str = str.toString();

	return str.replace(/\w\S*/g, function (txt) {
		return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
	});
};

const SingleJobCard: React.FC<SingleJobCardInterface> = ({
	job,
	handleJobChange,
	deleteJob,
	infoJob,
	statusChange,
}) => {
	const _confirmDelete = () => {
		deleteJob(job);
	};

	const genExtra = (): React.ReactNode => (
		<>
			<Space size={15}>
				<Tooltip
					title={job.status === JobStatus.completed ? 'Incomplete Job' : 'Complete Job'}
					color={job.status === JobStatus.completed ? 'red' : 'green'}
				>
					{job.status === JobStatus.completed ? (
						<SwapOutlined
							onClick={(event: React.MouseEvent) => {
								event.stopPropagation();
								statusChange(job);
							}}
						/>
					) : (
						<CheckCircleOutlined
							onClick={(event: React.MouseEvent) => {
								event.stopPropagation();
								statusChange(job);
							}}
						/>
					)}
				</Tooltip>
				<Tooltip title='Information'>
					<InfoCircleOutlined
						onClick={(event: React.MouseEvent) => {
							event.stopPropagation();
							console.log('Information clicked');
							infoJob(job);
						}}
					/>
				</Tooltip>

				<Popconfirm
					title='Are you sure to delete this task?'
					onConfirm={_confirmDelete}
					okText='Yes'
					cancelText='No'
				>
					<Tooltip title='Delete job' color='red'>
						<DeleteOutlined
							onClick={(event: React.MouseEvent) => {
								event.stopPropagation();
							}}
						/>
					</Tooltip>
				</Popconfirm>
				<Tooltip title='Edit job'>
					<EditOutlined
						onClick={(event: React.MouseEvent) => {
							event.stopPropagation();
							console.log('Edit clicked');
							handleJobChange(job);
						}}
					/>
				</Tooltip>
			</Space>
		</>
	);

	return (
		<Card style={{ width: '100%' }} bodyStyle={{ padding: 0 }}>
			<Collapse defaultActiveKey={['1']} ghost>
				<Panel header={sentenceCase(job.title)} key='1' showArrow={false} extra={genExtra()}>
					{job.description ? (
						<p>{sentenceCase(job.description)}</p>
					) : (
						<Text type='danger'>Description Missing</Text>
					)}
				</Panel>
			</Collapse>
		</Card>
	);
};

export default SingleJobCard;
