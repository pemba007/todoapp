import React, { useContext, useState } from 'react';
import { Divider, Drawer, Modal } from 'antd';
import IncompleteJobs from '../IncompleteJobs';
import CompletedJobs from '../CompletedJobs';
import { ListContext } from '../../providers/ListProvider';
import { JobStatus } from '../../enums/jobStatus';
import { SingleJob } from '../../globalTypes';
import JobForm from '../Form/JobForm';
import { setEditSingleJob, setChangedJob } from '../../utils/jobFunctions';
import JobInfo from '../JobInfo';

const JobList: React.FC = () => {
	const listContext = useContext(ListContext);

	const [showDrawer, setShowDrawer] = useState<boolean>(false);
	const [showInfoModal, setShowInfoModal] = useState<boolean>(false);
	const [jobInfo, setJobInfo] = useState<SingleJob | null>(null);

	const [initialValues, setInitialValues] = useState<SingleJob>(null);

	const completedJobs = (job: SingleJob): boolean => {
		return job.status === JobStatus.completed;
	};

	const incompleteJobs = (job: SingleJob): boolean => {
		return job.status === JobStatus.notDone;
	};

	const _handleChangeJob = (job: SingleJob) => {
		console.log('_handleChangeJob -> job', job);
		setInitialValues(job);
		setShowDrawer(true);
	};

	const _formSubmitted = (values: { title: string; description?: string }) => {
		setShowDrawer(false);
		let newJob: SingleJob = setEditSingleJob({
			title: values.title,
			description: values.description,
			job: initialValues,
		});
		let temp = [...listContext.list];
		temp.forEach((element, index) => {
			if (JSON.stringify(element) === JSON.stringify(initialValues)) {
				temp[index] = newJob;
			}
		});
		setInitialValues(newJob);
		listContext.setList(temp);
	};

	const _deleteJob = (job: SingleJob) => {
		let temp = [...listContext.list];
		let newList: Array<SingleJob> = temp.filter((element) => JSON.stringify(element) !== JSON.stringify(job));
		listContext.setList(newList);
	};

	const _infoJob = (job: SingleJob) => {
		console.log('_infoJob -> job', job);
		setJobInfo(job);
		Modal.info({
			title: job.title,
			content: <JobInfo job={job} />,
			onOk() {},
		});
	};

	const _changeStatus = (job: SingleJob) => {
		console.log('_changeStatus -> job', job);
		let temp = [...listContext.list];
		let index = temp.findIndex((element) => JSON.stringify(element) === JSON.stringify(job));
		temp[index] = setChangedJob(job);
		listContext.setList(temp);
	};

	return (
		<>
			{/* <Modal title={jobInfo ? jobInfo.title : ''} visible={showInfoModal} onOk={() => setShowInfoModal(false)}>
				<JobInfo job={jobInfo} />
			</Modal> */}
			<Drawer
				title='Create a new account'
				onClose={() => setShowDrawer(false)}
				visible={showDrawer}
				bodyStyle={{ paddingBottom: 80 }}
			>
				<JobForm handleSubmit={_formSubmitted} initialValues={initialValues} />
			</Drawer>
			<IncompleteJobs
				jobList={listContext.list.filter(incompleteJobs)}
				changeJob={_handleChangeJob}
				deleteJob={_deleteJob}
				infoJob={_infoJob}
				statusChange={_changeStatus}
			/>
			<Divider>Completed Jobs</Divider>
			<CompletedJobs
				jobList={listContext.list.filter(completedJobs)}
				changeJob={_handleChangeJob}
				deleteJob={_deleteJob}
				infoJob={_infoJob}
				statusChange={_changeStatus}
			/>
		</>
	);
};

export default JobList;
