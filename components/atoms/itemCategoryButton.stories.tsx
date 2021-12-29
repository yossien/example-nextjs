import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport'
import { ComponentMeta, ComponentStory } from '@storybook/react'
import React from 'react'
import ItemCategoryButton from './itemCategoryButton'

export default {
  title: 'Atoms/ItemCategoryButton',
  component: ItemCategoryButton,
  parameters: {
    viewport: {
      viewports: INITIAL_VIEWPORTS,
    },
  },
} as ComponentMeta<typeof ItemCategoryButton>

const Template: ComponentStory<typeof ItemCategoryButton> = (args) => (
  <ItemCategoryButton {...args} />
)

export const Default = Template.bind({})
Default.args = {
  id: 1,
  itemCategoryName: '握り',
  isSelected: false,
}
