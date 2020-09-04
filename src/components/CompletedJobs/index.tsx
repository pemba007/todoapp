import React from 'react';
import { SingleJob } from '../../globalTypes';

interface PropJobs {
	jobList: Array<SingleJob>;
}

const CompletedJobs: React.FC<PropJobs> = ({ jobList }) => {
	console.log('CompletedJobs => jobList', jobList);
	return <div></div>;
};

export default CompletedJobs;
