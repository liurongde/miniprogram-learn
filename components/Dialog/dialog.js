// components/Dialog/dialog.js
Component({
  options:{
    multipleSlots:true   //在自定义组件选项中启用多个slot支持
  },
  /**
   * 组件的属性列表
   * 用于组件自定义设置
   */
  properties:{
  title:{
    type:String,
    value:'标题'
  },
    content:{
    type:String,
      value:'弹窗内容'
    },
    cancelText:{
    type:String,
      value:'取消'
    },
    confirmText:{
    type:String,
      value:'确定'
    }
  },
  /**
   * 私有数据，组件的初始数据
   * 可用于模板渲染
   */
  data:{
    isShow:false
  },
  methods:{
    hideDialog(){
      this.setData({
        isShow:!this.data.isShow
      })
    },
    showDialog() {
      this.setData({
        isShow:!this.data.isShow
      })
    },
    /**
     * 内部私有方法建议下划线开头
     * triggerEvent用于触发事件
     * @private
     */
    _cancelEvent(){
      this.triggerEvent("cancelEvent")
    },
    _confirmEvent(){
      this.triggerEvent("confirmEvent")
    }
  }
})