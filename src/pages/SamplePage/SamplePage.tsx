import { useNavigate } from 'react-router-dom';

import { Button } from '@chakra-ui/react';

import logo from '../../logo.svg';

import '../../App.css';

const App = () => {
    const navigate = useNavigate();

    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <p>
                    Edit <code>src/App.tsx</code> and save to reload.
                </p>
                <a
                    className="App-link"
                    href="https://reactjs.org"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Learn React
                </a>
                <Button
                    colorScheme="blue"
                    onClick={() => {
                        navigate('/sample');
                    }}
                >
                    サンプルページ2へ
                </Button>
            </header>
        </div>
    );
};

export default App;
