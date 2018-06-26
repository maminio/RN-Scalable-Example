import React from 'react';
import AlbumCard from '../';

import renderer from 'react-test-renderer';

describe('Components - AlbumCard', () => {
    it('renders', () => {
        expect(renderer.create(
            <AlbumCard />
        )).toMatchSnapshot();
    });
});
