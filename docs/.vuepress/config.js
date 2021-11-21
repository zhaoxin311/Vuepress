module.exports = {
  title: '网站标题',
  description: '网站描述',
  // 注入到当前页面的 HTML <head> 中的标签
  head: [
    ['link', { rel: 'icon', href: '/favicon.ico' }], // 增加一个自定义的 favicon(网页标签的图标)
  ],
  base: '/',
  markdown: {
    lineNumbers: true // 代码块显示行号
  },
  themeConfig: {
    logo:'/logo.png',
    navbar: [
      { text: 'Home', link: '/' },
      { text: 'guide', link: '/guide/' },
      { text: 'foo', link: '/foo/' },
      // { text: 'External', link: 'https://google.com' },
      // {
      //   text: 'Github',
      //   // 这里是下拉列表展现形式。
      //   items: [
      //    { text: 'focus-outside', link: 'https://github.com/TaoXuSheng/focus-outside' },
      //    { text: 'stylus-converter', link: 'https://github.com/TaoXuSheng/stylus-converter' },
      //   ]
      //  }
    ],
    sidebar:{
      '/guide/':[
        {
          text:'css 笔记',
          link:'',
          children: [
            'README.md',
            'markdown.md',
            'four.md',
            'three.md'
          ]
        }
        
      ],
      '/foo/':[
        {
          text: 'CSS 笔记阿',
          children: [
            'README.md',
            'one.md',
            'test.md'
          ]
        }
      ],
    },
    displayAllHeaders: true, // 默认值：false
    sidebarDepth: 2, // e'b将同时提取markdown中h2 和 h3 标题，显示在侧边栏上。
    lastUpdated: 'Last Updated' // 文档更新时间：每个文件git最后提交的时间
  }
};


