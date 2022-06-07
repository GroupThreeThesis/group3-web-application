import { Component, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';
import { HighchartsChartModule } from 'highcharts-angular';
import { AnalysisService } from '../analysis.service';
import { DatePipe } from '@angular/common';
import { TotalCovidCases } from 'app/analysis.model';
import {formatDate} from '@angular/common';
declare var require: any;

let Boost = require('highcharts/modules/boost');
let noData = require('highcharts/modules/no-data-to-display');
let More = require('highcharts/highcharts-more');

Boost(Highcharts);
noData(Highcharts);
More(Highcharts);
@Component({
  selector: 'app-analysis',
  templateUrl: './analysis.component.html',
  styleUrls: ['./analysis.component.css']
})
export class AnalysisComponent implements OnInit {
   totalCovidCases:any
   
  public mortalityOptions: any = {
    chart : {
      plotBorderWidth: null,
      plotShadow: false
   },
   title : {
      text: 'Mortality Rate'   
   },
   subtitle: {
     
   },
   tooltip : {
      pointFormat: '{series.name}: <b>{point.y}%</b>'
   },
   plotOptions : {
      pie: {
         allowPointSelect: true,
         cursor: 'pointer',
         dataLabels: {
            enabled: true,
            format: '<b>{point.name}</b>:<b>{point.y}%</b>',
            style: {
               color: (Highcharts.theme)||
               'black'
            }
         },
         showInLegend: true
         
      }
      
   },
   series: [{
    type: 'pie',
    name: 'Rate',
    data: [{
        name: 'Mortality Rate',//This is data[0]
        sliced: true,
        selected: true,
        color: 'black'
    },{
       name: 'of Total COVID-19 CASES IN TARLAC',
       color:'green'
      //This is data[1]
    }]

  }]
    
}
public recoveryOptions: any = {
   chart : {
     plotBorderWidth: null,
     plotShadow: false
  },
  title : {
     text: 'Recovery Rate'   
  },
  subtitle:{

  },
  tooltip : {
     pointFormat: '{series.name}: <b>{point.y}%</b>'
  },
  plotOptions : {
     pie: {
        allowPointSelect: true,
        cursor: 'pointer',
        dataLabels: {
           enabled: true,
           format: '<b>{point.name}</b>:<b>{point.y}%</b>',
           style: {
              color: (Highcharts.theme)||
              'black'
           }
          
        },
        showInLegend: true
        
     }
     
  },
  series: [{
   type: 'pie',
   name: 'Rate',
   data: [{
       name: 'Recovery Rate',//This is data[0]
       sliced: true,
       selected: true,
       color: 'blue'
   },{
      name: 'of Total COVID-19 CASES IN TARLAC',
     //This is data[1]
     color:'green'
   }]

 }]

   
}
public casesbymunicipalityOptions : any = {
   chart: {
      type: 'column'
   },
   title: {
      text: 'Tarlac COVID-19 Cases by Municipality'
   },
   subtitle:{
     
   },
   xAxis:{
      categories: ['Anao','Bamban','Camiling','Capas','Concepcion','Gerona','Lapaz',
      'Mayantoc','Moncada','Paniqui','Pura','Ramos','San Clemente','San Jose',
      'San Miguel','Sta. Ignacia','Tarlac City','Victoria'],
      crosshair: true ,
      color: 'black'
   },     
   yAxis : {
      min: 0,
      title: {
         text: 'Total COVID Cases'         
      }      
   },
   tooltip : {
      headerFormat: '<span style = "font-size:10px">{point.key}</span><table>',
      pointFormat: '<tr><td style = "color:{series.color};padding:0">{series.name}: </td>' +
         '<td style = "padding:0"><b>{point.y}</b></td></tr>', footerFormat: '</table>', shared: true, useHTML: true
   },
   plotOptions : {
      column: {
         pointPadding: 0.2,
         borderWidth: 0
      }
   },
   series: [{
      name: 'Cases',
      data: [],
      color: 'green'
   }]
}

    
  dateTime: Date
  newDate:Date
  mydate: string;
  month:any;
  mortalityincreasecount:any
  mortalityincreasepercent:any
  recoveryincreasecount:any
  recoveryincreasepercent:any
  totalcovidcasesincreasecount:any
  totalcovidcasesincreasepercent:any

  constructor( private analysisService: AnalysisService, private datePipe: DatePipe) {
   this.mydate = this.datePipe.transform(this.newDate, 'MMMM d, y');
   }
 
 

  ngOnInit(): void {
    Highcharts.chart('mortalityRate', this.mortalityOptions);
    this.analysisService.getMortalityRateNum().subscribe((response)=>{
    this.mortalityOptions.series[0].data[0].y = response[0];
    this.mortalityOptions.series[0].data[1].y = response[1];
    this.mortalityOptions.subtitle.text = "Total Tarlac COVID-19 Cases:" + response[2];
    this.mortalityincreasepercent = response[3] 
    this.mortalityincreasecount = response[4]
   Highcharts.chart('mortalityRate', this.mortalityOptions);
    console.log('casess>>>>' +  response[2]);
    console.log('y>>>>' +  response[0]);
    });
    
   Highcharts.chart('recoveryRate', this.recoveryOptions);
   this.analysisService.getRecoveryRateNum().subscribe((response)=>{
   this.recoveryOptions.series[0].data[0].y = response[0];
   this.recoveryOptions.series[0].data[1].y = response[1];
   this.recoveryOptions.subtitle.text = "Total Tarlac COVID-19 Cases:" + response[2];
   this.recoveryincreasepercent = response[3] 
   this.recoveryincreasecount = response[4]
   Highcharts.chart('recoveryRate', this.recoveryOptions);
   });
   Highcharts.chart('casesbymunicipality', this.casesbymunicipalityOptions);
   this.analysisService.getCasesByMunicipality().subscribe((response)=>{
   this.casesbymunicipalityOptions.series[0]['data']= response[0];
   this.totalcovidcasesincreasepercent = response[1]
   this.totalcovidcasesincreasecount = response[2]
   this.casesbymunicipalityOptions.subtitle.text = cValue
   Highcharts.chart('casesbymunicipality', this.casesbymunicipalityOptions);

});



this.dateTime = new Date()

 const currentDate = new Date();

const cValue = formatDate(currentDate, 'MMMM d, y', 'en-US');
console.log("DATE:  " + cValue)



  }

}
