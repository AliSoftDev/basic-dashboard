import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import { shallow } from 'enzyme';
import App from '../App';
import Header from '../PhotoViewer/Header';
import BurgerMenu from '../PhotoViewer/BurgerMenu';



let wrapped;

beforeEach(() => {
    wrapped = shallow(<App />)
})

it('should show a Header component', () => {
    expect(wrapped.find(Header).length).toEqual(1);
});

it('should show a BrowserRouter component', () => {
    expect(wrapped.find(BrowserRouter).length).toEqual(1);
});

it('should show a Router component', () => {
    expect(wrapped.find(Route).length).toEqual(3);
});

it('should show a BurgerMenu component', () => {
    expect(wrapped.find(BurgerMenu).length).toEqual(1);
});