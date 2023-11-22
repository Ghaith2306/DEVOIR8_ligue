import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';
import { EquipeService } from '../services/equipe.service';
import { Equipe} from '../model/equipe.model';
import { Categorie } from '../model/categorie.model';

@Component({
  selector: 'app-update-equipe',
  templateUrl: './update-equipe.component.html',
  styles: [
  ]
})
export class UpdateEquipeComponent implements OnInit {
  currentEquipe = new Equipe();
  categories!:Categorie[];
  updatedid!:number;
  constructor(private activatedRoute: ActivatedRoute,
    private router :Router,
    private equipeService: EquipeService) { }

  ngOnInit(): void {
    this.categories=this.equipeService.listerCategorie();
    
  
    this.currentEquipe = this.equipeService.consulter(this.activatedRoute.snapshot. params['id']);
    this.updatedid=this.currentEquipe.categorie.id;
console.log(this.currentEquipe);
  }
  updateEquipe()
{ //console.log(this.currentProduit);
  this.currentEquipe.categorie=this.equipeService.consulterCategorie(this.updatedid);
this.equipeService.updateEquipe(this.currentEquipe);
this.router.navigate(['equipes']);
}

}
