export default{
    path : '/movie',
    component : () => import('@/views/Movie') ,
    children : [
        {
            path : 'city' ,//没有斜杠
            component : () => import('@/components/City')
        },
        {
            path : 'nowPlaying',
            component : () => import('@/components/NowPlaying')
        },
        {
            path : 'comingSoon' ,//没有斜杠
            component : () => import('@/components/ComingSoon')
        },
        {
            path : 'search' ,//没有斜杠
            component : () => import('@/components/Search')
        },
        {
            path : "/movie",
            redirect : "/movie/nowPlaying"
        }
    ]
}