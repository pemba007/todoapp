import { SingleJob } from '../../globalTypes';
import { JobStatus } from '../../enums/jobStatus';

export const setNewSingleJob = ({
	title,
	description,
	completionTime,
}: {
	title: string;
	description?: string;
	completionTime?: string;
}): SingleJob => ({
	title,
	description,
	addedTime: new Date().toISOString(),
	completionTime: completionTime ? completionTime : null,
	status: JobStatus.notDone,
});

export const changeJobStatusToNotDone = (job: SingleJob): SingleJob => {
	return {
		...job,
		status: JobStatus.notDone,
	};
};

export const changeJobStatusToCompleted = (job: SingleJob): SingleJob => {
	return {
		...job,
		status: JobStatus.notDone,
	};
};

export const changeJobStatusToOnGoing = (job: SingleJob): SingleJob => {
	return {
		...job,
		status: JobStatus.notDone,
	};
};
