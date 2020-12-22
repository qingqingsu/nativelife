

import {
  requestGet
} from '../../utils/zgrequest';
import regeneratorRuntime from '../../lib/runtime/runtime'

Page({

  data: {
    id:"",
    shop:{}
  },

  onLoad: function (options) {
    console.log(options);
    var id = parseInt(options.id);
    this.setData({
      id:id
    });
    this.getDetailData();
  },
  async getDetailData(){
    let result = await requestGet(`/shops/${this.data.id}`);
    console.log(result.data)
    this.setData({
      shop:result.data
    });
    wx.setNavigationBarTitle({
      title:result.data.name
    })
  },
  preview(e){
    wx.previewImage({
      current:e.currentTarget.dataset.src,
      urls:e.currentTarget.dataset.images
    })
  }

  
})