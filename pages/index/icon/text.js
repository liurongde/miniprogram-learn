var initData = 'this is first line\nthis is second line'
var extraLine = [];
Page({
  // data: {
  //   text: initData
  // },
  // add: function (e) {
  //   extraLine.push('other line')
  //   this.setData({
  //     text: initData + '\n' + extraLine.join('\n')
  //   })
  // },
  // remove: function (e) {
  //   if (extraLine.length > 0) {
  //     extraLine.pop()
  //     this.setData({
  //       text: initData + '\n' + extraLine.join('\n')
  //     })
  //   }
  // }
//rich-text
  data: {
    nodes: [{
      name: 'div',
      attrs: {
        class: 'div_class',
        style: 'line-height: 60px; color: red;'
      },
      children: [{
        type: 'text',
        text: 'Hello&nbsp;World!'
      }]
    }]
  },
  tap() {
    console.log('tap')
  }
})