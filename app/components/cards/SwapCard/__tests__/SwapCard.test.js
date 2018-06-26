import React from 'react';
import SwapCard from '../';

import renderer from 'react-test-renderer';

describe('Components - SwapCard', () => {
    it('renders', () => {
        expect(renderer.create(
            <SwapCard />
        )).toMatchSnapshot();
    });
});
