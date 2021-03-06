module.exports = {
  title: 'Xin.Zhao',
  // description: '一个文明健康积极向上的环境',
  description: '小仙女的学习进阶笔记和心得体会',
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
      { text: '前端面试指南', 
        children:[
          {text:'基础篇' ,link: '/mianshi/base/'},
          {text:'进阶篇' ,link: '/mianshi/advanced/'},
        ]
      },
      { text: '前端技术', 
        children:[
          { text:'Pinia', link: '/selfStudy/pinia/' },
          { text:'MarkDown', link: '/selfStudy/markdown/' }
        ]
      },
      { text: 'Git', link: '/git/' },
      { text: 'javascript', 
      children:[
        {text:'JS基础' ,link: '/javascript/js-jichu/'},
        {text:'JS工具' ,link: '/javascript/js-gongju/'},
      ]
    },
      { text: 'CSS', link: '/css/' },
      { text: 'TDesign', link: '/TDesign/' },
      { 
        text: 'Vue', 
        children:[
          {text:'GitHub' ,link: '/vue/github/'},
          {text:'Vue 2.0' ,link: '/vue/vue/'},
        ]
      },
      {
        text: '其它参考',
        children:[
            {text: 'API', link: 'https://cn.bing.com/'},
            {
                text: '学习视频',
                children: [
                    {text: '慕客', link: 'https://cn.bing.com/'},
                    {text: 'B 站', link: 'https://cn.bing.com/'}
                ]
            },
            {
                text: '开源项目',
                children: [
                    {text: '项目 01', link: 'https://cn.bing.com/'},
                    {text: '项目 02', link: 'https://cn.bing.com/'},
                    {text: '项目 03', link: 'https://cn.bing.com/'},
                    {text: '项目 04', link: 'https://cn.bing.com/'}
                ]
            }                   
        ]
    }
      // { text: 'External', link: 'https://google.com/' },
      // {
      //   text: 'Github',
      //   // 这里是下拉列表展现形式。无论是内部链接还是外部链接都要以"/"结束
      //   children: [
      //    { text: 'focus-outside', link: 'https://github.com/TaoXuSheng/focus-outside/' },
      //    { text: 'stylus-converter', link: 'https://github.com/TaoXuSheng/stylus-converter/' },
      //   ]
      //  }
    ],
    sidebar:{
      '/mianshi/base':[
        {
          text: '前端面试指南--基础篇',
          link:'',
          children: [
            'README.md',
            'base.md',
            'javascript.md'
          ],
        }
      ],
      '/mianshi/advanced':[
        {
          text: '前端面试指南--进阶篇',
          link:'',
          children: [
            'README.md',
          ],
        }
      ],
      '/selfStudy/pinia':[
        {
          text:'状态管理工具Pinia',
          link:'',
          children: [
            'README.md',
            'pinia.md',
          ],
        }
      ],
      '/selfStudy/markdown':[
        {
          text:'MarkDown文件',
          link:'',
          children: [
            'README.md',
            'markdown.md',
          ]
        }
        
      ],
      '/git/':[
        {
          text: 'Git 使用教程',
          children: [
            'README.md',
            'git常用命令行.md',
            'git常用场景.md',
          ]
        }
      ],
      // '/vue/':[
      //   {
      //     text: 'vue基础知识',
      //     link:'',
      //     children: [
      //       'README.md',
      //       'git本地切换远程仓库地址.md',
      //     ],
      //   }
      // ],
      '/javascript/js-jichu':[
        {
          text: 'JavaScript',
          link:'',
          children: [
            'README.md',
            'javascript.md',
            'JS数组的奇怪用法.md',
            '兼容ie8.md',
            '常见的js文具库.md'
          ],
        }
      ],
      '/javascript/js-gongju':[
        {
          text:'JS工具类',
          link:'',
          children: [
            'README.md',
            'lodash.md',
          ],
        }
      ],
      '/css/':[
        {
          text: 'CSS',
          link:'',
          children: [
            'README.md',
            'css.md',
          ],
        }
      ],
      '/TDesign/':[
        {
          text: 'TDesign',
          link:'',
          children: [
            'README.md',
            'TDesign.md',
          ],
        }
      ],
      '/vue/github/':[
        {
          text: 'GItHub',
          link:'',
          children: [
            'README.md',
            'git本地切换远程仓库地址.md',
          ]
        }
      ],
      '/vue/vue/':[
        {
          text: 'GItHub',
          link:'',
          children: [
            'README.md',
            'vue知识.md',
          ]
        }
      ],
    },
    displayAllHeaders: true, // 默认值：false
    sidebarDepth: 2, // e'b将同时提取markdown中h2 和 h3 标题，显示在侧边栏上。
    lastUpdated: 'Last Updated' // 文档更新时间：每个文件git最后提交的时间
  }
};


