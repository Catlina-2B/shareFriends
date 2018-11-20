// pages/regist/regist.js
const app = getApp()

Page({

  /**
   * 页面的初始数据
   */
  data: {
    array: ['男', '女'],
    index: 0,
    registUserInfo: {},
    content: ''
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let app = getApp()
    new app.ToastPannel()
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

  openToastPannel: function() {
    this.show(this.data.content)
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  
  },

  bindPickerChange: function (e) {
    this.setData({
      index: e.detail.value
    })
  },

  formSubmit: function (e) {
    // console.log(e.detail.value)
    this.data.registUserInfo = e.detail.value
    const sex = 'registUserInfo.sex'
    if(this.data.registUserInfo.sex === 0){
      this.setData({
        [sex] : '男'
      })
    }
    else {
      this.setData({
        [sex] : '女'
      })
    }
    const registUserInfo = this.data.registUserInfo
    // console.log(registUserInfo)
    wx.setStorage({
      key: 'registUserInfo',
      data: registUserInfo
    })
    wx.switchTab({
      url: '../home/home',
    })
  },

  vaildUserName: function(e){
    console.log(e)
    const value = e.detail.value
    if(value != '') return true
    else {
      this.setData({
        content: '姓名不能为空'
      })
      this.openToastPannel()
      return false
    }
  },

  vaildUserNumber: function(e){
    const values = e.detail.value
    var myreg = /^(((13[0-9]{1})|(15[0-9]{1})|(18[0-9]{1})|(17[0-9]{1}))+\d{8})$/;
    if (values.length == 0) {
      this.setData({
        content: '手机号为空'
      })
      this.openToastPannel()
      return false;
    } else if (values.length < 11) {
      this.setData({
        content: '手机号长度有误！'
      })
      this.openToastPannel()
      return false;
    } else if (!myreg.test(values)) {
      this.setData({
        content: '手机号有误！'
      })
      this.openToastPannel()
      return false;
    } else {
      return true
    }

  },

  vaildVerify: function(e){
    const values = e.detail.value
    if(values != '') return true
    else {
      this.setData({
        content: '验证码不能为空'
      })
      this.openToastPannel()
      return false
    }
  }
})