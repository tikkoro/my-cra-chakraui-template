import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { Box, Button, Text, VStack } from '@chakra-ui/react';

import useAPI from '../../hooks/useAPI';

const SamplePage2: React.FC = () => {
    const [sampleText, setSampleText] = useState('');
    const { getApiSample } = useAPI();
    const navigate = useNavigate();

    const getSampleText = async () => {
        const response = await getApiSample();
        if (typeof response === 'string') {
            setSampleText(response);
        } else {
            setSampleText(response.fact);
        }
    };

    return (
        <Box>
            <VStack>
                <Text>サンプルページ2です。</Text>
                <Button
                    colorScheme="red"
                    onClick={() => {
                        navigate(-1);
                    }}
                >
                    戻る
                </Button>
                <Button
                    colorScheme="blue"
                    onClick={() => {
                        void getSampleText();
                    }}
                >
                    API取得
                </Button>
                <Text fontSize="lg">{sampleText}</Text>
            </VStack>
        </Box>
    );
};

export default SamplePage2;
