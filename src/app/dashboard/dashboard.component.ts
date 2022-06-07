import { Component, OnInit } from '@angular/core';
import { ForecastService } from '../forecast.service';
import * as Highcharts from 'highcharts';
import {formatDate} from '@angular/common';
declare var require: any;

let Boost = require('highcharts/modules/boost');
let noData = require('highcharts/modules/no-data-to-display');
let More = require('highcharts/highcharts-more');

Boost(Highcharts);
noData(Highcharts);
More(Highcharts);
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
   predict: any;
   
  public options: any = {
    chart: {
      
      type: "spline"
   },
   title: {
      text: "FORECASTED TARLAC COVID-19 CASES"
   },
   subtitle: {
      
   },
   xAxis:{
      categories:[]
    
         // categories:["Day 1", "Day 2", "Day 3", "Day 4", "Day 5", "Day 6",
         // "Day 7", "Day 8", "Day 9", "Day 10", "Day 11", "Day 12", "Day 13", "Day 14", "Day 15",
         // "Day 16", "Day 17", "Day 18", "Day 19", "Day 20", "Day 21"]
   },
   yAxis: {          
      title:{
         text:"Number of Cases"
      } 
   },
   tooltip: {
      valueSuffix:"Cases"
   },
   series: [{
     type: 'spline',
     name: 'Forecasted',
     data: [] 
   }
  
  ]
 };


   dateTime: Date;

 

constructor(private fs: ForecastService ) { }




token: any;

ngOnInit(): void {
   Highcharts.chart('container', this.options);
   this.fs.listData().subscribe((response)=>{
     this.options.series[0]['data'] = response[0];
      this.options.subtitle.text = "Current Date: "+ cValue
      this.options.xAxis.categories[0] = dayv1
      this.options.xAxis.categories[1] = dayv2
      this.options.xAxis.categories[2] = dayv3
      this.options.xAxis.categories[3] = dayv4
      this.options.xAxis.categories[4] = dayv5
      this.options.xAxis.categories[5] = dayv6
      this.options.xAxis.categories[6] = dayv7
      this.options.xAxis.categories[7] = dayv8
      this.options.xAxis.categories[8] = dayv9
      this.options.xAxis.categories[9] = dayv10
      this.options.xAxis.categories[10] = dayv11
      this.options.xAxis.categories[11] = dayv12
      this.options.xAxis.categories[12] = dayv13
      this.options.xAxis.categories[13] = dayv14
      this.options.xAxis.categories[14] = dayv15
      this.options.xAxis.categories[15] = dayv16
      this.options.xAxis.categories[16] = dayv17
      this.options.xAxis.categories[17] = dayv18
      this.options.xAxis.categories[18] = dayv19
      this.options.xAxis.categories[19] = dayv20
      this.options.xAxis.categories[20] = dayv21
      
     Highcharts.chart('container', this.options);
   });
  this.dateTime = new Date()
const currentDate = new Date();
const cValue = formatDate(currentDate, 'MMMM d, y ', 'en-US');

const day1= new Date (cValue)
      day1.setDate(day1.getDate()+1)
const dayv1= formatDate(day1, 'MMMM d, y ', 'en-US');

const day2= new Date (dayv1)
      day2.setDate(day2.getDate()+1)
const dayv2= formatDate(day2, 'MMMM d, y ', 'en-US');

const day3= new Date (dayv2)
      day3.setDate(day3.getDate()+1)
const dayv3= formatDate(day3, 'MMMM d, y ', 'en-US');

const day4= new Date (dayv3)
      day4.setDate(day4.getDate()+1)
const dayv4= formatDate(day4, 'MMMM d, y ', 'en-US');

const day5= new Date (dayv4)
      day5.setDate(day5.getDate()+1)
const dayv5= formatDate(day5, 'MMMM d, y ', 'en-US');

const day6= new Date (dayv5)
      day6.setDate(day6.getDate()+1)
const dayv6= formatDate(day6, 'MMMM d, y ', 'en-US');

const day7= new Date (dayv6)
      day7.setDate(day7.getDate()+1)
const dayv7= formatDate(day7, 'MMMM d, y ', 'en-US');

const day8= new Date (dayv7)
      day8.setDate(day8.getDate()+1)
const dayv8= formatDate(day8, 'MMMM d, y ', 'en-US');

const day9= new Date (dayv8)
      day9.setDate(day9.getDate()+1)
const dayv9= formatDate(day9, 'MMMM d, y ', 'en-US');

const day10= new Date (dayv9)
      day10.setDate(day10.getDate()+1)
const dayv10= formatDate(day10, 'MMMM d, y ', 'en-US');

const day11= new Date (dayv10)
      day11.setDate(day11.getDate()+1)
const dayv11= formatDate(day11, 'MMMM d, y ', 'en-US');

const day12= new Date (dayv11)
      day12.setDate(day12.getDate()+1)
const dayv12= formatDate(day12, 'MMMM d, y ', 'en-US');

const day13= new Date (dayv12)
      day13.setDate(day13.getDate()+1)
const dayv13= formatDate(day13, 'MMMM d, y ', 'en-US');

const day14= new Date (dayv13)
      day14.setDate(day14.getDate()+1)
const dayv14= formatDate(day14, 'MMMM d, y ', 'en-US');

const day15= new Date (dayv14)
      day15.setDate(day15.getDate()+1)
const dayv15= formatDate(day15, 'MMMM d, y ', 'en-US');

const day16= new Date (dayv15)
      day16.setDate(day16.getDate()+1)
const dayv16= formatDate(day16, 'MMMM d, y ', 'en-US');

const day17= new Date (dayv16)
      day17.setDate(day17.getDate()+1)
const dayv17= formatDate(day17, 'MMMM d, y ', 'en-US');

const day18= new Date (dayv17)
      day18.setDate(day18.getDate()+1)
const dayv18= formatDate(day18, 'MMMM d, y ', 'en-US');

const day19= new Date (dayv18)
      day19.setDate(day19.getDate()+1)
const dayv19= formatDate(day19, 'MMMM d, y ', 'en-US');

const day20= new Date (dayv19)
      day20.setDate(day20.getDate()+1)
const dayv20= formatDate(day20, 'MMMM d, y ', 'en-US');

const day21= new Date (dayv20)
      day21.setDate(day21.getDate()+1)
const dayv21= formatDate(day21, 'MMMM d, y ', 'en-US');

// const dayz = new Date()
// const dayzCon = formatDate(dayz, 'MMMM d, y', 'en-US')

// const dayArr = [];

// for (let index = 1; index <= 21; index++) {
//      dayzCon.setDate(dayzCon.getDate()+index)
//    const element = array[index];
   
// }

 }

   
  
  
  
}