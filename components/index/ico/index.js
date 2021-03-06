// components/index/ico/index.js
Component({
  /**
   * 组件的属性列表
   * 固定属性可以写在这里
   */
  properties: {
    icoImg: { // 属性名
      type: Array, // 类型（必填），目前接受的类型包括：String, Number, Boolean, Object, Array, null（表示任意类型）
      value: ["http://29367.s81i.faiusr.com/4/103/AFEIt_UBEAQYACDh7I-bBSiGsZmVBTBaOFpAZw.png", "螺栓","http://29367.s81i.faiusr.com/4/103/AFEIt_UBEAQYACDj7I-bBSiVrvvxBDBaOFpAZw.png","螺母",
        "http://29367.s81i.faiusr.com/4/103/AFEIt_UBEAQYACDl7I-bBSiM88f2BjBaOFpAZw.png", "冷镦件", "http://img.weiye.me/zcimgdir/album/file_58ecf03b090e8.png","关于"], // 属性初始值（可选），如果未指定则会根据类型选择一个
      observer: function (newVal, oldVal, changedPath) {
        // 属性被改变时执行的函数（可选），也可以写成在methods段中定义的方法名字符串, 如：'_propertyChange'
        // 通常 newVal 就是新设置的数据， oldVal 是旧数据
      }
    }
  },

  /**
   * 组件的初始数据
   * 后台数据，可用于模板渲染
   */
  data: {
    imgUrls: [
      'http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg',
      'http://img06.tooopen.com/images/20160818/tooopen_sy_175866434296.jpg',
      'http://img06.tooopen.com/images/20160818/tooopen_sy_175833047715.jpg'
    ],
    indicatorDots: false,
    autoplay: false,
    interval: 5000,
    duration: 1000
  },

  /**
   * 组件的方法列表
   */
  methods: {

  }
})


