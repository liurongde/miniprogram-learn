// Page({
//     takePhoto() {
//         const ctx = wx.createCameraContext()
//         ctx.takePhoto({
//             quality: 'high',
//             success: (res) => {
//                 this.setData({
//                     src: res.tempImagePath
//                 })
//             }
//         })
//     },
//     error(e) {
//         console.log(e.detail)
//     }
// })
Page({
  statechange(e) {
    console.log('live-player code:', e.detail.code)
  },
  error(e) {
      console.error('live-player error:', e.detail.errMsg)
  }
})