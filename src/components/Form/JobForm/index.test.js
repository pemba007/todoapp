import React from 'react';

import { shallow, mount } from 'enzyme';
import JobForm from './index';

describe('JobForm', () => {
	test('should render without problem', () => {
		let _formSubmitted = jest.fn();
		shallow(<JobForm handleSubmit={_formSubmitted} />);
	});

	test('should submit without error', () => {
		let _formSubmitted = jest.fn();
		let formWrapper = mount(<JobForm handleSubmit={_formSubmitted} />);
		formWrapper.find('input#job-form_title').simulate('change', { target: { value: 'test' } });
		formWrapper.find('form#job-form').simulate('submit');
	});

	test('should submit without error on empty', () => {
		let _formSubmitted = jest.fn();
		let formWrapper = mount(<JobForm handleSubmit={_formSubmitted} />);

		formWrapper.find('form#job-form').simulate('submit');
		expect(formWrapper).toMatchSnapshot();
	});

	test('should submit without error all content', () => {
		let _formSubmitted = jest.fn();
		let formWrapper = mount(<JobForm handleSubmit={_formSubmitted} />);

		// Changing input values

		formWrapper.find('input#job-form_title').simulate('change', { target: { value: 'Title' } });

		expect(formWrapper.find('input#job-form_title').prop('value')).toBe('Title');

		formWrapper.find('textarea#job-form_description').simulate('change', { target: { value: 'Description' } });

		expect(formWrapper.find('textarea#job-form_description').prop('value')).toBe('Description');

		formWrapper.find('form#job-form').simulate('submit');
	});
});
