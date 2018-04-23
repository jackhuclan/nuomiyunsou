//获取应用实例
var app = getApp()
Page({
  data: {
    article: {},
  },
  onLoad: function (option) {
    console.log(option);
    var that = this
        that.setData({
          article: option.s
        })
  }
})
