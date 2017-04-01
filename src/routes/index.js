import Home from '../views/Home.vue'
import User from '../views/user/User.vue'
import Comment from '../views/user/Comment.vue'
import Upload from '../views/user/Upload.vue'

export const routes = [
    {path:'/',component:Home},
    {path:'/user',component:User},
    {path:'/comment',component:User},
    {path:'/upload',component:User}
]