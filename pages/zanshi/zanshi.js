var WxParse = require('../../wxParse/wxParse.js');

Page({
  data: {
    newsList: [],
    flag: true,
    entry: '',
    winHeight: 0,
    index:0
  },
  /**
  * 折叠展开动画
  */
  onTap: function (e) {
    //取出“点的是第几个标题”
    var index = e.currentTarget.dataset.index;
    //go
    var newsList = this.data.newsList;
    var data = newsList[index];
    // this.that.flag = !this.that.flag;//toggle

    this.setData({
      flag: !this.data.flag,//toggle
      newsList: newsList,
    });
  },
  onLoad() {
    var that = this;
    wx.request({
      url: 'https://zlzyy.club/API/zanshi_list.aspx',
      success: function (res) {
        console.log(res.data),
          that.setData({
            newsList: res.data
          })
        var article = res.data[0].desc;// 这里是ajax请求数据
        WxParse.wxParse('article', 'html', article, that, 5);
        // WxParse.wxParseTemArray("replyTemArray", 'reply', replyArr.length, that)
      }
    })
  }
})