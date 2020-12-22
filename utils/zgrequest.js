export function requestGet(url,data){
    return new Promise((resolve,reject) =>{
        wx.request({
            url:"https://locally.uieee.com" +url,
            method:"get",
            data:data,
            header:{},
            dataType:"json",
            success:function(res){
              console.log("请求成功了",res);
              resolve(res);
            },
            fail:function(err){
              console.log("请求失败了",err);
              reject(err);
            }
          })
    })
    
}