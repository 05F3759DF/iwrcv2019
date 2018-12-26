function integrateGitalk(router) {
    const linkGitalk = document.createElement('link');
    linkGitalk.href = 'https://cdn.jsdelivr.net/npm/gitalk@1/dist/gitalk.css';
    linkGitalk.rel = 'stylesheet';
    document.body.appendChild(linkGitalk);
    const scriptGitalk = document.createElement('script');
    scriptGitalk.src = 'https://cdn.jsdelivr.net/npm/gitalk@1/dist/gitalk.min.js';
    document.body.appendChild(scriptGitalk);
  
    router.afterEach((to) => {
      if (scriptGitalk.onload) {
        loadGitalk(to);
      } else {
        scriptGitalk.onload = () => {
          loadGitalk(to);
        }
      }
    });
  
    function loadGitalk(to) {
      let commentsContainer = document.getElementById('gitalk-container');
      if (!commentsContainer) {
        commentsContainer = document.createElement('div');
        commentsContainer.id = 'gitalk-container';
        commentsContainer.classList.add('content');
      } else if (to.fullPath.startsWith('/comment.html')){
        commentsContainer.style.display = "inherit";
      } else {
        commentsContainer.style.display = "none";
        return;
      }
      const $page = document.querySelector('.page');
      if ($page) {
        $page.appendChild(commentsContainer);
        if (typeof Gitalk !== 'undefined' && Gitalk instanceof Function) {
          renderGitalk(to.fullPath);
        }
      }
    }
    function renderGitalk(fullPath) {
      console.log(fullPath, fullPath.startsWith('/comment.html'), !fullPath.startsWith('/comment.html'))   
      if (!fullPath.startsWith('/comment.html')) return;
      const gitalk = new Gitalk({
        clientID: '015177d5625e00523ef6',
        clientSecret: '7760b2a43b407a95aa064ad646a6525c5356bdd3',
        repo: 'iwrcv2019',
        owner: 'dog2cat',
        admin: ['dog2cat'],
        id: 'comment',
        distractionFreeMode: false,
        language: 'en-US',
      });
      gitalk.render('gitalk-container');
    }
  }
  
  export default ({Vue, options, router}) => {
    try {
      document && integrateGitalk(router)
    } catch (e) {
      console.error(e.message)
    }
  }