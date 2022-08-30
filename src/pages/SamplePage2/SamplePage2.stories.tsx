import { action } from '@storybook/addon-actions';

import SamplePage2 from './SamplePage2';

import type { ComponentMeta, ComponentStoryObj } from '@storybook/react';

export default {
    title: 'Components/SamplePage2',
    component: SamplePage2,
    argTypes: {},
} as ComponentMeta<typeof SamplePage2>;

export const SamplePage2Sample: ComponentStoryObj<typeof SamplePage2> = {
    args: {},
};
