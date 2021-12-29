import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport'
import { ComponentMeta, ComponentStory } from '@storybook/react'
import React from 'react'
import ItemCategorySelector from './itemCategorySelector'

export default {
  title: 'Molecules/ItemCategorySelector',
  component: ItemCategorySelector,
  parameters: {
    viewport: {
      viewports: INITIAL_VIEWPORTS,
    },
  },
} as ComponentMeta<typeof ItemCategorySelector>

const Template: ComponentStory<typeof ItemCategorySelector> = (args) => (
  <ItemCategorySelector {...args} />
)

export const Default = Template.bind({})
Default.args = {
  itemCategoryList: [
    {
      id: 1,
      name: '握り',
      orderNo: 1,
    },
    {
      id: 2,
      name: '巻き寿司',
      orderNo: 2,
    },
    {
      id: 3,
      name: 'セットメニュー',
      orderNo: 3,
    },
  ],
}
