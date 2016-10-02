import { Injectable } from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs';

@Injectable()
export class GithubService {

private username:string;
private client_Id = '5b5ca0cf8789e4b46f6d';
private client_secret = 'f3ed814a7d8ab74e7387315e5871ba0c1a78770f';
  constructor(private _http:Http) { 
  	console.log('github service ready')
  	this.username = 'rsach';
  }


  getUser(){
  		return this._http.get('http://api.github.com/users/'+this.username+'?client_id='+this.client_Id+'&client_secret='+this.client_secret)
  			.map(res => res.json())
  }


  getRepos(){
  		return this._http.get('http://api.github.com/users/'+this.username+'/repos'+'?client_id='+this.client_Id+'&client_secret='+this.client_secret)
  			.map(res => res.json())
  }

  updateUser(username){
  	this.username = username;
  }

}
