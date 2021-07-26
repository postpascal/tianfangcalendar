// client/pages/constellation/constellation.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

    constellationList : ['白羊座','金牛座','双子座','巨蟹座','狮子座','处女座','天秤座','天蝎座','射手座','摩羯座','水瓶座','双鱼座'],
    constellationListIndex : 0,

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function () {
    var that = this//不要漏了这句，很重要
    wx.request({
      url: 'https://api.jisuapi.com/astro/fortune?astroid=1&date=2021-07-21&appkey=1112640d4f41cac6',
      headers: {
        'Content-Type': 'application/json'
      },
      success: function (res) {
        console.log(res.data.result.today.presummary)
        // that.setData({
        //   summary: res.data.result.today.presummary
        //   //res代表success函数的事件对，data是固定的，fengxiang是是上面json数据中fengxiang
        // })

      }
    })
  }
,

getConstellation: function (i) {
  var that = this
   console.log("LOG",i)
   const today = new Date().toISOString().slice(0, 10)
console.log(today)
  wx.request({
    url: 'https://api.jisuapi.com/astro/fortune?astroid='+i+'&date='+today+'&appkey=1112640d4f41cac6',
    headers: {
      'Content-Type': 'application/json'
    },
    success: function (res) {
      console.log(res.data.result.today.presummary)
      that.setData({
        todaypresummary: res.data.result.today.presummary,
        todaystar: res.data.result.today.star,
        todaymoney: res.data.result.today.money,
        todaycareer: res.data.result.today.career,
        todaylove: res.data.result.today.love,
        todayhealth: res.data.result.today.health,

        tomorrowpresummary: res.data.result.tomorrow.presummary,
        tomorrowstar: res.data.result.tomorrow.star,
        tomorrowmoney: res.data.result.tomorrow.money,
        tomorrowcareer: res.data.result.tomorrow.career,
        tomorrowlove: res.data.result.tomorrow.love,
        tomorrowhealth: res.data.result.tomorrow.health,

        yearsummary : res.data.result.year.summary,
        yearmoney: res.data.result.year.money,
        yearcareer: res.data.result.year.career,
        yearlove: res.data.result.year.love,

        weekmoney: res.data.result.week.money,
        weekcareer: res.data.result.week.career,
        weeklove: res.data.result.week.love,
        weekhealth: res.data.result.week.health,


        monthsummary : res.data.result.month.summary,
        monthmoney: res.data.result.month.money,
        monthcareer: res.data.result.month.career,
        monthlove: res.data.result.month.love,
        monthhealth: res.data.result.month.health,



      })

    }
  })
},

changeconstellation(e) {
  console.log('picker发送选择改变，携带值为', e.detail.value)
  
  this.setData({
    constellationListIndex: e.detail.value
  });
  this.getConstellation(Number(e.detail.value)+1)

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

  }
})