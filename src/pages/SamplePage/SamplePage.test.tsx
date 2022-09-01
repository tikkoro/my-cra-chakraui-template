import '@testing-library/jest-dom';
import { BrowserRouter } from 'react-router-dom';

import { render, screen } from '@testing-library/react';

import SamplePage from './SamplePage';

describe('SamplePageコンポーネント', () => {
    test('指定したテキストが描画されている', () => {
        render(
            <BrowserRouter>
                <SamplePage />
            </BrowserRouter>
        );
        expect(screen.getByText('Learn React')).toBeInTheDocument();
    });
});
