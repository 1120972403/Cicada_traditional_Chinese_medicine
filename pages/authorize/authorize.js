// const app = getApp();
Page({
  data: {
ok:{},
    //判断小程序的API，回调，参数，组件等是否在当前版本可用。
    canIUse: wx.canIUse('button.open-type.getUserInfo')
  },

  //微信登陆
  bindGetUserInfo: function() {
    var openid = "";
    var uid=0;
    var name = "";
    var mytouxiang = "";
    var city = "";
    var province = ""
    wx.getUserInfo({
      success: function(res) {
        console.log(res.userInfo)
        name = res.userInfo.nickName;
        mytouxiang = res.userInfo.avatarUrl
        city = res.userInfo.city,
        province = res.userInfo.province
      }
    })
    wx.login({
      success(res) {
        var that = this;
        //console.log("res.code："+res.code)
        if (res.code) {
          wx.request({
            url: 'https://zlzyy.club/API/wxapi.asmx/OpenID',
            method: "POST",
            data: {
              code: res.code
            },
            header: {
              'content-type': 'application/x-www-form-urlencoded; charset=utf-8',
            },
            success: function(res) {
              console.log(res.data)
              openid = res.data

              wx.request({
                url: 'https://zlzyy.club/API/get_userinfo.aspx',
                data: {
                  openid: openid,
                  nickName: name,
                  avatarUrl: mytouxiang,
                  city: city,
                  province: province
                },
                success: function(res) {
                  console.log(res.data),
                  console.log(res.data[0].uid)
                  wx.setStorage({
                    key: 'uid',
                    data: res.data[0].uid,
                    success: function() {
                      wx.reLaunch({
                        url: '/pages/index/index',
                      })
                    }
                  })
                  // wx.setStorage({
                  //   key: 'uname',
                  //   data: res.data[0].nickName,
                  // })
                  // wx.setStorage({
                  //   key: 'utouxiang',
                  //   data: res.data[0].avatarUrl,
                  // })
                }
              })
            }

          })
        } else {
          console.log("未获取到code")
        }

      }
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {

  },
})