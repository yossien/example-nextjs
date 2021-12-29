import { ComponentMeta, ComponentStory } from '@storybook/react'
import React from 'react'
import ItemBox from './itemBox'
import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport'

export default {
  title: 'Molecules/ItemBox',
  component: ItemBox,
  parameters: {
    viewport: {
      viewports: INITIAL_VIEWPORTS,
    },
  },
} as ComponentMeta<typeof ItemBox>

const Template: ComponentStory<typeof ItemBox> = (args) => <ItemBox {...args} />

export const Default = Template.bind({})
Default.args = {
  itemName: 'マグロ赤身握り',
  description:
    'すし屋の看板などとされているマグロのなかでも本鮪（クロマグロ類）に次ぐ高級ネタである。本鮪よりも味はほんの少し軽く、酸味も控えめだという人もいるが、残念なことに、まだ食べても両種の違いは判然としない。\n' +
    '　古今亭志ん生は「まぐろの刺身」が好きだったというが、いつも「刺身」は中トロと決めていたともいう。確かに脂ののり、マグロらしい味わいともにバランス良く楽しめる。名人が好きなのもうなずける気がする。\n' +
    '　混在する脂の上品でほんのりと甘いことや、ほどよい口溶け感、そして酸味とうま味とどれをとっても申し分がない。\n' +
    '　すし飯との相性、馴染みも抜群にいいために、握りとしての完成度も高すぎるくらいだ。',
  image: '/22081274_s.jpg',
  altText: 'マグロ赤身握り',
}
