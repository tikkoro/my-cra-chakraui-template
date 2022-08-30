import { memo } from 'react';
import { Route, Routes } from 'react-router-dom';

import './App.css';
import SamplePage from './pages/SamplePage/SamplePage';
import SamplePage2 from './pages/SamplePage2/SamplePage2';

const RouterConfig: React.FC = memo(() => (
    <Routes>
        <Route path="/" element={<SamplePage />} />
        <Route path="/sample" element={<SamplePage2 />} />
    </Routes>
));
export default RouterConfig;
