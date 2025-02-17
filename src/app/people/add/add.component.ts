import { Component, inject } from '@angular/core';
import { StarwarsService } from '../../starwars.service';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add',
  standalone: false,
  templateUrl: './add.component.html',
  styleUrl: './add.component.css',
})
export class AddComponent {
  starwarsService = inject(StarwarsService);
  router = inject(Router);

  personForm: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.personForm = this.formBuilder.group({
      name: ['', Validators.required],
      description: ['', Validators.required],
    });
  }

  addPerson() {
    this.starwarsService.addPerson(this.personForm.value.name, this.personForm.value.description)
    this.router.navigate(["/people"])
  }
}
