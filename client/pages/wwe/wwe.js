// client/pages/tt/tt.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    prizes: [
      { title: '外卖', background: '#f9e3bb', fonts: [{ text: '外卖', top: '18%' }] },
      { title: '地铁站', background: '#f8d384', fonts: [{ text: '地铁站', top: '18%' }] },
      { title: '盒饭', background: '#f9e3bb', fonts: [{ text: '盒饭', top: '18%' }] },
      { title: '头一号', background: '#f8d384', fonts: [{ text: '头一号', top: '18%' }] },
      { title: '绝食一顿', background: '#4B0082', fonts: [{ text: '绝食一顿', top: '18%' }] },

    ],
    defaultStyle: {
      fontColor: '#d64737',
      fontSize: '14px'
    },
    blocks: [
      { padding: '13px', background: '#d64737' }
    ],
    buttons: [
      { radius: '50px', background: '#d64737' },
      { radius: '45px', background: '#fff' },
      { radius: '41px', background: '#f6c66f', pointer: true },
      {
        radius: '35px', background: '#ffdea0',
        fonts: [{ text: '今天\n吃啥', fontSize: '18px', top: -18 }]
      }
    ],
  },

  start () {
    // 获取抽奖组件实例
    const child = this.selectComponent('#myLucky')
    // 调用play方法开始旋转
    child.$lucky.play()
    // 用定时器模拟请求接口
    setTimeout(() => {
      // 3s 后得到中奖索引
      const index = Math.random() * 6 >> 0
      // 调用stop方法然后缓慢停止
      child.$lucky.stop(index)
    }, 3000)
  },
  end (event) {
    // 中奖奖品详情
    console.log(event.detail)
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
    return {
      title: '今天吃啥',
    }
  }
})