import '@testing-library/jest-dom';
import { fireEvent, render, screen } from '@testing-library/react';

import SamplePage2 from './SamplePage2';

describe('SamplePage2コンポーネント', () => {
    test('指定したテキストが描画されている', () => {
        render(<SamplePage2 />);
        expect(screen.getByText('サンプルページ2です。')).toBeInTheDocument();
    });
});
