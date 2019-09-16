//app.js
App({
  onLaunch: function () {
    // 展示本地存储能力
    var logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)

    // 登录
    wx.login({
      success: res => {
        // 发送 res.code 到后台换取 openId, sessionKey, unionId
      }
    })
    // 获取用户信息
    wx.getSetting({
      success: res => {
        if (res.authSetting['scope.userInfo']) {
          // 已经授权，可以直接调用 getUserInfo 获取头像昵称，不会弹框
          wx.getUserInfo({
            success: res => {
              // 可以将 res 发送给后台解码出 unionId
              this.globalData.userInfo = res.userInfo

              // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
              // 所以此处加入 callback 以防止这种情况
              if (this.userInfoReadyCallback) {
                this.userInfoReadyCallback(res)
              }
            }
          })
        }
        else{
          wx.reLaunch({
            url: '/pages/authorize/authorize',
          })
        }
      }
    })
  },
  globalData: {
    userInfo: "hello",
    urlPath: "https://www.baidu.com/",
    about: '此项目长期维护，如果有需要的可以在github自行下载，感觉还不错可以给作者star',
    openid: '',
    question: [
      { "question": "在下列选项中,不正确的赋值语句是（ ）", "option": { "A": " ++t;", "B": "n1=(n2=(n3=0));", "C": "k=i=j; ", "D": " a=b+c=1;" } },
      { "question": "表达式: 10!=9的值是（ ）", "option": { "A": "true", "B": "非零值", "C": "0", "D": "1" } },
      { "question": "C语言提供的合法的数据类型关键字是（ ）", "option": { "A": "Double", "B": "short", "C": " integer", "D": "Char" } },
      { "question": "字符(char)型数据在微机内存中的存储形式是（ ）", "option": { "A": "反码", "B": "补码", "C": "EBCDIC码", "D": "ASCII码" } },
      { "question": "C语言程序的基本单位是（ ）", "option": { "A": "程序行", "B": "语句", "C": "函数", "D": "字符" } },
      { "question": "设 int a=12,则执行完语句a+=a-=a*a后,a的值是（ ）", "option": { "A": "552", "B": "264", "C": "144", "D": "-264" } },
      { "question": "若要求在if后一对圆括号中表示a不等于0的关系,则能正确表示这一关系的表达式为______.", "option": { "A": "a<>0", "B": "!a", "C": "a=0", "D": "a" } },
      { "question": "为表示关系x≥y≥z,应使用C语言表达式______.", "option": { "A": "(x>=y)&&(y>=z)", "B": "(x>=y)AND(y>=z)", "C": "(x>=y>=z)", "D": "(x>=y) & (y>=z)" } },
      { "question": "在C语言源程序中，以下叙述正确的是（ ）", "option": { "A": "main函数必须位于文件的开头", "B": "每行只能写一条语句", "C": "程序中的一个语句可以写成多行", "D": "每个语句的最后必须有点号" } },
      { "question": "C语言中非空的基本数据类型包括________.", "option": { "A": "整型,实型,逻辑型", "B": "整型,实型,字符型", "C": "整型,字符型,逻辑型", "D": "整型,实型,逻辑型,字符型" } },
      { "question": "已知a=12,则表达式a+=a-=a*=a的结果是______.", "option": { "A": "0", "B": "144", "C": "12", "D": "-264" } },
      { "question": "若已定义int a,则表达式a=10,a+10,a++的值是__.", "option": { "A": "20", "B": "10", "C": "21", "D": "11" } },
      { "question": "若已定义x和y是整型变量,x=2;,则表达式y=2.75+x/2的值是________.", "option": { "A": "5.5", "B": "5", "C": "3", "D": "4.0" } },
      { "question": "设有以下语句：int x=10；x+=3+x%（3），则x的值是（ ）", "option": { "A": "14", "B": "15", "C": "11", "D": "12" } },
      { "question": "在C语言中，以下叙述不正确的是（ ）", "option": { "A": "在C程序中，无论是整数还是实数，都能被准确无误的表达", "B": "在C程序中，变量名代表存储器中的一个位置", "C": "静态变量的生存期与整个程序的生存期相同", "D": "C语言中变量必须先定义后引用" } },
      { "question": "C语言中的变量后只能由字母，数字和下划线三种字符组成，且第一个字符（ ）", "option": { "A": "必须为字母", "B": "必须为下划线", "C": "必须为字母或下划线", "D": "可以是字母，数字和下划线中的任意一种" } },
      { "question": "表达式5!=3的值是（ ）", "option": { "A": "T", "B": "非零值", "C": "0", "D": "1" } },
      { "question": "若有定义int a=12，n=5，则表达式a%=（n%2）运算后，a的值（ ）", "option": { "A": "0", "B": "1", "C": "12", "D": "6" } },
      { "question": "若有定义int a=12，n=5，则表达式a%=（n%2）运算后，a的值（ ）", "option": { "A": "ASCII码", "B": "原码", "C": "反码", "D": "补码" } },
      { "question": "设k=7,x=12;则下列表达式值为3的是（ ）。", "option": { "A": "x%=(k%=5)", "B": "x%=(k-k%5)", "C": "x%=k-k%5", "D": "(x%=k)-(k%=5)" } }]
  }
})