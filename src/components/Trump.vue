<template>
    <div id="main">

        <div id="chart">
            <WeGonnaDie></WeGonnaDie>
        
        </div>
        
    </div>
</template>

<script>

import WeGonnaDie from '../WeGonnaDie.js'

export default {
    components:{
        WeGonnaDie
    }
    
}
</script>>
<style scoped>
#main{
    content:"";
    display:table;
    clear:both;
}
#chart{
  height:240px;
  width:300px;
  border-style: solid;
  border-color:rgb(155, 84, 84);
  border-width: 1px;
  padding-bottom: 60px;
  float:left;
}
</style>