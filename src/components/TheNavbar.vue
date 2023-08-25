<script setup>
import { RouterLink } from 'vue-router';
</script>

<template>
     
     <div class="main">
        <h3>Todo App</h3>
        <div class="right">
            <h3><RouterLink to="/" class="h3" active-class="active-link"> Home</RouterLink></h3>
            <h3><RouterLink to="/todoPage" class="h3" active-class="active-link"> Todos</RouterLink></h3>
        </div>
     </div>
</template>

<style scoped>
.main{
    max-width: 800px;
    width:100%;
    max-height: 64px;
    height:100%;
    border-radius: 8px;
    background-color: #fff;
    width:100%;
    display:flex;
    justify-content: space-between;
    margin: 0 auto;
    padding:23px 42px;
}
.right{
    display:flex;
    gap:20px
}

.h3{
    text-decoration: none;
}


.active-link {
    color: white; 
    background-color: blue;
}
</style>