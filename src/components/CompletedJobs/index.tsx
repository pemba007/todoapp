import React from 'react';
import { SingleJob } from '../../globalTypes';
import { Space, Row, Col, Typography } from 'antd';
import SingleJobCard from '../SingleJobCard';
const { Title } = Typography;

interface PropJobs {
	jobList: Array<SingleJob>;
	changeJob: Function;
	deleteJob: Function;
	infoJob: Function;
	statusChange: Function;
}

const CompletedJobs: React.FC<PropJobs> = ({ jobList, changeJob, deleteJob, infoJob, statusChange }) => {
	console.log('CompletedJobs => jobList', jobList);

	return (
		<Row justify='center'>
			<Col span={6} xs={23} sm={23} md={20} lg={10}>
				<Space direction='vertical' style={{ width: '100%' }} size={20}>
					{jobList.map((job) => (
						<SingleJobCard
							job={job}
							key={job.title}
							handleJobChange={changeJob}
							deleteJob={deleteJob}
							infoJob={infoJob}
							statusChange={statusChange}
						/>
					))}
					{jobList.length === 0 ? (
						<Title level={4} style={{ textAlign: 'center' }}>
							No Job Left
						</Title>
					) : null}
				</Space>
			</Col>
		</Row>
	);
};

CompletedJobs.defaultProps = {
	jobList: [],
};

export default CompletedJobs;
