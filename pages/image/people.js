// pages/image/people.js
var app = getApp()
Page({
  data: {
    navbar: ['全部', '精华', '分享','问答','招聘'],
    currentTab: 0
  },
  navbarTap: function(e){
    console.log(e)
    this.setData({
      currentTab: e.currentTarget.dataset.idx
    })
  }
})