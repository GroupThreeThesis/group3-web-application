import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http'
import { map } from 'rxjs/operators';
import { MortalityRate } from './analysis.model';

@Injectable({
  providedIn: 'root'

})
export class AnalysisService {
  baseUrl:string = 'https://thesis-rest-api.herokuapp.com/';
  constructor(private httpClient: HttpClient) { }


  public getMortalityRateNum(){
    return this.httpClient.get<MortalityRate[]>(this.baseUrl +'mortalitycount/1')
  }

  
  public getRecoveryRateNum(){
    return this.httpClient.get<MortalityRate[]>(this.baseUrl +'recoverycount/1')
  }
  
  public getCasesByMunicipality(){
    return this.httpClient.get<MortalityRate[]>(this.baseUrl +'casesbymunicipality/1')
  }
  public getTotalCovidCases(){
    return this.httpClient.get<MortalityRate[]>(this.baseUrl +'totalcovidcases/1')
  }
  public addTotalCovidCases(totalcovidcases:any){
    return this.httpClient.post<any>(this.baseUrl + 'totalcovidcases',{totalcovidcases}).
    pipe(map((TotalCovidCases:any) =>{
      return TotalCovidCases
    }));
  }

  public addMortalityRate(mortalitycount:any){
    return this.httpClient.post<any>(this.baseUrl + 'mortalitycount',{mortalitycount}).
    pipe(map((MortalityRate:any) =>{
      return MortalityRate
    }));
  }

  public addRecoveryRate(recoverycount:any){
    return this.httpClient.post<any>(this.baseUrl + 'recoverycount',{recoverycount}).
    pipe(map((RecoveryRate:any) =>{
      return RecoveryRate
    }));
  }


  public addCasesByMunicipality(anao:any, bamban:any, camiling:any, capas:any,
    concepcion:any, gerona:any, lapaz:any, mayantoc:any, moncada:any, paniqui:any,
    pura:any, ramos:any, sanclemente:any, sanjose:any, sanmiguel:any, santaignacia:any,
    tarlaccity:any, victoria:any ){
    return this.httpClient.post<any>(this.baseUrl + 'casesbymunicipality',{anao, bamban, camiling,
    capas,concepcion, gerona, lapaz, mayantoc, moncada, paniqui, pura, ramos, sanclemente, sanjose, sanmiguel,
    santaignacia, tarlaccity, victoria}).
    pipe(map((CasesByMunicipality:any) =>{
      return CasesByMunicipality
    }));
  }


  
  public updateTotalCovidCases(totalcovidcases:any){
    return this.httpClient.put<any>(this.baseUrl + 'totalcovidcases/1',{totalcovidcases}).
    pipe(map((TotalCovidCases:any) =>{
      return TotalCovidCases
    }));
  }

  public updateMortalityRate(mortalitycount:any){
    return this.httpClient.put<any>(this.baseUrl + 'mortalitycount/1',{mortalitycount}).
    pipe(map((MortalityRate:any) =>{
      return MortalityRate
    }));
    
  }

  public storeMortalityRate(mortalitycount:any){
    return this.httpClient.post<any>(this.baseUrl + 'storedmortalitycount',{mortalitycount}).
    pipe(map((MortalityRate:any) =>{
      return MortalityRate
    }));
  }

  public updateRecoveryRate(recoverycount:any){
    return this.httpClient.put<any>(this.baseUrl + 'recoverycount/1',{recoverycount}).
    pipe(map((RecoveryRate:any) =>{
      return RecoveryRate
    }));
  }

  public updateCasesByMunicipality(anao:any, bamban:any, camiling:any, capas:any,
    concepcion:any, gerona:any, lapaz:any, mayantoc:any, moncada:any, paniqui:any,
    pura:any, ramos:any, sanclemente:any, sanjose:any, sanmiguel:any, santaignacia:any,
    tarlaccity:any, victoria:any){
    return this.httpClient.put<any>(this.baseUrl + 'casesbymunicipality/1',{anao, bamban, camiling,
      capas,concepcion, gerona, lapaz, mayantoc, moncada, paniqui, pura, ramos, sanclemente, sanjose, sanmiguel,
      santaignacia, tarlaccity, victoria}).
    pipe(map((CasesByMunicipality:any) =>{
      return CasesByMunicipality
    }));
  }

  

}
