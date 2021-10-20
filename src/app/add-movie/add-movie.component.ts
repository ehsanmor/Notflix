import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-movie',
  templateUrl: './add-movie.component.html',
  styleUrls: ['./add-movie.component.css']
})
export class AddMovieComponent    {
  genre:string='';

  public OnUsernameInputChanged(e:Event){
    this.genre =(<HTMLInputElement>e.target).value;


 
  }



  
  
  itemmovie: ItemMovies[] = [
    {
      id: 1,
    genre: "Dram",
    name:"Jokker",
    detail:"best movie 2019",
    link:"https://www.youtube.com/watch?v=zAGVQLHvwOY",
    rate:4.8},
    {id: 2,
    genre: "imaganiary",
    name:"Matrix",
    detail:"Entertainig",
    link:"https://www.youtube.com/watch?v=LxYT7QMT_pA",
    rate:5.0}
   
  
]

// constructor() { }

// ngOnInit(): void {
}

 export interface ItemMovies{
id:number;
genre:string;
name:string;
detail:string;
link:string;
rate:number;



}
 


