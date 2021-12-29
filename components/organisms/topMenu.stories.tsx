import { ComponentMeta, ComponentStory } from '@storybook/react'
import React from 'react'
import TopMenu from './topMenu'
import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport'

export default {
  title: 'Organisms/TopMenu',
  component: TopMenu,
  parameters: {
    viewport: {
      viewports: INITIAL_VIEWPORTS,
    },
  },
} as ComponentMeta<typeof TopMenu>

const Template: ComponentStory<typeof TopMenu> = (args) => <TopMenu {...args} />

export const Default = Template.bind({})
Default.args = {}
