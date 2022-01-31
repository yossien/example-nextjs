import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport'
import { ComponentMeta, ComponentStory } from '@storybook/react'
import MultipleSelectorTest from './multipleSelectorTest'
import React from 'react'

export default {
  title: 'Organisms/MultipleSelectorTest',
  component: MultipleSelectorTest,
  parameters: {
    viewport: {
      viewports: INITIAL_VIEWPORTS,
    },
  },
} as ComponentMeta<typeof MultipleSelectorTest>

const Template: ComponentStory<typeof MultipleSelectorTest> = (args) => (
  <MultipleSelectorTest {...args} />
)
export const Default = Template.bind({})

Default.args = {
  itemListA: [
    {
      id: 1,
      name: 'タイプA-1',
      itemBid: 1
    },
    {
      id: 2,
      name: 'タイプA-2',
      itemBid: 2
    },
    {
      id: 3,
      name: 'タイプA-3',
      itemBid: 3
    },
  ],
  itemListB: [
    {
      id: 1,
      name: 'タイプB-1',
    },
    {
      id: 2,
      name: 'タイプB-2',
    },
    {
      id: 3,
      name: 'タイプB-3',
    },
  ],
}
