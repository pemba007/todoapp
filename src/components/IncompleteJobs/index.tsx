import React from 'react';
import { SingleJob } from '../../globalTypes';

interface PropJobs {
	jobList: Array<SingleJob>;
}
const IncompleteJobs: React.FC<PropJobs> = ({ jobList }) => {
	console.log('IncompleteJobs => jobList', jobList);

	return <div></div>;
};

export default IncompleteJobs;
