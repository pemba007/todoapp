import { JobStatus } from '../src/enums/jobStatus';

export interface SingleJob {
	title: Required<string>;
	description: string;
	addedTime: string;
	completionTime?: string;
	status: JobStatus;
}
