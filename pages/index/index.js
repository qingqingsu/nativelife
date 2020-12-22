import {requestGet} from '../../utils/zgrequest';
import regeneratorRuntime from '../../lib/runtime/runtime'

Page({
  data: {
      slides:[],
      categories:[]
  },
  onLoad(options){
    this.getSlides();
    this.getCategories();

    // var _this = this;
    // wx.request({
    //   url:"https://locally.uieee.com/slides",
    //   method:"get",
    //   data:{},
    //   header:{},
    //   dataType:"json",
    //   success:function(res){
    //     console.log("请求成功了",res);
    //     _this.setData({
    //       slides:res.data
    //     })
    //   },
    //   fail:function(err){
    //     console.log("请求失败了",err);
    //   }
    // })
  },
  async getSlides(){
    let result = await requestGet("/slides");
    this.setData({
      slides:result.data
    })
  },
  async getCategories(){
    let result = await requestGet("/categories");
    this.setData({
       categories:result.data
    })
  }
  
})
