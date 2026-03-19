import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.adobe.psmobile',
  name: 'Photoshop Express',
  groups: [
    {
      key: 1,
      name: '评价提示',
      desc: '点击[不,谢谢]',
      rules: [
        {
          activityIds: '.MainActivity',
          matches: '[clickable=true][desc="不，谢谢"]',
          snapshotUrls: 'https://i.gkd.li/i/26115696',
        },
      ],
    },
  ],
});
