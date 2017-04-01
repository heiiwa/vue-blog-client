<template>
    <div>
        <Menu mode="horizontal" theme="dark" active-name="1">
            <div class="layout-logo"></div>
            <div class="layout-nav">
                <Menu-item name="1">
                    <Icon type="ios-navigate"></Icon>
                    <router-link to="/"><span @click="selectedSubmenu='Submenu1'">首页</span></router-link>
                </Menu-item>
                <Menu-item name="2">
                    <Icon type="ios-keypad"></Icon>
                    <router-link to="/user"><span @click="selectedSubmenu='Submenu2'">用户</span></router-link>
                </Menu-item>
                <Menu-item name="3">
                    <Icon type="ios-analytics"></Icon>
                    <router-link to="/log"><span @click="selectedSubmenu='Submenu3'">日志</span></router-link>
                </Menu-item>
                <Menu-item name="4">
                    <Icon type="ios-paper"></Icon>
                   <router-link to="/comment" activeClass="active"><span @click="selectedSubmenu='Submenu4'">评论</span></router-link>
                </Menu-item>
            </div>
        </Menu>
        <Menu mode="horizontal" active-name="1">
            <component :is="selectedSubmenu">
                <span>default message</span>
            </component>
        </Menu>
    </div>
</template>
<script>
    import Submenu1 from '../submenu/Submenu1.vue'
    import Submenu2 from '../submenu/Submenu2.vue'
    import Submenu3 from '../submenu/Submenu3.vue'
    import Submenu4 from '../submenu/Submenu4.vue'

    export default({
        data (){
            return {
                selectedSubmenu:"Submenu1"
            }
        },
        components:{
            Submenu1,
            Submenu2,
            Submenu3,
            Submenu4
        }
    })
</script>
<style scped>
    .layout{
        border: 1px solid #d7dde4;
        background: #f5f7f9;
    }
    .layout-logo{
        width: 100px;
        height: 30px;
        background: #5b6270;
        border-radius: 3px;
        float: left;
        position: relative;
        top: 15px;
        left: 20px;
    }
    .layout-breadcrumb{
        padding: 10px 15px 0;
    }
    .layout-content{
        min-height: 200px;
        margin: 15px;
        overflow: hidden;
        background: #fff;
        border-radius: 4px;
    }
    .layout-content-main{
        padding: 10px;
    }
    .layout-copy{
        text-align: center;
        padding: 10px 0 20px;
        color: #9ea7b4;
    }
</style>