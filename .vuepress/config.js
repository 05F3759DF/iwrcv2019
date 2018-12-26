module.exports = {
    title: 'The 13th International Workshop on Robust Computer Vision',
    description: 'IWRCV2019 - We are waiting for you here',
    base: '/iwrcv2019/',
    themeConfig: {
        sidebarDepth: 0,
        nav: [
          { text: 'Home', link: '/' },
          { text: 'Committee', link: '/committee' },
          { text: 'Program', link: '/program' },
          { text: 'Venue', link: '/venue' },
          { text: 'Registration', link: '/registration' },
          { text: 'Contact', link: '/contact'}
        ],
        sidebar: [
          {
            title: 'Menu',
            collapsable: false,
            children: [
              ['/', 'Information'],
              '/committee',
              '/program',
              '/venue',
              '/registration',
              '/contact',
              '/comment'
            ]
          },
        ]
      }
}