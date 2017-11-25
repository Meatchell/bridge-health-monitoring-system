import Vue from 'vue'
import Router from 'vue-router'
import homePage from '@/view/homePage'
import dataAnalysis from '@/view/subPage/dataAnalysis'
import dataComparison from '@/view/subPage/dataAnalysisSubPage/dataComparison'
import dataAssociation from '@/view/subPage/dataAnalysisSubPage/dataAssociation'
import dataReport from '@/view/subPage/dataAnalysisSubPage/dataReport'
import history from '@/view/subPage/dataAnalysisSubPage/history'
import inspectLog from '@/view/subPage/inspectLog'
import expert from '@/view/subPage/expert'
import message from '@/view/subPage/message'
import realTimeWarning from '@/view/subPage/realTimeWarning'
import warningChart from '@/view/subPage/warningChart'
import demand from '@/view/subPage/demand'

Vue.use(Router)
export default new Router({
  routes: [
    {
      path: '/',
      name: 'hemePage',
      component: homePage
    },
    {
      path: '/monitoring',
      name: '实时检测',
      component: homePage
    },
    {
      path: '/dataAnalysis',
      name: '数据分析',
      component: dataAnalysis,
      children: [
        {
          path: '/',
          name: '数据对比默认页',
          component: history
        },
        {
          path: '/history',
          name: '历史数据',
          component: history
        },
        {
          path: '/dataComparison',
          name: '数据对比',
          component: dataComparison
        },
        {
          path: '/dataAssociation',
          name: '数据关联',
          component: dataAssociation
        },
        {
          path: '/dataReport',
          name: '数据报表',
          component: dataReport
        }
      ]
    },
    {
      path: '/inspectLog',
      name: '巡查记录',
      component: inspectLog
    },
    {
      path: '/expert',
      name: '专家库',
      component: expert
    },
    {
      path: '/realTimeWarning',
      name: '事实预警',
      component: realTimeWarning
    },
    {
      path: '/warningChart',
      name: '告警检测走势图',
      component: warningChart
    },
    {
      path: '/message',
      name: '消息',
      component: message
    },
    {
      path: '/demand',
      name: '需求广场',
      component: demand
    }
  ]
})
