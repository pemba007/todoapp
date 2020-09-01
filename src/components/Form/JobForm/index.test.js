import React from "react";

import { shallow, mount } from "enzyme";
import JobForm from "./index";
import { Button } from "antd";

describe("JobForm", () => {
  test("should render without problem", () => {
    shallow(<JobForm />);
  });

  test("should submit without error", () => {
    let formWrapper = mount(<JobForm />);
    formWrapper
      .find("input#job-form_title")
      .simulate("change", { target: { value: "test" } });
    formWrapper.find("form#job-form").simulate("submit");
  });

  test("should submit without error on empty", () => {
    let formWrapper = mount(<JobForm />);
    formWrapper.find("form#job-form").simulate("submit");
    expect(formWrapper).toMatchSnapshot();
  });
});
