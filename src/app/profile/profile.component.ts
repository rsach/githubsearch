import { Component, OnInit } from '@angular/core';
import {GithubService} from '../services/github.service';
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html'
})
export class ProfileComponent implements OnInit {
	user=[];
	repos=[];
	username:string;
  constructor(private _githubService:GithubService) { 
  		this.user=null;
  }

  ngOnInit() {
  }


  searchUser(){
  	this.user=null;
  	this._githubService.updateUser(this.username);

  	this._githubService.getUser().subscribe(user =>{
  			console.log(user);
  		this.user=user;
  	});


  	this._githubService.getRepos().subscribe(repos =>{
  			console.log(repos);
  		this.repos=repos;
  	});
  }

}
