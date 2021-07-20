// client/pages/wwe/wwe.js
Page({
  data: {
    prizes: [
      { title: '必胜客', background: '#f9e3bb', fonts: [{ text: '必胜客', top: '18%' }] },
      { title: '井格', background: '#f8d384', fonts: [{ text: '井格', top: '18%' }] },
      { title: '螺蛳粉', background: '#f9e3bb', fonts: [{ text: '螺蛳粉', top: '18%' }] },
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
  }
})