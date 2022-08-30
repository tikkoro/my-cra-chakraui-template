import '@testing-library/jest-dom';
import { fireEvent, render, screen } from '@testing-library/react';

import Sample from './Sample';

describe('Sampleコンポーネント', () => {
    test('指定したテキストが描画されている', () => {
        render(<Sample sample="sample" />);
        expect(screen.getByText('sample')).toBeInTheDocument();
    });
});
