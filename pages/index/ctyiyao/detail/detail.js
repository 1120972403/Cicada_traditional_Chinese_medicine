// pages/index/ctyiyao/detail/detail.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
  name:'',
  ctyy_id:'',
  hidden: false
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this
    that.setData({ 
      ctyy_id: options.ctyy_id
    })
    console.log(that.data)

    wx.request({
      url: 'https://zlzyy.club/API/ctyy_details.aspx',
      data: {
        ctyy_id: options.ctyy_id
      },
      success: function (res) {
        that.setData({
          navList: res.data
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