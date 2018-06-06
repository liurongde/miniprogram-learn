//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    message:'千山鸟飞绝',
    motto: 'Hello World',
    result:'',
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    array:[{
      message:'foo'
    },{
      message:'bar'
    }]
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad: function () {
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse){
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    }
  },
  getUserInfo: function(e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  },
  clickNext:function(){
    this.setData({message:"万径人踪灭"})
  },
  onShareAppMessage: function () {
    return{
      
    }
  },
  push: function(){
    wx.request({
      url:'https://www.ixiaolian.cc/server/qsports/qsports/',
      method:'POST',
      dataType:'json',
      data:{ 
        api:{   
          api_id:1,
          cmd:'get_team_detail',
          uid:1033,
          qsvrtoken:'231775dqvA24crh32DSU5QSpMdFyFF1034',
          teamid:10994
        }
      },
      header:{
          'content-type':'application/json'
      },
      success:function(res){
        this.setData({ result: res.data.api.result})
      }
    })
  },
  photo:function(){
    wx.getImageInfo({
      src: '../utils/images/3.jpg',
      success:function(res){
        console.log(res.height)
        console.log(res.width)
      }
    }),
    wx.chooseImage({
      success: function(res) {
        // var tempFilePaths = res.tempFilePaths;
        wx.getImageInfo({
          src: res.tempFilePaths[0],
          success:function(res){
            console.log(res.height)
            console.log(res.width)
            console.log(res.path)
          }
        })
      }
    })
  }
})
