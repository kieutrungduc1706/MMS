import React, { useLayoutEffect } from 'react'
import * as am5 from "@amcharts/amcharts5";
import * as am5xy from "@amcharts/amcharts5/xy";
import am5themes_Micro from "@amcharts/amcharts5/themes/Micro";

let tickers = [
   "pH","BOD5", "COD", "TSS", "NH4Plus", "NO3Minus", "PO45Minus", "SumN", "SumP", "Coliform" 
  ];

export default function MiniChart (props) {
  useLayoutEffect(() => {
    // chart.set("scrollbarX", am5.Scrollbar.new(root, { orientation: "horizontal" }));
    let root = am5.Root.new("chartdiv");
    for (var i = 0; i < tickers.length; i++) {
      let ticker = tickers[i];
      let positive = am5.color(0x50b300);
      let negative = am5.color(0xb30000);
    
      let data = generateData(20);
      let change = Math.round((data[data.length - 1].value / data[0].value - 1) * 1000) / 10;
      let color = change < 0 ? negative : positive;
    
      let div = document.getElementById("chartdiv");
      div.style.overflow = "auto";
    
      let row = document.createElement("div");
      // row.style.borderBottom = "1px solid #eee";
      row.style.alignItems = 'center'
      row.style.clear = "left";
      row.style.justifyContent = 'space-between';
      row.style.height = '10vh'
      row.style.padding = '20px'
      div.appendChild(row);
    
      let col1 = document.createElement("div");
      col1.innerHTML = ticker;
      col1.style.fontSize = "1em";
      col1.style.width = "10%";
      col1.style.padding = "0.2em 0.4em";
      col1.style.float = "left";
      col1.style.marginRight = "40%";
      row.appendChild(col1);

      let col3 = document.createElement("div");
      col3.style.fontSize = "1em";
      col3.style.width = "33%";
      col3.style.height = "35px";
      col3.style.padding = "0.2em 0.4em";
      col3.style.float = "left";
      row.appendChild(col3);
      createValueChart(col3, data, color);

    }

    return () => {
      root.dispose();
      // let div = document.getElementById("chartdiv");
      // div.innerHTML = "";
    };
  }, []);

  function generateData(count) {
    let date = new Date();
    date.setHours(0, 0, 0, 0);
    let value = Math.round(Math.random() * 100);
    let volume = Math.round(Math.random() * 10000);
  
    let data = [];
    for (var i = 0; i < count; ++i) {
      value = Math.round((Math.random() * 6 - 3) + value);
      volume = Math.round((Math.random() * 1000 - 500) + volume);
      if (volume < 0) {
        volume = 0;
      }
      am5.time.add(date, "day", 1);
      data.push({
        date: date.getTime(),
        value: value,
        volume: volume
      });
    }
    return data;
  }
  function createValueChart(div, data, color) {
    let root = am5.Root.new(div);
  
    root.setThemes([
      am5themes_Micro.new(root)
    ]);
  
    let chart = root.container.children.push(am5xy.XYChart.new(root, {
      panX: false,
      panY: false,
      wheelX: "none",
      wheelY: "none"
    }));
    
    chart.plotContainer.set("wheelable", false);
    chart.zoomOutButton.set("forceHidden", true);
  
    let xAxis = chart.xAxes.push(am5xy.DateAxis.new(root, {
      maxDeviation: 0,
      baseInterval: { timeUnit: "day", count: 1 },
      renderer: am5xy.AxisRendererX.new(root, {})
    }));
  
    let yAxis = chart.yAxes.push(am5xy.ValueAxis.new(root, {
      strictMinMax: true,
      extraMax:0.02,
      extraMin:0.02,
      renderer: am5xy.AxisRendererY.new(root, {})
    }));
  
  
    let series = chart.series.push(am5xy.LineSeries.new(root, {
      xAxis: xAxis,
      yAxis: yAxis,
      valueYField: "value",
      valueXField: "date",
      stroke: color
    }));
  
    series.strokes.template.setAll({
      strokeWidth: 2
    });
    
    series.data.setAll(data);
  }
  
//   function createVolumeChart(div, data) {
//     let root = am5.Root.new(div);
  
//     root.setThemes([
//       am5themes_Micro.new(root)
//     ]);
  
//     let chart = root.container.children.push(am5xy.XYChart.new(root, {
//       panX: false,
//       panY: false,
//       wheelX: "none",
//       wheelY: "none"
//     }));
    
//     chart.plotContainer.set("wheelable", false);
//     chart.zoomOutButton.set("forceHidden", true);
  
//     let xAxis = chart.xAxes.push(am5xy.DateAxis.new(root, {
//       maxDeviation: 0,
//       baseInterval: { timeUnit: "day", count: 1 },
//       renderer: am5xy.AxisRendererX.new(root, {})
//     }));
  
//     let yAxis = chart.yAxes.push(am5xy.ValueAxis.new(root, {
//       renderer: am5xy.AxisRendererY.new(root, {})
//     }));
  
  
//     let series = chart.series.push(am5xy.ColumnSeries.new(root, {
//       xAxis: xAxis,
//       yAxis: yAxis,
//       valueYField: "volume",
//       valueXField: "date",
//       fill: am5.color(0x999999)
//     }));
    
//     series.data.setAll(data);
//   }
  return (
    <div id="chartdiv" style={{ width: "100%", height: "100%", position: 'absolute', zIndex:10}}></div>
  )
}