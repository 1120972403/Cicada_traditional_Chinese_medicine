// pages/yangshengkangfu/detils.js
var WxParse = require('../../wxParse/wxParse.js');
Page({

  /**
   * 页面的初始数据
   */
  data: {
    ys_list:[]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that=this;
    wx.request({
      url: 'https://zlzyy.club/API/ys_shiliao_detail.aspx',
      data:{
        id:options.id
      },
      success: function (res) {
        console.log(res.data),
          that.setData({
            ys_list: res.data
          })
        var zuofa = res.data[0].zuofa;// 这里是ajax请求数据
        WxParse.wxParse('zuofa', 'html', zuofa, that, 5);
        var cailiao = res.data[0].cailiao;
        WxParse.wxParse('cailiao', 'html', cailiao, that, 5);
        var jieshao = res.data[0].jieshao;
        WxParse.wxParse('jieshao', 'html', jieshao, that, 5);
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