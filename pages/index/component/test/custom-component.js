// pages/index/components/test/custom-components.js
// Page({
//
//   /**
//    * 页面的初始数据
//    */
//   data: {
//
//   },
//
//   /**
//    * 生命周期函数--监听页面加载
//    */
//   onLoad: function (options) {
//
//   },
//
//   /**
//    * 生命周期函数--监听页面初次渲染完成
//    */
//   onReady: function () {
//
//   },
//
//   /**
//    * 生命周期函数--监听页面显示
//    */
//   onShow: function () {
//
//   },
//
//   /**
//    * 生命周期函数--监听页面隐藏
//    */
//   onHide: function () {
//
//   },
//
//   /**
//    * 生命周期函数--监听页面卸载
//    */
//   onUnload: function () {
//
//   },
//
//   /**
//    * 页面相关事件处理函数--监听用户下拉动作
//    */
//   onPullDownRefresh: function () {
//
//   },
//
//   /**
//    * 页面上拉触底事件的处理函数
//    */
//   onReachBottom: function () {
//
//   },
//
//   /**
//    * 用户点击右上角分享
//    */
//   onShareAppMessage: function () {
//
//   }
// })
Component({
  methods: {
    myEventListener: function(){
      this.triggerEvent('customevent', {}) // 只会触发 pageEventListener2
      this.triggerEvent('customevent', {}, { bubbles: true }) // 会依次触发 pageEventListener2 、 pageEventListener1
      this.triggerEvent('customevent', {}, { bubbles: true, composed: true }) // 会依次触发 pageEventListener2 、 anotherEventListener 、 pageEventListener1
    }
  }
})
