// pages/yangshengkangfu/yangshengkangfu.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    winHeight: 0,
    currentTab: 0,
    mapUrl: "",
    isShow: true,
    //这是个图片地址,大致长这样“>”，略
    entry: '',
    content: [],
    ys_list:[],
    winWidth: 0,
    winHeight: 0
  
  },
  /**
    * 折叠展开动画
    */
  changeToggle() {
    var that = this;
    that.setData({
      isShow: !that.data.isShow
    })
  },
  swichNav: function (e) {
    var that = this;
    if (this.data.currentTab === e.target.dataset.current) {
      return false;
    } else {
      that.setData({
        currentTab: e.target.dataset.current
      })
    }
  },
  huadong: function (e) {
    var that = this;
    that.setData({
      currentTab: e.detail.current
    })
  },

  
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this
    //获取系统信息，手机的屏幕高度
    wx.getSystemInfo({
      success: function (res) {
        that.setData({
          winHeight: res.windowHeight,
          winWidth: res.windowWidth
        })
      },
    })
    that.setData({
      mapUrl: "http://ips.ifeng.com/video19.ifeng.com/video09/2019/05/05/p18630062-102-009-144457.mp4?vid=3c2c2e7a-1795-43bf-b66e-91bf4d9d2dac&uid=Xi90e1&from=v_Free&pver=vHTML5Player_v2.0.0&sver=&se=%E4%BD%93%E8%82%B2%E5%9B%BE%E6%96%87%E6%B1%87&cat=81-83&ptype=81&platform=pc&sourceType=h5&dt=1557038665000&gid=rc90AWr6JlvB&sign=572350dd9508596e758d133bdf017235&tm=1558974979014"
    })
    wx.request({
      url: 'https://zlzyy.club/API/tjtupian.aspx',
      success: function (res) {
        console.log(res.data),
          that.setData({
           content: res.data
          })}
    }),
      wx.request({
      url: 'https://zlzyy.club/API/ys_shiliao_list.aspx',
        success: function (res) {
          console.log(res.data),
            that.setData({
              ys_list: res.data
            })
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