// pages/zhongxin/geren.js
const app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    uid:0,
    utouxiang:"",
    uname:"",
    list: {},
    mode: [{
        src: '/icon/sys01.png',
        text: '我的答题',
        url: ''
      },
      // {
      //   src: '/icon/sys03.png',
      //   text: '我的收藏',
      //   url: ''
      // },
      // {
      //   src: '/icon/sys02.png',
      //   text: '帮助中心',
      //   url: '/pages/zhongxin/help/help'
      // },
      {
        src: '/icon/sys04.png',
        text: '留言反馈',
        url: '/pages/zhongxin/liuyan/liuyan'
      },
      {
        src: '/icon/guanyu_youshi.png',
        text: '关于我们',
        url: '/pages/zhongxin/guanyu/guanyu'
      }
    ],
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    var that = this;
    wx.getStorage({
      key: 'uid',
      success: function (res) {
        console.log( res.data)
        that.setData({
          uid: res.data
        })
      },
    })
    wx.getStorage({
      key: 'uname',
      success: function(res) {
        that.setData({
          uname:res.data
        })
      },
    })
    wx.getStorage({
      key: 'utouxiang',
      success: function(res) {
        utouxiang:res.data
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