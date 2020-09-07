import { setChangedJob, setEditSingleJob, setNewSingleJob, changeJobStatusToCompleted, changeJobStatusToNotDone, changeJobStatusToOnGoing } from './index'
import { JobStatus } from '../../enums/jobStatus'

describe('Util JobFunctions', () => {
    describe('setChangeJob', () => {
        test('should work setChangedJob', () => {
            let date = new Date().toISOString()
            expect(setChangedJob({ title: 'mike', description: "dean", addedTime: date, status: JobStatus.completed })).toMatchObject({
                title: 'mike',
                description: 'dean',
                addedTime: date,
                status: JobStatus.notDone
            })
            expect(setChangedJob({ title: 'mike', description: "dean", addedTime: date, status: JobStatus.notDone })).toMatchObject({
                title: 'mike',
                description: 'dean',
                addedTime: date,
                status: JobStatus.completed
            })
        })

    })

})
