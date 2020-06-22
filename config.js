var app = new Vue({
  el: '#page',
  data: {
    网页名称: '李浩明的个人简历',
    姓名: '李浩明',
    号码: '186********',
    邮箱: '1161795769@qq.com',
    个人网页: 'www.baidu.com',
    地址: '测试的',
    职业: '环艺哥',
    头像地址: 'images/lhm.png',
    /** 支持类型有[微博,git,instagram]*/
    联系方式: [
      {
        类型: '微博',
        地址: 'https://weibo.com'
      },
      {
        类型: 'qq',
        地址: '234'
      },
      {
        类型: 'git',
        地址: '23423'
      },
      {
        类型: 'instagram',
        地址: '234234'
      }
    ],
    关于我标题: '大家好',
    关于我内容: '我是练习时长两年半的个人练习生，喜欢唱，跳，rap，music，鸡你太美～',
    /** 个人简历*/
    工作经历: [
      {
        职业名称: '练习生',
        公司名称: '公司名称',
        时间: '2016 - 现在',
        介绍: '我是练习时长两年半的个人练习生，喜欢唱，跳，rap，music，鸡你太美～'
      },
      {
        职业名称: '练习生',
        公司名称: '公司名称',
        时间: '2016 - 现在',
        介绍: '我是练习时长两年半的个人练习生，喜欢唱，跳，rap，music，鸡你太美～'
      },
      {
        职业名称: '练习生',
        公司名称: '公司名称',
        时间: '2016 - 现在',
        介绍: '我是练习时长两年半的个人练习生，喜欢唱，跳，rap，music，鸡你太美～'
      },
    ],
    /** 教育经历*/
    教育经历: [
      {
        学段: '小学',
        学校名称: '学校名称',
        时间: '2016 - 现在',
        介绍: '我是练习时长两年半的个人练习生，喜欢唱，跳，rap，music，鸡你太美～'
      },
      {
        学段: '大学',
        学校名称: '公司名称',
        时间: '2016 - 现在',
        介绍: '我是练习时长两年半的个人练习生，喜欢唱，跳，rap，music，鸡你太美～'
      },
      {
        学段: '初中',
        学校名称: '公司名称',
        时间: '2016 - 现在',
        介绍: '我是练习时长两年半的个人练习生，喜欢唱，跳，rap，music，鸡你太美～'
      },
    ],
    /** 我的能力 图标可以打开/fonts/demo.html看看需要什么样的图标*/
    我的能力: [
      {
        名称: '唱',
        图标: '学校名称',
        介绍: '唱唱唱唱唱唱唱唱唱唱唱唱唱唱唱唱'
      },
      {
        名称: '跳',
        图标: '学校名称',
        介绍: '唱唱唱唱唱唱唱唱唱唱唱唱唱唱唱唱'
      },
      {
        名称: 'rap',
        图标: '学校名称',
        介绍: '唱唱唱唱唱唱唱唱唱唱唱唱唱唱唱唱'
      },
      {
        名称: '篮球',
        图标: '学校名称',
        介绍: '唱唱唱唱唱唱唱唱唱唱唱唱唱唱唱唱'
      },
      {
        名称: '篮球',
        图标: '学校名称',
        介绍: '唱唱唱唱唱唱唱唱唱唱唱唱唱唱唱唱'
      },
      {
        名称: '篮球',
        图标: '学校名称',
        介绍: '唱唱唱唱唱唱唱唱唱唱唱唱唱唱唱唱'
      }
    ],
    /** 我的技能*/
    我的技能: [
      {
        名称: '唱',
        进度: 100,
      },
      {
        名称: '跳',
        进度: 100
      },
      {
        名称: 'rap',
        进度: 100
      },
      {
        名称: '篮球',
        进度: 90
      },
      {
        名称: '篮球',
        进度: 80
      },
      {
        名称: '篮球',
        进度: 100
      },
      {
        名称: '篮球',
        进度: 100
      },
      {
        名称: '篮球',
        进度: 100
      }
    ],
    /** 我的作品*/
    我的作品: [
      {
        名称: '篮球',
        地址: 'www.baidu.com',
        图片: 'images/cxk.jpg',
        简介: '新作品'
      },
      {
        名称: '篮球',
        地址: 'www.baidu.com',
        图片: 'images/cxk.jpg',
        简介: '新作品'
      },
      {
        名称: '篮球',
        地址: 'www.baidu.com',
        图片: 'images/cxk.jpg',
        简介: '新作品'
      }, {
        名称: '篮球',
        地址: 'www.baidu.com',
        图片: 'images/cxk.jpg',
        简介: '新作品'
      }, {
        名称: '篮球',
        地址: 'www.baidu.com',
        图片: 'images/cxk.jpg',
        简介: '新作品'
      }, {
        名称: '篮球',
        地址: 'www.baidu.com',
        图片: 'images/cxk.jpg',
        简介: '新作品'
      }, {
        名称: '篮球',
        地址: 'www.baidu.com',
        图片: 'images/cxk.jpg',
        简介: '新作品'
      }, {
        名称: '篮球',
        地址: 'www.baidu.com',
        图片: 'images/cxk.jpg',
        简介: '新作品'
      }
    ]
  },
  mounted () {
    document.title = this.网页名称
  }
})