import { action } from '@storybook/addon-actions';

import SamplePage from './SamplePage';

import type { ComponentMeta, ComponentStoryObj } from '@storybook/react';

export default {
    title: 'Components/SamplePage',
    component: SamplePage,
    argTypes: {},
} as ComponentMeta<typeof SamplePage>;

export const SamplePageSample: ComponentStoryObj<typeof SamplePage> = {
    args: {},
};
