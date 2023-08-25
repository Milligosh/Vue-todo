<script setup>
import { RouterLink } from 'vue-router';
</script>

<template>
<div class="main">
    <div class="top">
    <h1>Manage your tasks Effectively</h1>
    <p>
        Modern Todo list application to help you 
        track your activites and stay productive
    </p>
        <button><RouterLink to="/TodoPage" class="button">Get Started</RouterLink></button>
    </div>
    <div class="img">
        <img src="/src/assets/pic.png" alt="">
    </div>
</div> 
</template>

<style scoped>
.main{
    display:flex;
    margin:0 auto;
    gap:131px
    
}
.top{
    padding-top:102px;
}
img{
    max-width:347px;
    width:100%;
    max-height:347px;
    height:100%;
}
.img{
    padding-top:60px;
}
.button{
    text-decoration: none;
    color:white
}
h1{
    max-width: 333px;
    width:100%;
    color: #000;
    font-family: Inter;
    font-size: 40px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
    letter-spacing: -1.2px;
}
p{
    max-width:324px;
    width:100%;
    color: #000;
    font-family: Inter;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 160%; 
}

button{
    display: inline-flex;
padding: 8px 24px;
align-items: flex-start;
gap: 10px;
margin-top:24px;
border-radius: 8px;
background: #5222D0;
color:white;
border:none
}
</style>