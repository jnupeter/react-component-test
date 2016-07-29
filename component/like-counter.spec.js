import React from 'react';
import expect from 'expect';
import expectJSX from 'expect-jsx';
import TestUtils from 'react-addons-test-utils';

import LikeCounter from './like-counter';
expect.extend(expectJSX);

describe('LikeCounter', ()=>{
    const renderer = TestUtils.createRenderer();
    renderer.render(<LikeCounter />);

    it('should show the like count, type should be div', ()=>{
        const actual = renderer.getRenderOutput().type;
        const expected = 'div';
        expect(actual).toEqual(expected);
    });

    it('should show the like count, className should be undefined', ()=>{
        const actual = renderer.getRenderOutput().props.className;
        const expected= undefined;
        expect(actual).toEqual(expected);
    });

    it('should contains likes', ()=>{
        const actual = renderer.getRenderOutput().props.children.includes('likes');
        const expected = true;
        expect(actual).toEqual(expected);
    });
    it('should show the count', ()=>{
        const actual = renderer.getRenderOutput();
        const expected = 'likes';
        expect(actual).toIncludeJSX(expected);
    })
});