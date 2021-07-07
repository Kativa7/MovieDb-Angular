import { Injectable } from '@angular/core';
import  {HttpClient} from '@angular/common/http'

const BASE_URL = 'https://api.themoviedb.org/3/movie/popular'
const API_KEY = '?api_key=ba224f0add12469b7879a798c4393548&language=en-US&page=1'


@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  constructor(private http: HttpClient) { }

  getPopular(){
    //return this.http.get<Movie[]>(BASE_URL + API_KEY)
  }
}
