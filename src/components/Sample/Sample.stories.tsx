import { action } from '@storybook/addon-actions';

import Sample from './Sample';

import type { ComponentMeta, ComponentStoryObj } from '@storybook/react';

export default {
    title: 'Components/Sample',
    component: Sample,
    argTypes: {},
} as ComponentMeta<typeof Sample>;

export const SampleSample: ComponentStoryObj<typeof Sample> = {
    args: {},
};
