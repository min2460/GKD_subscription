import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.yek.android.kfc.activitys',
  name: '肯德基',
  groups: [
    {
      key: 0,
      name: '开屏广告',
      fastQuery: true,
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          key: 0,
          matches: '[id="com.yek.android.kfc.activitys:id/splash_tv_3"]',
          snapshotUrls: 'https://i.gkd.li/i/1776522877544', // 借用用户提供的 ID 代替链接进行记录，实际运行不依赖链接
        },
      ],
    },
    {
      key: 1,
      name: '全屏广告-弹窗广告',
      rules: [
        {
          key: 0,
          fastQuery: true,
          activityIds: 'com.yek.android.kfc.activitys.activity.HomeActivity', // 通常在首页
          matches: [
            '[id="com.yek.android.kfc.activitys:id/common_iv_close"]',
            'ViewGroup[childCount=2] > [name="android.view.View"][top<bottom][width<height]',
          ],
          snapshotUrls: [
            'https://i.gkd.li/i/1776522880277',
            'https://i.gkd.li/i/1776554311061',
          ],
        },
      ],
    },
  ],
});
