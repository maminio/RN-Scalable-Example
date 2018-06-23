import React from 'react';
import ExchangeCard from '../';

import renderer from 'react-test-renderer';

describe('Components - ExchangeCard', () => {
    it('renders', () => {
        expect(renderer.create(
            <ExchangeCard />
        )).toMatchSnapshot();
    });
});
