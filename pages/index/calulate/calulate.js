// pages/index/calulate/calulate.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    id1: 'clear',
    id2: 'back',
    id3: '÷',
    id4: '×',
    id5: '7',
    id6: '8',
    id7: '9',
    id8: '-',
    id9: '4',
    id10: '5',
    id11: '6',
    id12: '+',
    id13: '1',
    id14: '2',
    id15: '3',
    id16: '%',
    id17: '0',
    id18: '.',
    id19: '=',
    screenData: '0',
    firInput: '',
    symbol: '', //加减乘除等于
    last: '',
    status: 0,  //计算符后输入0，不可以继续输入数字，0-可输入，1-不可输入
    isNum: 1,     //0-非数字，1数字
    isError: 0     //0-无异常，1-报错，可删除，2-删除无效，只能清空
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let a = '';
    let bg = a + '1';
    console.log('bbbbbb:', bg);
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

  },
  clickBtn: function (event) {
    let id = event.target.id;
    let firInput = this.data.firInput;
    let symbol = this.data.symbol;
    let last = this.data.last;
    let isNum = this.data.isNum;
    let data = this.data.screenData;
    let status = this.data.status;
    let isError = this.data.isError;
    if (id == this.data.id1) {
      //清屏
      data = 0;
      this.setData({symbol: '', last: '', firInput: '', status: 0, isNum: 1, isError: 0})
    } else if (id == this.data.id2) {
      //回退
      deleteInput(this);
    } else if (id == this.data.id16) {
      //本次输入为百分号
      if (isNum == 1) {
        if (last != '') {
          last = parseFloat(last / 100);
          data = firInput + symbol + last;
          this.setData({last: last})
        } else if (firInput != '') {
          firInput = parseFloat(firInput / 100);
          data = firInput;
          this.setData({firInput: firInput})
        }
      }
    } else if (id == this.data.id3 || id == this.data.id4 || id == this.data.id8 || id == this.data.id12 || id == this.data.id19) {
      //本次输入为计算符
      calulateInput(this);
    } else {
      numInput(this);
    }

    function deleteInput(that) {
      if (data === 0) {
        return;
      }
      if (isNum == 0) {
        if (symbol == that.data.id19) {
          return;
        }
        data = firInput;
        that.setData({symbol: '', isNum: 1});
      } else {
        if (last == '') {
          firInput = firInput.substring(0, firInput.length - 1);
          if (firInput == '') {
            data = 0;
            that.setData({symbol: '', last: '', firInput: '', status: 0, isNum: 1})
          } else {
            data = firInput;
            that.setData({firInput: firInput})
          }
        } else {
          last = last.substring(0, last.length - 1);
          data = firInput + symbol + last;
          that.setData({last: last})
        }
      }
    }

    function calulateInput(that) {
      if (firInput == '' || firInput == '.') {
        firInput = 0;
      }
      if (last !== '') {
        if (isError != 0) {
          // this.set({data:'除数不能为0'})
          return;
        }
        if(last =='.'){
          last =0;
        }
        //上一次输入是数字
        if (symbol == that.data.id3) {
          if (parseFloat(last) == 0) {
            data = '除数不能为0';
            isError = 1;
            that.setData({isError: 1})
            if (id == that.data.id19) {
              isError = 2;
              that.setData({isError: 2})
            }
          } else {
            data = parseFloat(firInput) / parseFloat(last);
          }

        } else if (symbol == that.data.id4) {
          data = parseFloat(firInput) * parseFloat(last)
        } else if (symbol == that.data.id8) {
          data = parseFloat(firInput) - parseFloat(last)
        } else if (symbol == that.data.id12) {
          data = parseFloat(firInput) + parseFloat(last)
        } else if (id == that.data.id19) {
          that.setData({symbol: '', last: '', firInput: '', isNum: 1, status})
        }
        if (isError == 0) {
          that.setData({firInput: data, last: '', symbol: id, isNum: 0, status: 0})
          if (id != that.data.id19) {
            data = data + id;
          }
        }
      } else if (id == that.data.id19) {
        data = parseFloat(firInput);
        that.setData({isNum: 1});
      } else {
        that.setData({symbol: id, isNum: 0})
        data = firInput + id;
      }
    }

    function numInput(that) {
      if (status == "1" && id != that.data.id18 || isError != 0) {
        return;
      } else {
        that.setData({status: '0'})
      }
      //本次输入为数字
      if (isNum == 0 && symbol == that.data.id19) {
        data = id;
        that.setData({symbol: '', firInput: id, last: '', isNum: 1})
      } else if (isNum == 0 && id == that.data.id17) {
        if (last == '') {
          data = firInput + symbol + id;
          that.setData({last: id, status: '1'});
        }
        // this.setData({status: '1'});
      } else {
        let firInput1 = '';
        if (last != '') {
          if (id == that.data.id18) {
            let i = last.indexOf('.');
            if (i != -1) {
              return;
            }
          }
          let last1 = last + id;
          that.setData({last: last1, isNum: 1});
          data = firInput + symbol + last1;
        } else if (isNum == 0) {
          let last1 = id;
          data = firInput + symbol + id;
          that.setData({last: last1, isNum: 1})
        } else {
          if (id == that.data.id18) {
            let i = firInput.indexOf('.');
            if (i != -1) {
              return;
            }
          }
          if (firInput == 0 && id != that.data.id18 && firInput.length == 1) {
            firInput1 = id;
          } else {
            firInput1 = firInput + id;
          }
          // let firInput1 = firInput + id;
          that.setData({firInput: firInput1, isNum: 1});
          data = firInput1;
        }
      }
    }
    this.setData({screenData: data})
  }
})