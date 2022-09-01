import '@testing-library/jest-dom';
import { BrowserRouter } from 'react-router-dom';

import { render, screen } from '@testing-library/react';

import SamplePage2 from './SamplePage2';

describe('SamplePage2コンポーネント', () => {
    test('指定したテキストが描画されている', () => {
        render(
            <BrowserRouter>
                <SamplePage2 />
            </BrowserRouter>
        );
        expect(screen.getByText('サンプルページ2です。')).toBeInTheDocument();
    });
});
