//柱形图
(function(){
  //实例化对象
  var myChart = echarts.init(document.querySelector(".bar .chart"));
  //指定配置项和数据
  var option = {
    //整体配色color:["#2b73af"]
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        type: 'shadow'
      }
    },
    grid: {
      left: '0%',
      top: "10px",
      right: '0%',
      bottom: '4%',
      containLabel: true
    },
    xAxis: [
      {
        type: 'category',
        data: ["本科","博士","大专","硕士"],
        axisTick: {
          alignWithLabel: true
        } ,
        axisLabel:{
          color:"rgba(255,255,255,0.6)",
          fontSize:"12"
        },
        axisLine:{//不显示x轴样式
          show:false
        }
      }
    ], 
    yAxis: [
      {
        type: "value",
        // 修改刻度标签 相关样式
        axisLabel: {
          color: "rgba(255,255,255,.6) ",
          fontSize: 12
        },
        // y轴的线条改为了 2像素
        axisLine: {
          lineStyle: {
            color: "rgba(255,255,255,.1)",
            width: 2
          }
        },
        // y轴分割线的颜色
        splitLine: {
          lineStyle: {
            color: "rgba(255,255,255,.1)"
          }
        }
      }
    ],
    series: [{
      name:"学历情况",
      type: 'bar',
      barWidth:"30%",
      data: [24558,189,7172,2976],
       itemStyle: {
          normal:{  
            barBorderRadius: 8,//圆角
          color: function (params){
              var colorList = ['#2b73af','#f33b1f','#ffc408','#806d9e'];
              return colorList[params.dataIndex];
          }
      },
    },
}]
  };
  //3.把配置项给到实例对象
  myChart.setOption(option);
  // 4.图表自适应
  window.addEventListener("resize", function() {
    myChart.resize();
  });
})();


//柱状图2
(function() {
  //实例化
  var myChart = echarts.init(document.querySelector(".bar2 .chart"));
  var myColor = ['#2b73af','#f33b1f','#ffc408','#806d9e',"#2bae85"]
  var max = 300
  var option = {
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        type: 'shadow'
      }
    },
      grid: {
          left: '11%',
          top: '10%',
          right: '10%',
          bottom: '8%',
          containLabel: true,
      },
      xAxis: [
          {
              max: 300,
              show: false,
          },
      ],
      yAxis: [
          {
              axisTick: 'none',
              axisLine: 'none',
              offset: '27',
              axisLabel: {
                  textStyle: {
                      color: '#ffffff',
                      fontSize: '16',
                  },
              },
              inverse:true,
              data: ["热联","荣峰","智联","节点","佳许"],
          },{
               name: 'outer',
              show: false,
               inverse:true,
              data: [],
          },
          {
              name: 'bg',
              show: false,
               inverse:true,
              data: [],
          },
      ],
      series: [
          {
              name: '月薪',
              type: 'bar',
              yAxisIndex: 0,
  
              data: [250,85,75,75,72.5],
              label: {
                  normal: {
                      show: true,
                      position: 'right',
                      formatter:"{c}",
                      textStyle: {
                          color: '#ffffff',
                          fontSize: '16',
                      },
                  },
              },
              barWidth: 12,
              itemStyle: {
                  normal: {
                    barBorderRadius: 20, 
                      color: function (params) {
                          var num = myColor.length;
                          return myColor[params.dataIndex];
                      },
                  },
              },
              z: 2,
              }, {
                  type: 'bar',
                  yAxisIndex: 1,
                  data: [300,300,300,300,300],
                  barWidth: 20,
                  itemStyle: {
                      normal: {
                          color: '#0e2147',
                          barBorderRadius: 5,
                      }
                  },
                  z: 1,
          },
          {
              //name: '外框',
              type: 'bar',
              yAxisIndex: 2,
              barGap: '-100%',
              data: [300,300,300,300,300],
              barWidth: 24,
              itemStyle: {
                  normal: {
                      color: function (params) {
                          var num = myColor.length;
                          return myColor[params.dataIndex];
                      },
                      barBorderRadius: 5,
                  },
              },
              z: 0,
          },
          {
              //name: '外圆',
              type: 'scatter',
              hoverAnimation: false,
              data: [0, 0, 0, 0,0],
              // yAxisIndex: 2,
              symbolSize: 25,
              itemStyle: {
                  normal: {
                      color: function (params) {
                          var num = myColor.length;
                          return myColor[params.dataIndex % num];
                      },
                      opacity: 1,
                  },
              },
              z: 2,
          },
      ],
  };
  
    //3.把配置项给到实例对象
    myChart.setOption(option); 
    window.addEventListener("resize", function() {
      myChart.resize();
    });
})();



//词云图
(function(){

  var myChart = echarts.init(document.querySelector(".scatter .chart"));
    var option = {
    title:{
      text:'词云',
      textStyle:{
        color:'#f9f4dc'
      }
    },
    backgroundColor:'#000',
    series:[{
      type:'wordCloud',

      //网格尺寸,尺寸越大，字体之间的间隔越大
      grideSize:2,
      //字体的最大与最小字号
      sizeRange:[8,16],
      shape:'star',
      textStyle:{
        normal:{
          //字体随机颜色
          color:function(){
            return 'rgb('+[
              Math.round(Math.random()*255),
              Math.round(Math.random()*255),
              Math.round(Math.random()*255)
            ].join(',')+')';
          }
        },
        emphasis:{
          //阴影距离
          shadowBlur:1,
          //阴影颜色
          shadowColor:'#111'
        }
      },
      data:data1
    }]
  };
  myChart.setOption(option);
  window.addEventListener("resize", function() {
    myChart.resize();
  });
        
})();


//树形图
(function(){
    var data1 = [
  {name:'安徽',value:3},
  {name:'广东',value:3},
  {name:'广西',value:11},
  {name:'贵州',value:13},
  {name:'海南',value:4},
  {name:'河南',value:4},
  {name:'黑龙江',value:1},
  {name:'湖南',value:2},
  {name:'江西',value:6},
  {name:'辽宁',value:1},
  {name:'陕西',value:2},
  {name:'四川',value:1},
  {name:'新疆',value:1},
  {name:'云南',value:2},
  {name:'重庆',value:2},
  ]

  var myChart = echarts.init(document.querySelector(".tree .chart"));
  const themeColor = '#00ffff';
const fontColor = '#040624'
const childrenColor = '#39fdc0';
let cityList = ['后端开发工程师', '数据挖掘工程师', '算法工程师', '游戏开发', '前端开发工程师', '数据分析工程师', '数据处理工程师', '软件工程师'];
const seriesTree = () => {
    return cityList.map((item, index) => {
        return {
            name: item,
            value: index,
            symbolSize: 85,
            label: {
                position: 'inside',
            },
            lineStyle: {
                color: childrenColor
            },
            itemStyle: {
                borderColor: childrenColor,
                color: childrenColor,
            },
        };
    });
};

option = {
    // 工具栏
    toolbox: {
        show: true,
        feature: {
            borderColor: fontColor
        },
    },
    
    series: [
        {
            type: 'tree',
            layout: 'radial',   // 径向布局
            symbol: 'circle',   // 设置样式
            hoverAnimation: true,           // hover样式
            animationDurationUpdate: 1000, // 数据更新动画时长
            expandAndCollapse: true,       // 子树折叠和展开的交互
            roam: true,                    // 开始鼠标缩放和平移漫游
            symbolSize: 10,
            label: {
                color: fontColor,
                rotate: 0,
            },
            data: [
                {
                    name: 'Python',
                    value: 0,
                    symbolSize: 70,
                    color: '#f40',
                    itemStyle: {
                        borderColor: themeColor,
                        color: themeColor,
                    },
                    label: {
                        position: 'inside',
                    },
                    children: seriesTree()
                },
            ],
        },
    ],
};

  myChart.setOption(option);
  window.addEventListener("resize", function() {
    myChart.resize();
  });
})();


//玫瑰图
(function(){
  var myChart = echarts.init(document.querySelector(".pie .chart"));
var colorArr = ['#218de0', '#01cbb3', '#85e647', '#5d5cda', '#05c5b0', '#c29927'];
var colorAlpha = [
    'rgba(60,170,211,0.05)',
    'rgba(1,203,179,0.05)',
    'rgba(133,230,71,0.05)',
    'rgba(93,92,218,0.05)',
    'rgba(5,197,176,0.05)',
    'rgba(194,153,39,0.05)',
];

option = {

    grid: {
        left: -100,
        top: 50,
        bottom: 10,
        right: 10,
        containLabel: true,
    },
    tooltip: {
        trigger: 'item',
        formatter: '{b}人数: {c} ({d}%)',
    },

    series: [
        {
            stack: 'a',
            type: 'pie',
            radius: '80%',
            roseType: 'radius',
            zlevel: 10,
            radius: [20, 90],
            startAngle: 100,
            label: {
                normal: {
                    show: true,
                    position: 'inside',
                    formatter: '{b}',
                    textStyle: {
                        fontSize: 10,
                    },
                },
            },
            data: [
                {
                    value: 5414,
                    name: '0-10',
                    itemStyle: {
                        borderColor: colorArr[0],
                        borderWidth: 2,
                        shadowBlur: 20,
                        shadowColor: '#41a8f8',
                        shadowOffsetx: 25,
                        shadowOffsety: 20,
                        color: colorAlpha[0],
                    },
                },
                {
                    value: 16412,
                    name: '10-20',
                    itemStyle: {
                        borderColor: colorArr[2],
                        borderWidth: 2,
                        shadowBlur: 20,
                        shadowColor: colorArr[2],
                        shadowOffsetx: 25,
                        shadowOffsety: 20,
                        color: colorAlpha[2],
                    },
                },
                {
                    value: 7681,
                    name: '20-30',
                    itemStyle: {
                        borderColor: colorArr[5],
                        borderWidth: 2,
                        shadowBlur: 20,
                        shadowColor: colorArr[5],
                        shadowOffsetx: 25,
                        shadowOffsety: 20,
                        color: colorAlpha[4],
                    },
                },
                {
                    value: 2974,
                    name: '30-40',
                    itemStyle: {
                        borderColor: colorArr[1],
                        borderWidth: 2,
                        shadowBlur: 20,
                        shadowColor: colorArr[1],
                        shadowOffsetx: 25,
                        shadowOffsety: 20,
                        color: colorAlpha[1],
                    },
                },

                {
                    value: 2464,
                    name: '50+',
                    itemStyle: {
                        borderColor: colorArr[3],
                        borderWidth: 2,
                        shadowBlur: 20,
                        shadowColor: colorArr[3],
                        shadowOffsetx: 25,
                        shadowOffsety: 20,
                        color: colorAlpha[3],
                    },
                },
            ],
        },
    ],
};

  myChart.setOption(option);
  window.addEventListener("resize", function() {
    myChart.resize();
  });
})();



//地图模块
(function(){
  var myChart = echarts.init(document.querySelector(".map .chart"));
  var chinaGeoCoordMap = {
    黑龙江: [127.9688, 45.368],
    内蒙古: [110.3467, 41.4899],
    吉林: [125.8154, 44.2584],
    北京市: [116.4551, 40.2539],
    辽宁: [123.1238, 42.1216],
    河北: [114.4995, 38.1006],
    天津: [117.4219, 39.4189],
    山西: [112.3352, 37.9413],
    陕西: [109.1162, 34.2004],
    甘肃: [103.5901, 36.3043],
    宁夏: [106.3586, 38.1775],
    青海: [101.4038, 36.8207],
    新疆: [87.9236, 43.5883],
    西藏: [91.11, 29.97],
    四川: [103.9526, 30.7617],
    重庆: [108.384366, 30.439702],
    山东: [117.1582, 36.8701],
    河南: [113.4668, 34.6234],
    江苏: [118.8062, 31.9208],
    安徽: [117.29, 32.0581],
    湖北: [114.3896, 30.6628],
    浙江: [119.5313, 29.8773],
    福建: [119.4543, 25.9222],
    江西: [116.0046, 28.6633],
    湖南: [113.0823, 28.2568],
    贵州: [106.6992, 26.7682],
    云南: [102.9199, 25.4663],
    广东: [113.12244, 23.009505],
    广西: [108.479, 23.1152],
    海南: [110.3893, 19.8516],
    上海: [121.4648, 31.2891],
   };
   
    
   var chinaDatas = [
    [
     {
      name: '黑龙江',
      value:9,
     },
    ],
    [
     {
      name: '内蒙古',
      value: 8,
     },
    ],
    [
     {
      name: '北京市',
      value: 22.3,
     },
    ],
    [
     {
      name: '吉林',
      value: 13,
     },
    ],
    [
     {
      name: '辽宁',
      value:12,
     },
    ],
    [
     {
      name: '河北',
      value: 11,
     },
    ],
    [
     {
      name: '天津',
      value: 14.5,
     },
    ],
    [
     {
      name: '山西',
      value: 11,
     },
    ],
    [
     {
      name: '陕西',
      value: 9,
     },
    ],
    [
     {
      name: '甘肃',
      value: 7,
     },
    ],
    [
     {
      name: '宁夏',
      value: 6.4,
     },
    ],
    [
     {
      name: '青海',
      value: 7,
     },
    ],
    [
     {
      name: '新疆',
      value: 6,
     },
    ],
    [
     {
      name: '西藏',
      value: 8,
     },
    ],
    [
     {
      name: '四川',
      value: 11.2,
     },
    ],
    [
     {
      name: '重庆',
      value: 13.4,
     },
    ],
     [
     {
      name: '广东',
      value: 18.2,
     },
    ],
    [
     {
      name: '山东',
      value: 11.3,
     },
    ],
    [
     {
      name: '河南',
      value: 12.2,
     },
    ],
    [
     {
      name: '江苏',
      value: 14.3,
     },
    ],
    [
     {
      name: '安徽',
      value: 11.2,
     },
    ],
    [
     {
      name: '湖北',
      value: 13.1,
     },
    ],
    [
     {
      name: '浙江',
      value: 17,
     },
    ],
    [
     {
      name: '福建',
      value:12.1,
     },
    ],
   
    [
     {
      name: '湖南',
      value: 13.1,
     },
    ],
    [
     {
      name: '贵州',
      value: 11.2,
     },
    ],
    [
     {
      name: '广西',
      value: 10.8,
     },
    ],
    [
     {
      name: '海南',
      value: 11.2,
     },
    ],
    [
      {
       name: '江西',
       value: 11,
      },
     ],
    [
     {
      name: '上海',
      value: 17,
     },
    ],
   ];
   
   
   
   var convertData = function (data) {
    var res = [];
    for (var i = 0; i < data.length; i++) {
     var dataItem = data[i];
     var fromCoord = chinaGeoCoordMap[dataItem[0].name];
     var toCoord = [110.3893, 19.8516];
     if (fromCoord && toCoord) {
      res.push([
       {
        coord: fromCoord,
        value: dataItem[0].value,
       },
       {
        coord: toCoord,
       },
      ]);
     }
    }
    return res;
   };
   
    
   var series = [];
   [['海南', chinaDatas]].forEach(function (item, i) {
    console.log(item);
    series.push(
     {
      type: 'lines',
      zlevel: 1,
      effect: {
       show: true,
       period: 4, //箭头指向速度，值越小速度越快
       trailLength: 0.02, //特效尾迹长度[0,1]值越大，尾迹越长重
       symbol: 'arrow', //箭头图标
       symbolSize: 5, //图标大小
      },
      lineStyle: {
       normal: {
        width: 1, //尾迹线条宽度
        opacity: 1, //尾迹线条透明度
        curveness: 0.3, //尾迹线条曲直度
       },
      },
      data: convertData(item[1]),
     },
     {
      type: 'effectScatter',
      coordinateSystem: 'geo',
      zlevel: 2,
      rippleEffect: {
       //涟漪特效
       period: 4, //动画时间，值越小速度越快
       brushType: 'stroke', //波纹绘制方式 stroke, fill
       scale: 4, //波纹圆环最大限制，值越大波纹越大
      },
      label: {
       normal: {
        show: true,
        position: 'right', //显示位置
        offset: [5, 0], //偏移设置
        formatter: function (params) {
         //圆环显示文字
         return params.data.name;
        },
        fontSize: 10,
       },
       emphasis: {
        show: true,
       },
      },
      symbol: 'circle',
      symbolSize: function (val) {
       return 3 + val[2] * 1; //圆环大小
      },
      itemStyle: {
       normal: {
        show: false,
        color: '#FFA54F',
       },
      },
      data: item[1].map(function (dataItem) {
       return {
        name: dataItem[0].name,
        value: chinaGeoCoordMap[dataItem[0].name].concat([dataItem[0].value]),
       };
      }),
     },
     //被攻击点
     {
      type: 'scatter',
      coordinateSystem: 'geo',
      zlevel: 2,
      rippleEffect: {
       period: 4,
       brushType: 'stroke',
       scale: 4,
      },
      label: {
       normal: {
        show: true,
        position: 'right',
        //offset:[5, 0],
        color: '#0f0',
        formatter: '{b}',
        textStyle: {
         color: '#0f0',
        },
       },
       emphasis: {
        show: true,
        color: '#FFA54F',
       },
      },
      symbol: 'pin',
      symbolSize: 50,
      data: [
       {
        name: item[0],
        value: chinaGeoCoordMap[item[0]].concat([10]),
       },
      ],
     }
    );
   });
   
   option = {
    tooltip: {
     trigger: 'item',
     backgroundColor: 'rgba(166, 200, 76, 0.82)',
     borderColor: '#',
     showDelay: 0,
     hideDelay: 0,
     enterable: true,
     transitionDuration: 0,
     extraCssText: 'z-index:100',
     formatter: function (params, ticket, callback) {
      //根据业务自己拓展要显示的内容
      var res = '';
      var name = params.name;
      var value = params.value[params.seriesIndex + 1];
      res = "<span style='color:#fff;'>" + name + '</span><br/>数据：' + value;
      return res;
     },
    },
    visualMap: {
     //图例值控制
     min: 5,
     max: 25,
     calculable: true,
     show: true,
     color: ['#f44336', '#fc9700', '#ffde00', '#ffde00', '#00eaff'],
     textStyle: {
      color: '#fff',
     },
    },
    geo: {
     map: 'china',
     zoom: 1.2,
     label: {
      emphasis: {
       show: false,
      },
     },
     roam: true, //是否允许缩放
     itemStyle: {
      normal: {
       color: 'rgba(51, 69, 89, .5)', //地图背景色
       borderColor: '#516a89', //省市边界线00fcff 516a89
       borderWidth: 1,
      },
      emphasis: {
       color: 'rgba(37, 43, 61, .5)', //悬浮背景
      },
     },
    },
    series: series,
   };
  myChart.setOption(option);
  window.addEventListener("resize", function() {
    myChart.resize();
  });
})();
