import React from "react";
import { Route } from "react-router-dom";
import { shallow } from "enzyme";

import Navbar from "../components/Navbar";

import Meetups from "../components/Meetups";
import Signin from "../components/Signin";
import Signup from "../components/Signup";

describe("<Navbar /> component", () => {
  const wrapper = shallow(<Navbar />);
  test("<Router /> renders correct routes", () => {
    const pathMap = wrapper.find(Route).reduce((pathMap, route) => {
      const routeProps = route.props();
      pathMap[routeProps.path] = routeProps.component;
      return pathMap;
    }, {});

    expect(pathMap["/"]).toBe(Meetups);
    expect(pathMap["/signin/"]).toBe(Signin);
    expect(pathMap["/signup/"]).toBe(Signup);
  });
  // TODO: TEST NAVBAR TOGGLE
});
