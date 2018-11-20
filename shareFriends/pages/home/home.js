// pages/home/home.js
var service = require("../../utils/data.js")
var distance = require("../../utils/getDistance.js")

Page({

  /**
   * 页面的初始数据
   */
  data: {
    active: 0,
    currentCity: '',
    dataObj: "",
    lat: '',
    lng: '',
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      dataObj: service.dataObj
    })
    this.getlocation()
  },

  goThere : function (e) {
    const goLocation = e.target.dataset.location
    // console.log(goLocation)
    wx.redirectTo({
      url: '../' + goLocation + '/' + goLocation,
    })
  },

  getAddress: function(){
    var page = this
    wx.getLocation({
      type: 'wgs84',
      success: function (res) {
        var latitude = res.latitude   //纬度
        var longitude = res.longitude   //经度
        var speed = res.speed           //速度
        var accuracy = res.accuracy     //位置的精确度
        // console.log(res)
        page.loadCity(longitude, latitude)
        page.setData({
          lat: latitude,
          lng: longitude
        })
        var dataObj = page.data.dataObj
        for (var i in dataObj) {
          var mile = distance.GetDistance(dataObj[i].lat, dataObj[i].lng, page.data.lat, page.data.lng)
          dataObj[i].distance = mile
        }
        page.setData({
          dataObj: dataObj
        })
      }
    })
  },

  loadCity: function (longitude, latitude) {
    var page = this
    wx.request({
      url: 'https://api.map.baidu.com/geocoder/v2/?ak=Zl7B86f0W6YbjHVbvQqtM934InavKGRm&location=' + latitude + ',' + longitude + '&output=json',
      data: {},
      header: {
        'Content-Type': 'application/json'
      },
      success: function (res) {
        // success  
        console.log(res)
        var city = res.data.result.addressComponent.city;
        page.setData({ currentCity: city });
        // console.log(page.data.currentCity)
      },
      fail: function () {
        page.setData({ currentCity: "获取定位失败" });
      }
    })
  },

  getlocation: function(){
    var page = this
    wx.getSetting({
      success(res) {
        if (!res.authSetting['scope.userLocation']) {
          wx.authorize({
            scope: 'scope.userLocation',
            success() {
              page.getAddress()
            }
          })
        } else {
          page.getAddress()
        }
      }
    })
  },
  //查看信息
  lookInformation: function(e){
    const userid = e.currentTarget.dataset.userid
    wx.navigateTo({
      url: "../friendInformation/friendInformation?userid="+ userid +"",
    })
  },
})