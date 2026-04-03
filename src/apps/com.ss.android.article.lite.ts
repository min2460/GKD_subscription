import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.ss.android.article.lite',
  name: '今日头条极速版',
  groups: [
    {
      key: 1,
      name: '功能类-全自动听书续时长',
      desc: '<03:45有效,时长不足自动看广告',
      activityIds: [
        'com.ss.android.list.news.activity.AudioNewsListActivity',
        'com.ss.android.excitingvideo.ExcitingVideoActivity',
      ],
      rules: [
        {
          key: 0,
          name: '①点击看视频',
          matches: [
            '[text="剩余时长"][visibleToUser=true] + [text.substring(0,2).toInt()<3 || text.substring(3,5).toInt()<45]',
            'LinearLayout[childCount=2] + [text^="看视频领取"][clickable=true][visibleToUser=true]',
          ],
          snapshotUrls: 'https://i.gkd.li/i/26456075',
          excludeSnapshotUrls: 'https://i.gkd.li/i/26456102', // 时长溢出不予观看
          exampleUrls: 'https://e.gkd.li/dec3910f-ee59-482b-99e0-aba6de33c67c',
        },
        {
          preKeys: [0],
          name: '②领取成功x掉',
          fastQuery: true,
          matches:
            'ImageView[index=0] < @ViewGroup[childCount=1][visibleToUser=true] -n * < ViewGroup <<6 [id="android:id/content"]',
          snapshotUrls: 'https://i.gkd.li/i/26456098', // 领取成功
          excludeSnapshotUrls: 'https://i.gkd.li/i/26456099', // 倒计时未结束
          exampleUrls: 'https://e.gkd.li/720a223e-70af-455a-965c-dcf1a7228921',
        },
        {
          key: 1,
          name: '③已完成-关闭', // 接管时长溢出
          matches: [
            '[text="剩余时长"][visibleToUser=true] + [text.substring(0,2).toInt()>3 || text.substring(3,5).toInt()>45]',
            '@ImageView[clickable=true][visibleToUser=true][width<102 && height<102] + [text^="领取成功"]',
          ],
          snapshotUrls: 'https://i.gkd.li/i/26456102',
        },
      ],
    },
  ],
});
