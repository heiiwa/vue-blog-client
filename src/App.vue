<template>
  <div class="layout">
      <Headerbar></Headerbar>
        <div class="layout-content">
            <Row>
                <Asidebar></Asidebar>
               <i-col span="19">
                    <div class="layout-content-main">
                        <router-view></router-view>
                    </div>
                </i-col> 
            </Row>
        </div>
        <Footerbar></Footerbar>
    </div>
</template>

<script>
import Headerbar from './components/layout/Headerbar.vue'
import Asidebar from './components/layout/Asidebar.vue'
import Footerbar from './components/layout/Footerbar.vue'
export default {
        components:{
            Headerbar,
            Asidebar,
            Footerbar
        }
    }
</script>

<style lang="scss">
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
    .layout-nav{
        width: 420px;
        margin: 0 auto;
    }
    .layout-assistant{
        width: 300px;
        margin: 0 auto;
        height: inherit;
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
