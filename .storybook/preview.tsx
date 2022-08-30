// .storybook/preview.tsx
import { ChakraProvider } from '@chakra-ui/react';
import React from 'react';
import { BrowserRouter } from 'react-router-dom';

const withChakra = (StoryFn: Function) => {
    return (
        <ChakraProvider>
            <BrowserRouter>
                <div id="story-wrapper">
                    <StoryFn />
                </div>
            </BrowserRouter>
        </ChakraProvider>
    );
};

export const decorators = [withChakra];
