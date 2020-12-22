import {
  requestGet
} from '../../utils/zgrequest';
import regeneratorRuntime from '../../lib/runtime/runtime'

Page({

  data: {
    id: "",
    value: "",
    list: [],
    pageIndex: 1,
    pageSize: 10,
    starValue: 3,
    hasMore: true,
    totalCount:0
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(options);
    wx.setNavigationBarTitle({
      title:options.name
    })
    this.setData({
      id: options.category
    });
    this.getListData();
  },
  async getListData() {
    let result = await requestGet(`/categories/${this.data.id}/shops`, {
      _page: this.data.pageIndex,
      _limit: this.data.pageSize
    });
    this.setData({
      list: [...this.data.list,...result.data],
      totalCount:parseInt(result.header['x-total-count'])
    })
  },
  onSearch() {
    console.log("onSearch");
  },
  onCancel() {
    console.log("onCancel");
    this.setData({
      value: ""
    })
  },
  onChange(e) {
    console.log("onChange");
    this.setData({
      value: e.detail
    })
  },
  onStarChange(event) {
    this.setData({
      starValue: event.detail
    })
  },
  onReachBottom: function () {
    let totalPage = Math.ceil(this.data.totalCount/this.data.pageSize);
    console.log("234");
    this.data.pageIndex++;
    this.setData({
      pageIndex:this.data.pageIndex,
    })
    if(this.data.pageIndex < totalPage){
      this.getListData();
    }
    else{
      this.setData({
        hasMore:false
      })
    }
  },
  onPullDownRefresh: async function(){
    this.setData({
      pageIndex:1,
      list:[],
      hasMore:true
    })
    await this.getListData();
    wx.stopPullDownRefresh();
  }

})