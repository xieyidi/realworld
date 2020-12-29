import Vue from 'vue'
import dayjs from 'dayjs'
Vue.filter('date',(v,format='YYYY-MM-DD')=>{
    return dayjs(v).format(format || 'YYYY-MM-DD')
})