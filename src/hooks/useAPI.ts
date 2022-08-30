import { useCallback } from 'react';

import axios from 'axios';

export type sampleType = {
    fact: string;
    length: number;
};

type useAPIType = {
    getApiSample: () => Promise<sampleType | string>;
};

const useAPI = (): useAPIType => {
    const getApiSample = useCallback(async () => {
        const apiUrl = `https://catfact.ninja/fact`;
        try {
            const response = (await axios.get(apiUrl, { timeout: 5000 })).data as sampleType;

            return response;
        } catch (error) {
            console.log(error);

            return 'error';
        }
    }, []);

    return {
        getApiSample,
    };
};

export default useAPI;
