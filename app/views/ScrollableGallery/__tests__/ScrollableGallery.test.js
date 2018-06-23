import React from 'react';
import ScrollableGallery from '../';

import renderer from 'react-test-renderer';

describe('Components - ScrollableGallery', () => {
    it('renders', () => {
        expect(renderer.create(
            <ScrollableGallery />
        )).toMatchSnapshot();
    });
});
