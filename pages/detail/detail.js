//获取应用实例
var app = getApp()
Page({
  data: {
    article: {},
    url: 'url'
  },
  onLoad: function (option) {
    var that = this
        that.setData({
          article: option.s
        })
  },
  show(e) {
    let that = this
    wx.setClipboardData({
      data: e.target.id,
      success() {
        that.setData({
          url: 'url2'
        })
        wx.showToast({
          title: '复制成功',
          icon: 'success',
          duration: 2000
        })  
      }
    })
    wx.getClipboardData({
      success(res) {
        console.log(res.data)
      }
    })
  }
})
