// pages/zhongxin/liuyan/liuyan.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    stars: [0, 1, 2, 3, 4],
    normalSrc: '/img/normal.png',
    selectedSrc: '/img/selected.png',
    uid: 0

  },
  select00: function(e) {
    var that = this;
    var key = e.currentTarget.dataset.key + 1
    console.log("得分：" + key)
    that.setData({
      key: key - 1,
      key2: key
    })
  },
  pinglun: function(e) {
    //console.log("发生提交")
    var that = this
    // if (this.data.uid != 0) {
      // 测试
      console.log("用户id:" + this.data.uid + "| 得分：" + this.data.key2 + "|内容：" + e.detail.value.neirong)

      wx.request({
        url: 'https://zlzyy.club/API/get_pinglun.aspx',
        data: {
          uid: 0,
          score: this.data.key2,
          pinlun_neirong: e.detail.value.neirong
        },
        success: function(res) {
          console.log(res.data)
          wx.showToast({
            title: '提交成功',
          })
          that.setData({
            form_info: ''
          })
        }
      })
    // }
    // else{
    //   console.log("你未登录！")
    // }
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    var that = this;
    wx.getStorage({
      key: 'uid',
      success: function(res) {
        that.setData({
          uid: res.data
        })
      },
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