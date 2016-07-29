import React from 'react';
import expect from 'expect';
import TestUtils from 'react-addons-test-utils';
import Icon from './Icon';

describe('Icon Component', ()=>{
    it('should render properly', ()=>{
        const renderer = TestUtils.createRenderer();
        renderer.render(<Icon name='facebook'></Icon>);

        let actual = renderer.getRenderOutput().type;
        let expected = 'span';
        expect(actual).toEqual(expected);

        actual = renderer.getRenderOutput().props.className;
        expected = 'fa fa-facebook';
        expect(actual).toEqual(expected);
    })
});