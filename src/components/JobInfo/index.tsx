import React from 'react';
import { Descriptions } from 'antd';
import { SingleJob } from '../../globalTypes';
import { JobStatus } from '../../enums/jobStatus';

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

JobInfo.defaultProps = {
	job: {
		title: '',
		description: '',
		addedTime: new Date().toISOString(),
		completionTime: null,
		status: JobStatus.completed,
	},
};

export default JobInfo;
