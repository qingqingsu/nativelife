// pages/profile/profile.js
Page({

  
  data: {
     imgPath:"/assets/images/avatar.png",
     canIUse:wx.canIUse('button.open-type.getUserInfo')
  },

  onLoad: function (options) {

  },
  loginHandle(e){
    this.setData({
      imgPath:e.detail.userInfo.avatarUrl
    })
  }
  
})