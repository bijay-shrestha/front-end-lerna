import React from 'react';
import renderer from 'react-test-renderer';
import 'jest-styled-components';

import CInputGroup from './CInputGroup';

describe('CInputGroup', () => {
    test('renders correctly', () => {
        const tree = renderer.create(<CInputGroup/>).toJSON();
        expect(tree).toMatchSnapshot();
    });
});
