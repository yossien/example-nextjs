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
  itemCategoryList: [
    {
      id: 1,
      name: '巻き寿司',
      orderNo: 1,
    },
    {
      id: 2,
      name: '握り',
      orderNo: 2,
    },
  ],
  itemList: [
    {
      id: 1,
      name: '海鮮太巻き',
      description: 'some text',
      imagePath: '/2172972_s.jpg',
      categoryId: 1,
    },
    {
      id: 2,
      name: 'かっぱ巻き',
      description:
        '岩手県に「 遠野とうの」と言うきゅうりの名産地があります。\nここには昔からかっぱが住んでいると言われていました。\n\nかっぱは、川や池に住んでいるため、常に体が湿った状態です。\nそのため、陸に上がると皮膚が乾燥して、頭頂部のお皿が割れて力を失ったり体温が上昇してしまう為きゅうりを体中に巻き付けていたと言われています。\n(冬野菜は体を温め、きゅうりなどの夏野菜は体を冷やす効果があります)\n\nかっぱが、きゅうりを体に巻いていたことから、きゅうり巻きを「かっぱ巻き」と呼ばれるようになったようです。\n\n余談ですが、きゅうりの断面を見るとかっぱの頭(お皿)のように見えますよね。\n',
      imagePath: '/4910466_s.jpg',
      categoryId: 1,
    },
    {
      id: 3,
      name: 'いか握り',
      description: 'some text',
      imagePath: '/22081156_s.jpg',
      categoryId: 2,
    },
    {
      id: 4,
      name: 'マグロ赤身握り',
      description:
        'すし屋の看板などとされているマグロのなかでも本鮪（クロマグロ類）に次ぐ高級ネタである。本鮪よりも味はほんの少し軽く、酸味も控えめだという人もいるが、残念なことに、まだ食べても両種の違いは判然としない。\n古今亭志ん生は「まぐろの刺身」が好きだったというが、いつも「刺身」は中トロと決めていたともいう。確かに脂ののり、マグロらしい味わいともにバランス良く楽しめる。名人が好きなのもうなずける気がする。\n混在する脂の上品でほんのりと甘いことや、ほどよい口溶け感、そして酸味とうま味とどれをとっても申し分がない。\nすし飯との相性、馴染みも抜群にいいために、握りとしての完成度も高すぎるくらいだ。\n',
      imagePath: '/22081274_s.jpg',
      categoryId: 2,
    },
  ],
}
