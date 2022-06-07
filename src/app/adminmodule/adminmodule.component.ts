import { Component, OnInit, ViewChild } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { first } from 'rxjs/operators';
import { ForecastService } from '../forecast.service';
import { AnalysisService } from '../analysis.service';
import { ModalDirective } from 'angular-bootstrap-md';
import  {  NgbToastService }  from  'ngb-toast';
declare var $ : any;

@Component({
  selector: 'app-adminmodule',
  templateUrl: './adminmodule.component.html',
  styleUrls: ['./adminmodule.component.css'],
  
})
export class AdminmoduleComponent implements OnInit {
  @ViewChild('AddModal', { static: false }) AddModal: ModalDirective;
  angForm: FormGroup;
  adminForm: FormGroup;
  showModal: boolean
  totalCovidCasesForm: FormGroup;
  mortalityForm: FormGroup;
  recoveryForm: FormGroup;
  casesbymunicipalityForm: FormGroup;
  //invalidSubmit: boolean = true;
  subscribe: boolean = true;
  dateTime: Date;
  timeLag1: Date
  timeLag2: Date
  timeLag3: Date
  timeLag4: Date

  
  
  constructor(private http: HttpClient,
    private router: Router, private formbuilder: FormBuilder,  private fs: ForecastService, private as: AnalysisService) { 
      this.angForm = this.formbuilder.group({
        timelag1:['', Validators.required],
        timelag2:['', Validators.required],
        timelag3:['', Validators.required],
        timelag4:['', Validators.required],
        timelag5:['', Validators.required]
      });

      this.totalCovidCasesForm = this.formbuilder.group({
        totalcovidcases:['', Validators.required],
      });

      this.mortalityForm = this.formbuilder.group({
        mortalitycount:['', Validators.required],
      });

      this.recoveryForm = this.formbuilder.group({
        recoverycount:['', Validators.required],
      });

      this.casesbymunicipalityForm = this.formbuilder.group({
        anao:['', Validators.required],
        bamban:['', Validators.required],
        camiling:['', Validators.required],
        capas:['', Validators.required],
        concepcion:['', Validators.required],
        gerona:['', Validators.required],
        lapaz:['', Validators.required],
        mayantoc:['', Validators.required],
        moncada:['', Validators.required],
        paniqui:['', Validators.required],
        pura:['', Validators.required],
        ramos:['', Validators.required],
        sanclemente:['', Validators.required],
        sanjose:['', Validators.required],
        sanmiguel:['', Validators.required],
        santaignacia:['', Validators.required],
        tarlaccity:['', Validators.required],
        victoria:['', Validators.required]
      });

     
    }
    
 
  
  
  
  selectedFile: File;
  token: any;
  ngOnInit(): void {
    this.token =  window.localStorage.getItem('token');
    if(!this.token){
      this.router.navigate(['login']);
    }
    
    this.dateTime = new Date()
    this.timeLag1 = new Date(this.dateTime)
    this.timeLag1.setDate(this.timeLag1.getDate()-4)

    this.timeLag2 = new Date(this.dateTime)
    this.timeLag2.setDate(this.timeLag2.getDate()-3)
    
    this.timeLag3 = new Date(this.dateTime)
    this.timeLag3.setDate(this.timeLag3.getDate()-2)

    this.timeLag4 = new Date(this.dateTime)
    this.timeLag4.setDate(this.timeLag4.getDate()-1)
  }

  
 public showToastAdd(){
  $('#addtoast').toast('show')
 }
 public showToastUpdate(){
  $('#updatetoast').toast('show')
 }
 public showToastAddAnalysis(){
  $('#addtoastAnalysis').toast('show')
 }

 public showToastUpdateAnalysis(){
  $('#updatetoastAnalysis').toast('show')
 }

  public hideForecastingAddModal()
  {
    $('#AddModal').modal('hide');
  }

  public hideForecastingUpdateModal()
  {
    $('#UpdateModal').modal('hide');
  }

  public hideAnalysisAddModal()
  {
    $('#AddModalAnalysis').modal('hide');
  }

  public hideAnalysisUpdateModal()
  {
    $('#sheesh').modal('hide');
  }

  

  logOut(){
    window.localStorage.removeItem('token');
    this.router.navigate(['dashboard']);

  
  }

  postTimeLag(form:any){
   
    this.fs.addData(
      this.angForm.value.timelag1,
      this.angForm.value.timelag2,
      this.angForm.value.timelag3,
      this.angForm.value.timelag4,
      this.angForm.value.timelag5,
      ).pipe(first()).subscribe(data =>{
        this.router.navigate(['adminmodule']);
      })
  }

  updateData(){
  
    this.fs.updateData(
      this.angForm.value.timelag1,
      this.angForm.value.timelag2,
      this.angForm.value.timelag3,
      this.angForm.value.timelag4,
      this.angForm.value.timelag5,
      ).pipe(first()).subscribe(data =>{
        this.router.navigate(['adminmodule']);
      })
  }



  postTotalCovidCases(form:any){
  
    this.as.addTotalCovidCases(
      this.totalCovidCasesForm.value.totalcovidcases,
      ).pipe(first()).subscribe(data =>{
      })
  }

  UpdateTotalCovidCases(){
    
    this.as.updateTotalCovidCases(
      this.totalCovidCasesForm.value.totalcovidcases,
      ).pipe(first()).subscribe(data =>{
      });
  }

  postMortalityRate(form:any){
   
    this.as.addMortalityRate(
      this.mortalityForm.value.mortalitycount,
      ).pipe(first()).subscribe(data =>{
      })
  }

  UpdateMortalityRate(){
    this.as.updateMortalityRate(
      this.mortalityForm.value.mortalitycount,
      ).pipe(first()).subscribe(data =>{
      })
  }
  
  StoreMortalityRate(){
    this.as.storeMortalityRate(
      this.mortalityForm.value.mortalitycount,
      ).pipe(first()).subscribe(data =>{
      })
  }



  postRecoveryRate(form:any){
    this.as.addRecoveryRate(
      this.recoveryForm.value.recoverycount,
      ).pipe(first()).subscribe(data =>{
      })
  
      
  }
  UpdateRecoveryRate(){
    this.as.updateRecoveryRate(
      this.recoveryForm.value.recoverycount,
      ).pipe(first()).subscribe(data =>{
      })
  }

  postcasesbymunicipality(form:any){
    this.as.addCasesByMunicipality(
      this.casesbymunicipalityForm.value.anao,
      this.casesbymunicipalityForm.value.bamban,
      this.casesbymunicipalityForm.value.camiling,
      this.casesbymunicipalityForm.value.capas,
      this.casesbymunicipalityForm.value.concepcion,
      this.casesbymunicipalityForm.value.gerona,
      this.casesbymunicipalityForm.value.lapaz,
      this.casesbymunicipalityForm.value.mayantoc,
      this.casesbymunicipalityForm.value.moncada,
      this.casesbymunicipalityForm.value.paniqui,
      this.casesbymunicipalityForm.value.pura,
      this.casesbymunicipalityForm.value.ramos,
      this.casesbymunicipalityForm.value.sanclemente,
      this.casesbymunicipalityForm.value.sanjose,
      this.casesbymunicipalityForm.value.sanmiguel,
      this.casesbymunicipalityForm.value.santaignacia,
      this.casesbymunicipalityForm.value.tarlaccity,
      this.casesbymunicipalityForm.value.victoria,
      ).pipe(first()).subscribe(data =>{
      })
     
  }

  UpdateCasesByMunicipality(){
    this.as.updateCasesByMunicipality(
      this.casesbymunicipalityForm.value.anao,
      this.casesbymunicipalityForm.value.bamban,
      this.casesbymunicipalityForm.value.camiling,
      this.casesbymunicipalityForm.value.capas,
      this.casesbymunicipalityForm.value.concepcion,
      this.casesbymunicipalityForm.value.gerona,
      this.casesbymunicipalityForm.value.lapaz,
      this.casesbymunicipalityForm.value.mayantoc,
      this.casesbymunicipalityForm.value.moncada,
      this.casesbymunicipalityForm.value.paniqui,
      this.casesbymunicipalityForm.value.pura,
      this.casesbymunicipalityForm.value.ramos,
      this.casesbymunicipalityForm.value.sanclemente,
      this.casesbymunicipalityForm.value.sanjose,
      this.casesbymunicipalityForm.value.sanmiguel,
      this.casesbymunicipalityForm.value.santaignacia,
      this.casesbymunicipalityForm.value.tarlaccity,
      this.casesbymunicipalityForm.value.victoria,
      ).pipe(first()).subscribe(data =>{
      })
  }



}
