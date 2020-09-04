import React, { useContext } from 'react';
import { Row, Col, Divider } from 'antd';
import IncompleteJobs from '../IncompleteJobs';
import CompletedJobs from '../CompletedJobs';
import { ListContext } from '../../providers/ListProvider';
import { JobStatus } from '../../enums/jobStatus';
import { SingleJob } from '../../globalTypes';

const JobList: React.FC = () => {
	const listContext = useContext(ListContext);

	const completedJobs = (job: SingleJob): boolean => {
		return job.status === JobStatus.completed;
	};

	const incompleteJobs = (job: SingleJob): boolean => {
		return job.status === JobStatus.notDone;
	};

	return (
		<>
			<IncompleteJobs jobList={listContext.list.filter(incompleteJobs)} />
			<Divider>Completed Jobs</Divider>
			<CompletedJobs jobList={listContext.list.filter(completedJobs)} />
		</>
	);
};

export default JobList;
