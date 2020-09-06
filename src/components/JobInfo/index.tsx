import React from 'react';
import { Descriptions } from 'antd';
import { SingleJob } from '../../globalTypes';

interface JobInfoInterface {
	job: SingleJob;
}

const JobInfo: React.FC<JobInfoInterface> = ({ job }) => {
	return (
		<>
			<Descriptions style={{ marginTop: '2rem' }}>
				<Descriptions.Item label='Added Time' span={6}>
					{new Date(job.addedTime).toLocaleString()}
				</Descriptions.Item>
				<Descriptions.Item label='Status'>{job.status}</Descriptions.Item>
			</Descriptions>
		</>
	);
};

export default JobInfo;
