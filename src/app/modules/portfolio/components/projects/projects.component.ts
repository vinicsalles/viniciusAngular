import { Component, inject, signal } from '@angular/core';
import { IProjects } from '../../interface/IProjects.interface';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { EDialogPanelClass } from '../../enum/EDialogPanelClass.enum';
import { DialogProjectsComponent } from '../dialog/dialog-projects/dialog-projects.component';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [MatDialogModule],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss',
})
export class ProjectsComponent {
  #dialog = inject(MatDialog);
  public arrayProjects = signal<IProjects[]>([
    {
      src: 'assets/img/projects/potfoliovini.jpg',
      alt: '',
      title: 'Portfolio Vinícius',
      width: '100px',
      height: '51px',
      description:
        'Desenvolvi o meu primeiro portifolio com tecnologias básicas, durante o começo de minha jornada como programador, as tecnologias utilizadas foram: html5, css3, javascript.',
      links: [
        { name: 'Conheça o Blog', href: 'https://viniciusalles.vercel.app/' },
      ],
    },
    {
      src: 'assets/img/projects/dolarcotacao.jpg',
      alt: '',
      title: 'Conversor de Dolar e Euro',
      width: '100px',
      height: '51px',
      description:
        'Desenvolvi um conversor de dolar e euro  com a cotação em tempo real onde tambem tem uma calculadora de moedas em reais. As tecnologias usadas foram: ReactJs,axios e react router.',
      links: [
        { name: 'Conheça o Blog', href: 'https://moedas-club.vercel.app/' },
      ],
    },
    {
      src: 'assets/img/projects/calculadora.jpg',
      alt: '',
      title: 'Calculadora de IMC',
      width: '100px',
      height: '51px',
      description:
        'Desenvolvi uma calculadora que calcula o indice de massa muscular, as tecnologias usadas foram: html5, css3, javascript.',
      links: [
        {
          name: 'Conheça o Blog',
          href: 'https://calculadoradeimc-alpha.vercel.app/',
        },
      ],
    },
    {
      src: 'assets/img/projects/portfolionutri.jpg',
      alt: '',
      title: 'Portfolio Nutricionista',
      width: '100px',
      height: '51px',
      description:
        'Desenvolvi um portifolio para minha namorada estudante de nutrição onde utilizei das tecnologias: html5, css3, javascript.',
      links: [
        { name: 'Conheça o Blog', href: 'https://julianaconti.vercel.app/' },
      ],
    },
  ]);

  public openDialog(data: IProjects) {
    this.#dialog.open(DialogProjectsComponent, {
      data,
      panelClass: EDialogPanelClass.PROJECTS,
    });
  }
}
