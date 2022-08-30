import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';

import SamplePage from './SamplePage';

describe('SamplePageコンポーネント', () => {
    test('指定したテキストが描画されている', () => {
        render(<SamplePage />);
        expect(screen.getByText('Learn React')).toBeInTheDocument();
    });
});
