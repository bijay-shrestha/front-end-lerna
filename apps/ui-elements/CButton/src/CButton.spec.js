import React from 'react';
import renderer from 'react-test-renderer';
import 'jest-styled-components';

import CButton from './CButton';

describe('CButton', () => {
    test('renders correctly', () => {
        const tree = renderer.create(<CButton>{'Test'}</CButton>).toJSON();
        expect(tree).toMatchSnapshot();
    });
});