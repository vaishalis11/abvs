import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
@Component({
selector: 'app-show-api',
templateUrl: './show-api.component.html',
styleUrls: ['./show-api.component.css']
})
export class ShowApiComponent implements OnInit {

li:any;
lis=[];
constructor(private http : HttpClient){
	
}

ngOnInit(): void {
	this.http.get('https://run.mocky.io/v3/f3feef1c-9bfa-43fd-b2a0-bbe9abadb4f6')
	.subscribe(Response => {

	// If response comes hideloader() function is called
	// to hide that loader
	if(Response){
		hideloader();
	}
	console.log(Response)
	this.li=Response;
	this.lis=this.li.list;
	});
	function hideloader(){
	document.getElementById('loading').style.display = 'none';}
}}

