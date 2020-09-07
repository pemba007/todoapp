import React from 'react'
import IncompleteJobs from './index'
import { mount } from 'enzyme'
import { JobStatus } from '../../enums/jobStatus';
import SingleJobCard from '../SingleJobCard';

describe('Rendering', () => {

    let wrapper;

    let changeJobFunc = jest.fn(), deleteJobFunc = jest.fn(), infoJobFunc = jest.fn(), statusChangeFunc = jest.fn()

    let inCompleteJob = {
        title: "InComplete JOb",
        description: "InCompleted JOb",
        addedTime: new Date().toISOString(),
        completionTime: null,
        status: JobStatus.notDone
    }

    let jobList = [inCompleteJob, inCompleteJob]

    beforeEach(() => {
        wrapper = mount(<IncompleteJobs jobList={jobList} changeJob={changeJobFunc} deleteJob={deleteJobFunc} infoJob={infoJobFunc} statusChange={statusChangeFunc} />)
    })

    afterEach(() => {
        wrapper.unmount()
    })

    test('should render exactly 2 job', () => {
        expect(wrapper.find(SingleJobCard)).toHaveLength(2)
    })

    test('should render no job', () => {
        let newWrapper = mount(<IncompleteJobs changeJob={changeJobFunc} deleteJob={deleteJobFunc} infoJob={infoJobFunc} statusChange={statusChangeFunc} />)
        expect(newWrapper.text()).toBe("No Job Left")
        newWrapper.unmount()
    })
})
