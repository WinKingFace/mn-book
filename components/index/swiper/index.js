// components/index/swiper/index.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {

  },

  /**
   * 组件的初始数据
   */
  data: {
    imgUrls: [
      'http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg',
      'http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg',
      'http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg'
    ],
    indicatorDots: false,
    autoplay: true,
    interval: 4000,
    duration: 800,
    swiperCurrent: 0,
  },

  /**
   * 组件的方法列表
   */
  methods: {
    swiperChange(e) {
      let current = e.detail.current;
      // console.log(current, '轮播图')
      let that = this;
      that.setData({
        swiperCurrent: current,
      })
    },
  }
})