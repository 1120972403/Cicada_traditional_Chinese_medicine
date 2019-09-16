// pages/zixun/news.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    list:[],
    winWidth: 0,
    winHeight: 0,
    hidden: false
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this;
    //获取系统信息
    wx.getSystemInfo({
      success: function (res) {
        that.setData({
          winHeight: res.windowHeight,
          winWidth: res.windowWidth
        })
      },
    })
    wx.request({
      url: 'https://zlzyy.club/API/ys_zixun_list.aspx',
      success: function (res) {
        console.log(res.data),
        that.setData({
          list: res.data,
           hidden: false
        })
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
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})