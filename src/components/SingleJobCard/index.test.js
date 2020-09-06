import React from 'react'
import SingleJobCard from './index'
import { sentenceCase } from './index'
import { shallow, mount } from "enzyme"
import { JobStatus } from '../../enums/jobStatus'

var handleChange = jest.fn()

var job = {
    title: "Test",
    description: "Description",
    completionTime: null,
    status: JobStatus.notDone,
    addedTime: new Date().toString()
}

var noDesc = {
    title: "Test",
    description: null,
    completionTime: null,
    status: JobStatus.notDone,
    addedTime: new Date().toString()
}

describe('SingleJobCard', () => {
    test('should sentence Case', () => {
        expect(sentenceCase("I have good hair")).toBe("I Have Good Hair")

        expect(sentenceCase("i have Good Hair")).toBe("I Have Good Hair")
    })
})

describe('rendering', () => {

    describe('Description rendering', () => {
        test('should render without description', () => {
            let wrapper = mount(<SingleJobCard job={job} handleJobChange={handleChange} />)
            expect(wrapper.find("div.ant-collapse-header").text()).toBe("Test")
            expect(wrapper.find("div.ant-collapse-content").text()).toBe("Description")
            wrapper.unmount()
        })

        test('should render with description', () => {
            let wrapper = mount(<SingleJobCard job={noDesc} handleJobChange={handleChange} />)
            expect(wrapper.find("div.ant-collapse-header").text()).toBe("Test")
            expect(wrapper.find("div.ant-collapse-content").text()).toBe("Description Missing")
            wrapper.unmount()
        })
    })
})

describe('submitting', () => {
    test('should call job change function', () => {
        let wrapper = mount(<SingleJobCard job={job} handleJobChange={handleChange} />)
        wrapper.find("div.ant-collapse-extra").at(0).simulate("click")
        // expect(handleChange).toHaveBeenCalled()
        wrapper.unmount()
    })

})
