<template>
  <div>
    <button ref="button" 
    :disabled="disabled" 
    @click='BwButtonclick($event)' 
    :class="{
      'normal':isnormal,
      'small':issmall,
      'big':isbig,
      'typrimary':istyprimary,
      'tynormal':istynormal,
      'tysuccess':istysuccess,
      'tywarning':istywarning,
      'tyerror':istyerror,
      'pointer':ispointer,
      'circle':iscircle}"
      style="cursor:pointer" 
      >
      <i v-if='loading' class="iconfont icon-loading">
      </i>
      <i v-if='icon' :class="iclass">
      </i>
      <span>
      <slot></slot>
      </span>

    </button>
  </div>
</template>
<script>
export default {
  name: "BwButton",
  computed:{
    iclass(){
      return  `iconfont ${this.icon}`
    }
  },
  props: {
    disabled: {
      type: Boolean,
      default: false
    },
    size: {
      type: String,
      default: "normal"
    },
    type: {
      type: String,
      default: "tynormal"
    },
    round:{
      type:Boolean,
      default:false
    },
    plain:{
      type:Boolean,
      default:false
    },
    loading:{
      type:Boolean,
      default:false
    },
    circle:{
      type:Boolean,
      default:false
    },
    icon:{
      type:String,
      default:''
    }
  },
  data() {
    return {
      isnormal: false,
      issmall: false,
      iscircle:true,
      isbig: false,
      isround:false,
      istynormal: false,
      istysuccess: false,
      istywarning: false,
      istyprimary:false,
      istyerror: false,
      ispointer:true,
     
    };
  },
  mounted() {
    console.log(this.$refs.button.getAttribute('class'))

    if(this.icon){
      this.$refs.button.style.minWidth="50px"
      this.$refs.button.style.height="50px"
      this.$refs.button.style.borderRadius='25px'

    }
    if(this.circle){
      this.$refs.button.style.width="100px"
      this.$refs.button.style.height="100px"
      this.$refs.button.style.borderRadius='50px'

      
    
    }
    if(this.round){
      this.$refs.button.style.borderRadius = '20px'
    }
    if(this.plain){
      this.$refs.button.style.opacity=0.3
    }
    if(this.disabled === true){
      this.$refs.button.style.cursor='not-allowed'
      this.$refs.button.style.opacity='0.5'
    }
    if (this.size === "normal") {
      this.isnormal = true;
    }
    if (this.size === "small") {
      this.issmall = true;
    }
    if (this.size === "big") {
      this.isbig = true;
    }
    if (this.type === "tysuccess") {
      this.istysuccess = true;
    }
    if (this.type === "tywarning") {
      this.istywarning = true;
    }
    if (this.type === "tyerror") {
      this.istyerror = true;
    }
    if(this.type === 'typrimary'){
      this.istyprimary= true
    }
    if(this.type ='tynormal'){
      this.istynormal =true
    }
  },
  methods: {
    BwButtonclick(event) {
      this.$emit("click", event);
    }
  }
};
</script>

<style lang="scss" scoped>
input,
button,
select,
textarea {
  outline: none;
}

@keyframes rotating{
  0% {
    transform: rotate(0deg);
}
  100% {
     transform: rotate(360deg);
}
}

.icon-loading:before{
  vertical-align: middle;
  animation: rotating 5s  linear infinite;
  display: inline-block;

}

.normal {
  min-width: 90px;
  height: 36px;
  border-radius: 10px;
  color: gray
}

.small {
  min-width: 80px;
  height: 30px;
  border-radius: 10px;
  box-sizing: border-box;
}
.big {
  min-width: 100px;
  height: 40px;
  border-radius: 10px;
  box-sizing: border-box;
}
/* 图标水波纹 */
.circle{
  position: relative;
  background-color: black
}
.circle:after {
    content: "";
    display: block;
    position: absolute;
    top: -10px;
    left: -10px;
    right: -10px;
    bottom: -10px;
    pointer-events: none;
    background-color: red;
    border-radius: 50px;
    background-repeat: no-repeat;
    background-position: 50%;
    opacity: 0;
    transition: all .3s;
}
.circle:focus{
    outline: none;
}
.circle:active:after {
    opacity: .3;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    transition: 0s;
}


/* 正常水波纹 */
.tynormal{
  border-color: gray;
  color: gray;
  background-color: white;
  position: relative;
}
.tynormal:hover{
   box-shadow: 0px 0px  3px gray;

}
.tynormal:after {
    content: "";
    display: block;
    position: absolute;
    top: -10px;
    left: -10px;
    right: -10px;
    bottom: -10px;
    pointer-events: none;
    background-color: gray;
    border-radius: 10px;
    background-repeat: no-repeat;
    background-position: 50%;
    opacity: 0;
    transition: all .3s;
}
.tynormal:focus{
    outline: none;
}
.tynormal:active:after {
    opacity: .3;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    transition: 0s;
}

/* 蓝色水波纹 */
.typrimary{
  border-color: #409eff;
  color:white;
  background-color: #409eff;
  position: relative;
}
.typrimary:hover{
  box-shadow: 0px 0px  4px #409eff;
}
.typrimary:after {
    content: "";
    display: block;
    position: absolute;
    top: -10px;
    left: -10px;
    right: -10px;
    bottom: -10px;
    pointer-events: none;
    background-color: #409eff;
    border-radius: 10px;
    background-repeat: no-repeat;
    background-position: 50%;
    opacity: 0;
    transition: all .3s;
}
.typrimary:focus{
    outline: none;
}
.typrimary:active:after {
    opacity: .3;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    transition: 0s;
}

/* 绿色水波纹 */
.tysuccess {
  background-color: #19be6b;
  border-color: #19be6b;
  color: white;
  position: relative;
}

.tysuccess:hover{
 box-shadow: 0px 0px  5px #19be6b;
}
.tysuccess:after {
    content: "";
    display: block;
    position: absolute;
    top: -10px;
    left: -10px;
    right: -10px;
    bottom: -10px;
    pointer-events: none;
    background-color: #19be6b;
    border-radius: 10px;
    background-repeat: no-repeat;
    background-position: 50%;
    opacity: 0;
    transition: all .3s;
}
.tysuccess:focus{
    outline: none;
}
.tysuccess:active:after {
    opacity: .3;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    transition: 0s;
}
/* 黄色水波纹 */
.tywarning {
  background-color: #f90;
  border-color: #f90;
  color: white;
  position: relative;
}
.tywarning:hover{
 box-shadow: 0px 0px  5px #f90;
  }

.tywarning:after {
    content: "";
    display: block;
    position: absolute;
    top: -10px;
    left: -10px;
    right: -10px;
    bottom: -10px;
    pointer-events: none;
    background-color: #f90;
    border-radius: 10px;
    background-repeat: no-repeat;
    background-position: 50%;
    opacity: 0;
    transition: all .3s;
}
.tywarning:focus{
    outline: none;
}
.tywarning:active:after {
    opacity: .3;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    transition: 0s;
}
/* 红色水波纹 */
.tyerror {
  background-color: #ed4014;
  border-color: #ed4014;
  color: white;
  position: relative;
}

.tyerror:hover{
 box-shadow: 0px 0px  5px #ed4014;
}
.tyerror:after {
    content: "";
    display: block;
    position: absolute;
    top: -10px;
    left: -10px;
    right: -10px;
    bottom: -10px;
    pointer-events: none;
    background-color: red;
    border-radius: 10px;
    background-repeat: no-repeat;
    background-position: 50%;
    opacity: 0;
    transition: all .3s;
}
.tyerror:focus{
    outline: none;
}
.tyerror:active:after {
    opacity: .3;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    transition: 0s;
}
</style>
