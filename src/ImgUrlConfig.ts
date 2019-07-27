const rawUrlJpg = {
  '0_1': 'http://assets.kaguya-sama.top/ch_2/topc.png',
  '0_2': 'http://assets.kaguya-sama.top/ch_2/01.gif',
  '0_3': 'http://assets.kaguya-sama.top/ch_2/14.gif',
  '1_1': 'http://assets.kaguya-sama.top/ch_2/02.gif',
  '1_2': 'http://assets.kaguya-sama.top/ch_2/03.gif',
  '2_1': 'http://assets.kaguya-sama.top/ch_2/04.gif',
  '2_2': 'http://assets.kaguya-sama.top/ch_2/05.gif',
  '3_1': 'http://assets.kaguya-sama.top/ch_2/06.gif',
  '3_2': 'http://assets.kaguya-sama.top/ch_2/07.gif',
  '4_1': 'http://assets.kaguya-sama.top/ch_2/08.gif',
  '4_2': 'http://assets.kaguya-sama.top/ch_2/09.gif',
  '5_1': 'http://assets.kaguya-sama.top/ch_2/10.gif',
  '5_2': 'http://assets.kaguya-sama.top/ch_2/11.gif',
  '6_1': 'http://assets.kaguya-sama.top/ch_2/12.gif',
  '6_2': 'http://assets.kaguya-sama.top/ch_2/13.gif',
};

export const coverImgUrl = {
  cnb: 'http://assets.kaguya-sama.top/ch_2/cnb.png',
  subtit: 'http://assets.kaguya-sama.top/ch_2/subtit.png',
  subtit2: 'http://assets.kaguya-sama.top/ch_2/subtit2.png',
  tit: 'http://assets.kaguya-sama.top/ch_2/tit.png',
  butt: 'http://assets.kaguya-sama.top/ch_2/butt.png',
  butt2: 'http://assets.kaguya-sama.top/ch_2/butt2.png',
};

export const urlMapping = rawUrlJpg;
export type ImgIds = keyof typeof urlMapping;

export const ImgConfig = {
  conver: '0_1',
  first: `0_2`,
  end: `0_3`,
  pages: [
    ['1_1', '1_2'],
    ['2_1', '2_2'],
    ['3_1', '3_2'],
    ['4_1', '4_2'],
    ['5_1', '5_2'],
    ['6_1', '6_2'],
  ],
};
