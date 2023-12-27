import * as echarts from "echarts/core";

export const dataVolume = [
  {
    type: "line",
    smooth: "true",
    emphasis: {
      focus: "series"
    },
    showSymbol: false,
    data: [
      17423, 14210, 16764, 17879, 13478, 18373, 13891, 12171, 15520, 17269,
      13724, 16707, 18188, 13879, 15626, 13635, 16177, 13156, 18793, 12598,
      18200, 15316, 17552, 11874, 19771, 15038, 16838, 12029, 19793, 16117,
      12879, 17478, 11373, 19891, 15171, 12520, 16269, 19724, 13707, 15188
    ],
    areaStyle: {
      color:new echarts.graphic.LinearGradient(0, 0, 0, 1, [
              { offset: 0, color: "green" },
              { offset: 0.05, color: "green" },
              { offset: 1, color: "#142028" }
            ])
    }
  },
];