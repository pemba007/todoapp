import React from 'react';
import { SingleJob } from '../../globalTypes';
import { Space, Row, Col } from 'antd';
import SingleJobCard from '../SingleJobCard';

interface PropJobs {
	jobList: Array<SingleJob>;
	changeJob: Function;
	deleteJob: Function;
	infoJob: Function;
	statusChange: Function;
}
const IncompleteJobs: React.FC<PropJobs> = ({ jobList, changeJob, deleteJob, infoJob, statusChange }) => {
	console.log('IncompleteJobs => jobList', jobList);

	const _handleJobChange = (job: SingleJob) => {
		console.log('handleJobChange -> job', job);
		changeJob(job);
	};

	return (
		<div>
			<Row justify='center'>
				<Col span={6} xs={23} sm={23} md={20} lg={10}>
					<Space direction='vertical' style={{ width: '100%' }} size={20}>
						{jobList.map((job) => (
							<SingleJobCard
								job={job}
								key={job.title}
								handleJobChange={_handleJobChange}
								deleteJob={deleteJob}
								infoJob={infoJob}
								statusChange={statusChange}
							/>
						))}
					</Space>
				</Col>
			</Row>
		</div>
	);
};

export default IncompleteJobs;
