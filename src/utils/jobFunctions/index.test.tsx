import {
	setChangedJob,
	setEditSingleJob,
	setNewSingleJob,
	changeJobStatusToCompleted,
	changeJobStatusToNotDone,
	changeJobStatusToOnGoing,
} from './index';
import { JobStatus } from '../../enums/jobStatus';
import { SingleJob } from '../../globalTypes';

describe('Util JobFunctions', () => {
	let job: SingleJob = {
		title: 'hell',
		description: 'fine',
		addedTime: new Date().toISOString(),
		completionTime: null,
		status: JobStatus.completed,
	};

	test('should work setChangedJob', () => {
		let date = new Date().toISOString();
		expect(
			setChangedJob({ title: 'mike', description: 'dean', addedTime: date, status: JobStatus.completed })
		).toEqual({
			title: 'mike',
			description: 'dean',
			addedTime: date,
			status: JobStatus.notDone,
		});
		expect(
			setChangedJob({ title: 'mike', description: 'dean', addedTime: date, status: JobStatus.notDone })
		).toEqual({
			title: 'mike',
			description: 'dean',
			addedTime: date,
			status: JobStatus.completed,
		});
	});

	test('should work setEditSingleJob', () => {
		let output: SingleJob = {
			title: 'new hell',
			description: 'not fine',
			addedTime: job.addedTime,
			completionTime: job.completionTime,
			status: job.status,
		};
		expect(setEditSingleJob({ title: 'new hell', description: 'not fine', job: job })).toEqual(output);
	});

	test('should work setNewSingleJob ', () => {
		let time: string = new Date().toISOString();
		expect(
			setNewSingleJob({
				title: 'New title',
				description: 'here is description',
				completionTime: time,
			})
		).toMatchObject({
			title: 'New title',
			description: 'here is description',
			completionTime: time,
			status: JobStatus.notDone,
		});

		expect(
			setNewSingleJob({
				title: 'New title',
				description: 'here is description',
			})
		).toMatchObject({
			title: 'New title',
			description: 'here is description',
			status: JobStatus.notDone,
		});
	});

	test('should changeJobStatusToCompleted', () => {
		let testJob: SingleJob = {
			title: 'hell',
			description: 'fine',
			addedTime: job.addedTime,
			completionTime: null,
			status: JobStatus.notDone,
		};
		expect(changeJobStatusToCompleted(testJob)).toEqual(job);
	});

	test('should changeJobStatusToNotDone', () => {
		let testJob: SingleJob = {
			title: 'hell',
			description: 'fine',
			addedTime: job.addedTime,
			completionTime: null,
			status: JobStatus.notDone,
		};
		expect(changeJobStatusToNotDone(job)).toEqual(testJob);
	});

	test('should changeJobStatusToOnGoing', () => {
		let testJob: SingleJob = {
			title: 'hell',
			description: 'fine',
			addedTime: job.addedTime,
			completionTime: null,
			status: JobStatus.ongoing,
		};
		expect(changeJobStatusToOnGoing(testJob)).toEqual(testJob);
	});
});
