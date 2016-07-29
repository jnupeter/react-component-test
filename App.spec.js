import React from 'react';
import TestUtils from 'react-addons-test-utils';
import expect from 'expect';
import App from './App';

describe('App component', () => {
    it('empty test should pass', () => {
        const actual = true;
        const expected = true;
        expect(actual).toEqual(expected);
    })

    it('should render properly', ()=>{
        const renderer = TestUtils.createRenderer();
        renderer.render(<App />);
        const actual = renderer.getRenderOutput().type;
        const expected = 'div';
        expect(actual).toEqual(expected);
    })
});