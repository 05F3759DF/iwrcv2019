module.exports = {
    title: 'IWRCV2019',
    description: 'IWRCV2019 - We are waiting for you here',
    base: '/iwrcv2019/',
    themeConfig: {
        sidebarDepth: 0,
        nav: [
          { text: 'Home', link: '/' },
          { text: 'Committee', link: '/committee' },
          { text: 'Program', link: '/program' },
          { text: 'Venue', link: '/venue' },
          { text: 'Registration', link: '/registeration' },
          { text: 'Sponsor', link: '/sponsor' },
          { text: 'Contact', link: '/contact'}
        ],
        sidebar: [
          ['/', 'Information'],
          '/committee',
          '/program',
          '/venue',
          '/registeration',
          '/sponsor',
          '/contact',
          '/comment'
        ]
      }
}