import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http'
import { map } from 'rxjs/operators';
import { Forecast } from './forecast.model';


@Injectable({
  providedIn: 'root'
})
export class ForecastService {
  baseUrl:string = 'https://thesis-rest-api.herokuapp.com/';
  constructor(private httpClient: HttpClient) { }
  
  public addData(timelag1:any,timelag2:any,timelag3:any,timelag4:any,timelag5:any ){
    return this.httpClient.post<any>(this.baseUrl + 'predict',{timelag1, timelag2, timelag3, timelag4, timelag5}).
    pipe(map((Forecast:any) =>{
      return Forecast
    }));
  }
  public updateData(timelag1:any,timelag2:any,timelag3:any,timelag4:any,timelag5:any ){
    return this.httpClient.put<any>(this.baseUrl + 'predict/1',{timelag1, timelag2, timelag3, timelag4, timelag5}).
    pipe(map((Forecast:any) =>{
      return Forecast
    }));
  }

  public listData(){
    return this.httpClient.get<Forecast[]>(this.baseUrl +'predict/1')
  }
}
