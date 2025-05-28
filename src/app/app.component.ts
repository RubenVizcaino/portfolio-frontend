import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  standalone: true, // 👈 Si esto está presente
  imports: [CommonModule], // 👈 Asegúrate de incluir CommonModule aquí
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public title = 'frontend';
  proyectos = [
    {
      titulo: 'Landing Page',
      descripcion: 'Diseño responsivo de una landing page moderna.',
      link: 'https://ejemplo.com/landing'
    },
    {
      titulo: 'App de Clima',
      descripcion: 'Consulta el clima actual usando una API.',
      link: 'https://ejemplo.com/clima'
    },
    {
      titulo: 'Portafolio UX/UI',
      descripcion: 'Diseño y estructura de un portafolio visual.',
      link: 'https://ejemplo.com/uxui'
    }
  ];
}
