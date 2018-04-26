var app = getApp()

Page({
  data: {
    userInfo: {},
    isFail:false,
    hotList: [{ id: 1, content: "南方有乔木" }, { id: 2, content: "狱锁狂龙" }, { id: 3, content: "凤求凰" }, { id: 4, content: "西游记" }, { id: 5, content: "两只蝴蝶" }, { id: 6, content: "情人" }, { id: 7, content: "教父" }, { id: 8, content: "终结者" },],
    recommendList: [],
    userName:'',
  },
  //事件处理函数
  onLoad: function () {
    var that = this
    app.getUserInfo(function (userInfo) {
      that.setData({
        userInfo: userInfo
      })
    });
    /**
    wx.request({
      url: app.globalData.appHost + '/skydriveinterface',
      data: { isFresh: "yes" },
      method: 'GET',
      success: function (res) {
          that.setData({
            recommendList: res.data.List
          })
      },
      fail:function(res){
         that.setData({
           isFail:true
         })
         console.log(res.errMsg);
      }
    });
    **/
  },
  userNameInput: function (e) {
    this.setData({
      userName: e.detail.value
    })
  },
  getDetail: function (e) {
    wx.navigateTo({
      url: '../detail/detail?s=' + e.currentTarget.dataset.id
    })
  },
  focusHandler: function (e) {
    wx.navigateTo({
      url: '../search/search'
    })
  },
  excuteSearch: function (e) {
    if (this.data.userName==""){
      wx.showToast({
        title: '请先输入关键字',
        icon: 'loading',
        duration: 1000
      });return;
    }
    wx.navigateTo({
      url: '../search/search?q=' + this.data.userName
    })
  },
  excuteHotSearch:function(e){
     var sub= e.currentTarget.dataset.sub;
     var content=this.data.hotList[sub].content;
     wx.navigateTo({
      url: '../search/search?q='+ content
    })
  },
  onShareAppMessage: function () {
    return {
      title: '网盘搜索',
      desc: '放松，愉快并便捷的了解到一些常见疾病地相关知识，做好日常预防，有助于我们健康，快乐的成长。',
      path: '/page/index/index'
    }
  }
})
