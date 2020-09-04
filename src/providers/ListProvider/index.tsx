import React from 'react';

import { ListContextInterface } from './types';
import { SingleJob } from '../../globalTypes';

interface PropsType {
	children: React.ReactNode;
}

export const ListContext = React.createContext<ListContextInterface | null>(null);

const ListProvider: React.FC<PropsType> = ({ children }) => {
	const [jobList, setJobList] = React.useState<SingleJob[]>([]);
	const Empty: ListContextInterface = {
		list: jobList,
		setList: (jobs: Array<SingleJob>) => {
			console.log('New jobs', jobs);
			setJobList([...jobs]);
		},
	};

	return <ListContext.Provider value={Empty}>{children}</ListContext.Provider>;
};

export default ListProvider;
