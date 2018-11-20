// pages/mine/mine.js
import app from '../../app.js'
import ownObj from '../../utils/data.js'
Page({

  /**
   * 页面的初始数据
   */
  data: {
    userinfo: ownObj.ownObj,
    active: 2,
    concern: '0',
    shareScore: '1314',
    list: [
      {
        url: '',
        imageSrc: '../../images/task.png',
        text: '每日签到'
      },
      {
        url: '',
        imageSrc: '../../images/task2.png',
        text: '每日任务'
      },
      {
        url: '',
        imageSrc: '../../images/wallet2.png',
        text: '我的钱包'
      },
      {
        url: '',
        imageSrc: '../../images/history2.png',
        text: '历史配对'
      },
      {
        url: '',
        imageSrc: '../../images/location2.png',
        text: '切换城市'
      },
      {
        url: '',
        imageSrc: '../../images/location2.png',
        text: '我的相册'
      }
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    
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
  }
})