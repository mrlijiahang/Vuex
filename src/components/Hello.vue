<template>
    <div>
        <div style="float:left;margin-left:20px">
            <!-- <div>Vuex</div> 
        {{this.$store.state.count}} -->
        <p>正常按钮</p>
        
        <Button :size="size" :type="type1"> 百望股份</Button>
        <br/>
        <Button :size="size1" :type="type1">百望股份</Button>
        <br/>
        <Button :size="size2" :type="type1">百望股份</Button>
        <br/>
         <Button :size="size" :type="type2"> 百望股份</Button>
         <br/>
        <Button :size="size1" :type="type2">百望股份</Button>
        <br/>
        <Button :size="size2" :type="type2">百望股份</Button>
        <br/>
         <Button :size="size" :type="type3"> 百望股份</Button>
         <br/>
        <Button :size="size1" :type="type3" >百望股份</Button>
        <br/>
        <Button :size="size2" :type="type3" >百望股份</Button>
        <br/>
         <Button :size="size" :type="type4">百望股份</Button>
         <br/>
        <Button :size="size1" :type="type4">百望股份</Button>
        <br/>
        <Button :size="size2" :type="type4">百望股份</Button>
        <br/>
         <Button :size="size" :type="type5"> 百望股份</Button>
         <br/>
        <Button :size="size1" :type="type5">百望股份</Button>
        <br/>
        <Button :size="size2" :type="type5">百望股份</Button>
        <br/>
        <Button :loading="loading" :type="type4">加载中</Button>

        </div>
              <div style="float:left;margin-left:120px">
                <p>朴素按钮</p>
          
        <Button :size="size" :type="type1" :plain="plain"> 百望股份</Button>
        <br/>
        <Button :size="size1" :type="type1" :plain="plain">百望股份</Button>
        <br/>
        <Button :size="size2" :type="type1" :plain="plain">百望股份</Button>
        <br/>
         <Button :size="size" :type="type2" :plain="plain"> 百望股份</Button>
         <br/>
        <Button :size="size1" :type="type2" :plain="plain">百望股份</Button>
        <br/>
        <Button :size="size2" :type="type2" :plain="plain">百望股份</Button>
        <br/>
         <Button :size="size" :type="type3" :plain="plain"> 百望股份</Button>
         <br/>
        <Button :size="size1" :type="type3" :plain="plain">百望股份</Button>
        <br/>
        <Button :size="size2" :type="type3" :plain="plain">百望股份</Button>
        <br/>
         <Button :size="size" :type="type4" :plain="plain">百望股份</Button>
         <br/>
        <Button :size="size1" :type="type4" :plain="plain">百望股份</Button>
        <br/>
        <Button :size="size2" :type="type4" :plain="plain">百望股份</Button>
        <br/>
         <Button :size="size" :type="type5" :plain="plain"> 百望股份</Button>
         <br/>
        <Button :size="size1" :type="type5" :plain="plain">百望股份</Button>
        <br/>
        <Button :size="size2" :type="type5" :plain="plain">百望股份</Button>
        <br/>
        <Button :loading="loading" :type="type4" :plain="plain">加载中</Button>

        </div>
        <div style="float:left;margin-left:150px">
            <p>round按钮</p>
         <Button :size="size" :type="type1" :round='round'>百望股份</Button>
        <br/>
        <Button :size="size1" :type="type1"  :round='round'>百望股份</Button>
        <br/>
        <Button :size="size2" :type="type1"  :round='round'>百望股份</Button>
        <br/>
         <Button :size="size" :type="type2"  :round='round'> 百望股份</Button>
         <br/>
        <Button :size="size1" :type="type2"  :round='round'>百望股份</Button>
        <br/>
        <Button :size="size2" :type="type2"  :round='round'>百望股份</Button>
        <br/>
         <Button :size="size" :type="type3"  :round='round'> 百望股份</Button>
         <br/>
        <Button :size="size1" :type="type3"  :round='round'>百望股份</Button>
        <br/>
        <Button :size="size2" :type="type3"  :round='round'>百望股份</Button>
        <br/>
         <Button :size="size" :type="type4"  :round='round'>百望股份</Button>
         <br/>
        <Button :size="size1" :type="type4"  :round='round'>百望股份</Button>
        <br/>
        <Button :size="size2" :type="type4"  :round='round'>百望股份</Button>
        <br/>
         <Button :size="size" :type="type5"  :round='round'> 百望股份</Button>
         <br/>
        <Button :size="size1" :type="type5"  :round='round'>百望股份</Button>
        <br/>
        <Button :size="size2" :type="type5"  :round='round'>百望股份</Button>
        <br/>
        <Button :loading="loading" :type="type4"  :round='round'>加载中</Button>
        </div>
        <div style="margin-left:130px;float:left">
            <p>默认图标按钮</p>
            <Button  :icon='icon1' :type="type4"></Button>
            <br/>
            <Button  :icon='icon2' :type="type3"></Button>
            <br/>
            <Button  :icon='icon3' :type="type4"></Button>
            <br/>
            <Button  :icon='icon4' :type="type3"></Button>
            <br/>
            <Button  :icon='icon5' :type="type2"></Button>
            <br/>
            <Button  :icon='icon6' :type="type1"></Button>
            <br/>
            <Button  :icon='icon7' :type="type5"></Button>
            <br/>
            <Button  :icon='icon8' :type="type4"></Button>
            <br/>
            <Button  :icon='icon9' :type="type3"></Button>
            <br/>
            <Button  :icon='icon10' :type="type2"></Button>
            <br/>
            <Button  :icon='icon11' :type="type1"></Button>
            <br/>
            <Button  :icon='icon12' :type="type5"></Button>
            <br/>
            <Button  :icon='icon13' :type="type4"></Button>
            <br/>
            <Button  :icon='icon14' :type="type3"></Button>
            <br/>
            

        </div>
        <div style="margin-left:130px;float:left">
            <p>图标按钮自定义文字</p>
            <Button  :icon='icon1' :type="type4">微信</Button>
            <br/>
            <Button  :icon='icon2' :type="type3">QQ</Button>
            <br/>
            <Button  :icon='icon3' :type="type4">微博</Button>
            <br/>
            <Button  :icon='icon4' :type="type3">删除</Button>
            <br/>
            <Button  :icon='icon5' :type="type2">删除（2）</Button>
            <br/>
            <Button  :icon='icon6' :type="type1">铅笔</Button>
            <br/>
            <Button  :icon='icon7' :type="type5">邮件</Button>
            <br/>
            <Button  :icon='icon8' :type="type4">查找</Button>
            <br/>
            <Button  :icon='icon9' :type="type3">添加</Button>
            <br/>
            <Button  :icon='icon10' :type="type2">上一页</Button>
            <br/>
            <Button  :icon='icon11' :type="type1">下一页</Button>
            <br/>
            <Button  :icon='icon12' :type="type5">发票</Button>
            <br/>
            <Button  :icon='icon13' :type="type4">删除</Button>
            <br/>
            <Button  :icon='icon14' :type="type3">分享</Button>
            <br/>
            

        </div>
        
        

      


    </div>
</template>
<script>
import store from '../store'
import Button from './Button'

export default {
    components:{
        Button
    },
    mounted(){
    },
    data(){
        return{
            disabled:false,
            circle:false,
            plain:true,
            round:true,
            loading:true,
            size:"small",
            size1:'normal',
            size2:'big',
            type1:'tyerror',
            type2:'tysuccess',
            type3:'tywarning',
            type4:'typrimary',
            type5:'tynormal',
            icon1:'icon-weixin',
            icon2:'icon-QQ2',
            icon3:'icon-weibo',
            icon14:'icon-share',
            icon4:'icon-lajitong',
            icon5:'icon-shanchu',
            icon6:'icon-pan_icon',
            icon7:'icon-youxiang',
            icon8:'icon-soushuo', 
            icon9:'icon-tianjia', 
            icon10:'icon-shangyiye', 
            icon11:'icon-xiayiye', 
            icon12:'icon-fapiao', 
            icon13:'icon-jianshao',
        }
    },
    methods:{
        add(){
            this.$store.dispatch('actionadd',10)
            
        }
    }
   
    
}
</script>

