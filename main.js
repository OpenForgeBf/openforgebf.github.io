function onLoad() {
    new Vue({
        el: '.nk-main',
        data: {
            newsItems: [
                { 
                    title: 'Phase 2 Launch', 
                    description: 'The phase 2 launch allows players to play with friends using peer to peer technology. You can join anybody by connecting to their machine and joining up with your friends.', 
                    image: 'assets/images/post-3.jpg', 
                    smallImage: 'assets/images/post-3-sm.jpg', 
                    date: 'May 23, 2021' 
                },
                { 
                    title: 'Website Launch', 
                    description: 'The website is intended to help provide easy access to the OpenForge project.', 
                    image: 'assets/images/post-2.jpg', 
                    smallImage: 'assets/images/post-2-sm.jpg', 
                    date: 'May 23, 2021' 
                },
                { 
                    title: 'Phase 1 Launch', 
                    description: 'The phase 1 launch allows players to access BattleForge online or offline using the OpenForge launcher. The player will have access to decks and all maps can be played solo.', 
                    image: 'assets/images/post-1.jpg', 
                    smallImage: 'assets/images/post-1-sm.jpg', 
                    date: 'Apr 25, 2021' 
                }
            ]
        }
    });
}
