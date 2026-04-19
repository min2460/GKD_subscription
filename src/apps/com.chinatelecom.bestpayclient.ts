import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.chinatelecom.bestpayclient',
  name: '翼支付',
  groups: [
    {
      key: 1,
      name: '全屏广告-弹窗广告',
      rules: [
        {
          key: 0,
          fastQuery: true,
          matches: '[id="com.chinatelecom.bestpayclient:id/iv_dialog_close_one"]',
          snapshotUrls: [
            'https://i.gkd.li/i/1776550915752',
            'https://i.gkd.li/i/1776550942374',
            'https://i.gkd.li/i/1776550987531',
          ],
        },
      ],
    },
  ],
});
