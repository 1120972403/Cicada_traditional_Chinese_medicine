var WxParse = require('../../../../wxParse/wxParse.js');
Page({
 
  /**
   * 页面的初始数据
   */

  data: {
    id: "",
    detail:[],
    hidden: false


  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    var that = this
    that.setData({
      id: options.id
    })
    console.log(that.data)
    wx.request({
      url: 'https://zlzyy.club/API/ctyy_details_xianxi.aspx',
      data: {
        id: options.id
      },
      success: function(res) {
        console.log(res.data),
        that.setData({
          detail: res.data[0],
          
        })
        var article = res.data[0].shuoming;// 这里是ajax请求数据
        WxParse.wxParse('article', 'html', article, that, 5);
        setTimeout(function () {
          that.setData({
            hidden: true
          })
        }, 300)
      }
    })

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  }
})