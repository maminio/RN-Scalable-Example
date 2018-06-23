import React from 'react';
import ExpandableCard from '../';

import renderer from 'react-test-renderer';

describe('Components - ExpandableCard', () => {
    it('renders', () => {
        expect(renderer.create(
            <ExpandableCard />
        )).toMatchSnapshot();
    });
});
