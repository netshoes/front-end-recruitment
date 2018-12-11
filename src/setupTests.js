import React from "react";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";
import Enzyme, { shallow, render, mount } from "enzyme";
import adapter from "enzyme-adapter-react-16";
import sinon from "sinon";

Enzyme.configure({ adapter: new adapter() });

/* Globais only for tests */
global.React = React;
global.shallow = shallow;
global.render = render;
global.mount = mount;
global.sinon = sinon;
global.Provider = Provider;
global.configureStore = configureStore;
