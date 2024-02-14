import Mock from 'mockjs';
import setupMock, { successResponseWrap } from '@/utils/setup-mock';
import { PostData, GetParams } from '@/types/global';
import qs from 'query-string';

const textList = [
  {
    key: 1,
    clickNumber: '346.3w+',
    title: '经济日报：财政政策要精准提升…',
    increases: 35,
  },
  {
    key: 2,
    clickNumber: '324.2w+',
    title: '双12遇冷，消费者厌倦了电商平…',
    increases: 22,
  },
  {
    key: 3,
    clickNumber: '318.9w+',
    title: '致敬坚守战“疫”一线的社区工作…',
    increases: 9,
  },
  {
    key: 4,
    clickNumber: '257.9w+',
    title: '普高还是职高？家长们陷入选择…',
    increases: 17,
  },
  {
    key: 5,
    clickNumber: '124.2w+',
    title: '人民快评：没想到“浓眉大眼”的…',
    increases: 37,
  },
];
const imageList = [
  {
    key: 1,
    clickNumber: '15.3w+',
    title: '杨涛接替陆慷出任外交部美大司…',
    increases: 15,
  },
  {
    key: 2,
    clickNumber: '12.2w+',
    title: '图集：龙卷风袭击美国多州房屋…',
    increases: 26,
  },
  {
    key: 3,
    clickNumber: '18.9w+',
    title: '52岁大姐贴钱照顾自闭症儿童八…',
    increases: 9,
  },
  {
    key: 4,
    clickNumber: '7.9w+',
    title: '杭州一家三口公园宿营取暖中毒',
    increases: 0,
  },
  {
    key: 5,
    clickNumber: '5.2w+',
    title: '派出所副所长威胁市民？警方调…',
    increases: 4,
  },
];
const videoList = [
  {
    key: 1,
    clickNumber: '367.6w+',
    title: '这是今日10点的南京',
    increases: 5,
  },
  {
    key: 2,
    clickNumber: '352.2w+',
    title: '立陶宛不断挑衅致经济受损民众…',
    increases: 17,
  },
  {
    key: 3,
    clickNumber: '348.9w+',
    title: '韩国艺人刘在石确诊新冠',
    increases: 30,
  },
  {
    key: 4,
    clickNumber: '346.3w+',
    title: '关于北京冬奥会，文在寅表态',
    increases: 12,
  },
  {
    key: 5,
    clickNumber: '271.2w+',
    title: '95后现役军人荣立一等功',
    increases: 2,
  },
];
setupMock({
  setup() {
    Mock.mock(new RegExp('/api/popular/list'), (params: GetParams) => {
      const { type = 'text' } = qs.parseUrl(params.url).query;
      if (type === 'image') {
        return successResponseWrap([...videoList]);
      }
      if (type === 'video') {
        return successResponseWrap([...imageList]);
      }
      return successResponseWrap([...textList]);
    });

    Mock.mock(new RegExp('/api/popular-author/list'), () => {
      const generateData = () => {
        const list = new Array(7).fill(0).map((_item, index) => ({
          ranking: index + 1,
          author: Mock.mock('@ctitle(5)'),
          contentCount: Mock.mock(/[0-9]{4}/),
          clickCount: Mock.mock(/[0-9]{4}/),
        }));
        return {
          list,
        };
      };
      return successResponseWrap({
        ...generateData(),
      });
    });

    Mock.mock(new RegExp('/api/content-period-analysis'), () => {
      const getLineData = (name: string) => {
        return {
          name,
          value: new Array(12).fill(0).map(() => Mock.Random.natural(30, 90)),
        };
      };
      return successResponseWrap({
        xAxis: new Array(12).fill(0).map((_item, index) => `${index * 2}:00`),
        data: [
          getLineData('纯文本'),
          getLineData('图文类'),
          getLineData('视频类'),
        ],
      });
    });

    Mock.mock(new RegExp('/api/data-chain-growth'), (params: PostData) => {
      const { quota } = JSON.parse(params.body);
      const getLineData = () => {
        return {
          xAxis: new Array(12).fill(0).map((_item, index) => `${index + 1}日`),
          data: {
            name: quota,
            value: new Array(12)
              .fill(0)
              .map(() => Mock.Random.natural(1000, 3000)),
          },
        };
      };
      return successResponseWrap({
        count: Mock.Random.natural(1000, 3000),
        growth: Mock.Random.float(20, 100, 2, 2),
        chartData: getLineData(),
      });
    });
    // v2
    // Mock.mock(new RegExp('/api/data-overview'), () => {
    //   const generateLineData = (name: string) => {
    //     return {
    //       name,
    //       count: Mock.Random.natural(20, 2000),
    //       value: new Array(8).fill(0).map(() => Mock.Random.natural(800, 4000)),
    //     };
    //   };
    //   const xAxis = new Array(8).fill(0).map((_item, index) => {
    //     return `12.1${index}`;
    //   });
    //   return successResponseWrap({
    //     xAxis,
    //     data: [
    //       generateLineData('内容生产量'),
    //       generateLineData('内容点击量'),
    //       generateLineData('内容曝光量'),
    //       generateLineData('活跃用户数'),
    //     ],
    //   });
    // });
  },
});
