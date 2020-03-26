<template>
    <div id="main">

        <div id="chart">
            <Transportation></Transportation>
        
        </div>

        <div id="chart">
            <Bus></Bus>
        
        </div>

        <div id="chart">
            <Taxi></Taxi>
        
        </div>

        <div id="chart">
            <LRT></LRT>
        
        </div>
        
    </div>
</template>

<script>

import Transportation from '../Transportation.js'
import Bus from '../Bus.js'
import Taxi from '../Taxi.js'
import LRT from '../LRT.js'

export default {
    components:{
        Transportation, Bus, Taxi, LRT
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