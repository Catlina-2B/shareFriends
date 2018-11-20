// pages/friendInformation/friendInformation.js
var service = require("../../utils/data.js")
Page({

  /**
   * 页面的初始数据
   */
  data: {
    active: 0,
    userinfo: {
      nickName: '霸霸',
      userid: '123',
      vip: '1',
      level: '13',
      personHeadImg: 'http://catlina.bestyaoyao.com/images/242970.jpg',
      personSex: '',
      hasConcerned: true,
      hasLiked: true,
      personShareScore: '1314',
      perSignature: '莫要轻言恒古，离散才看荒凉！',
      feeds: [{
        time: 123456,
        content: '莫要轻言恒古，离散才看荒凉！莫要轻言恒古，离散才看荒凉！莫要轻言恒古，离散才看荒凉！莫要轻言恒古，离散才看荒凉！'
      },{
        time: 123456,
        content: '莫要轻言恒古，离散才看荒凉！莫要轻言恒古，离散才看荒凉！莫要轻言恒古，离散才看荒凉！莫要轻言恒古，离散才看荒凉！'
      },{
        time: 123456,
        content: '莫要轻言恒古，离散才看荒凉！莫要轻言恒古，离散才看荒凉！莫要轻言恒古，离散才看荒凉！莫要轻言恒古，离散才看荒凉！'
      },]
    },
    active: 0,
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let userId = 'userinfo.userid'
    let value = options.userid
    this.setData({
      [userId]: value
    })
    // console.log(service.dataObj)
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

  goThere: function (e) {
    const goLocation = e.target.dataset.location
    // console.log(goLocation)
    wx.redirectTo({
      url: '../' + goLocation + '/' + goLocation,
    })
  },

  tabChoose: function(e){
    const activeId = e.currentTarget.dataset.id
    this.setData({
      active: activeId
    })
  }
})