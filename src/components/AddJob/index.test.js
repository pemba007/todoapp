import React from "react";
import { shallow } from "enzyme";
import AddJob from "./index";

describe("AddJob", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<AddJob />);
  });
  test("should render without problem", () => {
    shallow(<AddJob />);
  });
});
