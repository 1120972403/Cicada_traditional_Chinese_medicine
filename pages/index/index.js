//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    images: [
      '/img/1.png',
      '/img/2.jpg',
      '/img/3.jpg',
    ],
    indicatorDots: true,
    vertical: false,
    autoplay: true,
    interval: 3000,
    duration: 1200,
    mode: [{
      src: '/img/menu01.png',
      text: '中医药展史',
      url: '/pages/zanshi/zanshi'
    },
    {
      src: '/img/menu02.png',
      text: '传统医药',
      url: '/pages/index/ctyiyao/ctyiyao'
    },
    {
      src: '/img/menu03.png',
      text: '中药材图谱',
      url: '/pages/index/tupu/tupu'
    },
    {
      src: '/img/menu04.png',
      text: '中医养生康复',
      url: '/pages/yangshengkangfu/yangshengkangfu'
    },
    {
      src: '/img/menu05.png',
      text: '名老中医',
      url: '/pages/index/minglaozhongyi/minglaozhongyi'
    },
    {
      src: '/img/menu06.png',
      text: '中医药现代化',
      url: '/pages/index/xiandaihua/xiandaihua'
    }
    ],
  },
  
 
})
