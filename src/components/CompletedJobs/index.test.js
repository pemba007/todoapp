import React from 'react'
import CompleteJobs from './index'
import { mount } from 'enzyme'
import { JobStatus } from '../../enums/jobStatus';
import SingleJobCard from '../SingleJobCard';

describe('Rendering CompleteJobs', () => {

    let wrapper;

    let changeJobFunc = jest.fn(), deleteJobFunc = jest.fn(), infoJobFunc = jest.fn(), statusChangeFunc = jest.fn()

    let completeJob = {
        title: "Complete JOb",
        description: "Completed JOb",
        addedTime: new Date().toISOString(),
        completionTime: null,
        status: JobStatus.completed
    }

    let jobList = [completeJob, completeJob]

    beforeEach(() => {
        wrapper = mount(<CompleteJobs jobList={jobList} changeJob={changeJobFunc} deleteJob={deleteJobFunc} infoJob={infoJobFunc} statusChange={statusChangeFunc} />)
    })

    afterEach(() => {
        wrapper.unmount()
    })

    test('should render exactly 2 job', () => {
        expect(wrapper.find(SingleJobCard)).toHaveLength(2)
    })

    test('should render no job', () => {
        let newWrapper = mount(<CompleteJobs changeJob={changeJobFunc} deleteJob={deleteJobFunc} infoJob={infoJobFunc} statusChange={statusChangeFunc} />)
        expect(newWrapper.text()).toBe("No Job Left")
        newWrapper.unmount()
    })
})
