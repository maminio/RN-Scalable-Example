import React from 'react';
import MarketScroller from '../';

import renderer from 'react-test-renderer';

describe('Components - MarketScroller', () => {
    it('renders', () => {
        expect(renderer.create(
            <MarketScroller />
        )).toMatchSnapshot();
    });
});
