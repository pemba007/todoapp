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

export const setChangedJob = (job: SingleJob): SingleJob => {
	return {
		title: job.title,
		description: job.description,
		completionTime: job.completionTime,
		status: job.status === JobStatus.completed ? JobStatus.notDone : JobStatus.completed,
		addedTime: job.addedTime,
	};
};

export const setEditSingleJob = ({
	title,
	description,
	job,
}: {
	title: string;
	description: string;
	job: SingleJob;
}): SingleJob => ({
	title: title,
	description: description,
	status: job.status,
	addedTime: job.addedTime,
	completionTime: job.completionTime ? job.completionTime : null,
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
		status: JobStatus.completed,
	};
};

export const changeJobStatusToOnGoing = (job: SingleJob): SingleJob => {
	return {
		...job,
		status: JobStatus.ongoing,
	};
};
