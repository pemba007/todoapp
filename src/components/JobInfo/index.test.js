import React from 'react'
import JobInfo from './index'
import { shallow } from 'enzyme'
import { JobStatus } from '../../enums/jobStatus'

describe('JobInfo', () => {

    let singleJob = {
        title: "Hello",
        description: "Testing",
        addedTime: new Date().toISOString(),
        completionTime: null,
        status: JobStatus.completed
    }

    test('should render', () => {
        let wrapper = shallow(<JobInfo job={singleJob} />)
    })

    test('should render default props', () => {
        let wrapper = shallow(<JobInfo />)
    })
})
