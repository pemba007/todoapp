import React from "react";

import { shallow } from "enzyme";
import HeaderComponent from "../Header/index";

import { Typography } from "antd";

const { Title } = Typography;

describe("Header", () => {
  test("should render without problem", () => {
    shallow(<HeaderComponent />);
  });

  test("should render one title", () => {
    const wrapper = shallow(<HeaderComponent />);
    expect(wrapper.find("Title").length).toBe(1); // Has Title component
  });
});
