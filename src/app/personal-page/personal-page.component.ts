import { Component } from '@angular/core';


@Component({
  selector: 'app-personal-page',
  templateUrl: './personal-page.component.html',
  styleUrls: ['./personal-page.component.scss']
})
export class PersonalPageComponent {

    openModal(){
      const modal =document.getElementById('myModal');
      if(modal!=null){
        modal.style.display = "block";
      }
        
    }
    closeModal(){
      const modal =document.getElementById('myModal');
      if(modal!=null){
        modal.style.display = "none";
      }
        
    }
   
}
