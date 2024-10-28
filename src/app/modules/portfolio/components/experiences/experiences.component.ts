import { Component, signal } from '@angular/core';
import { IExperiences } from '../../interface/IExperiences.interface';

@Component({
  selector: 'app-experiences',
  standalone: true,
  imports: [],
  templateUrl: './experiences.component.html',
  styleUrl: './experiences.component.scss',
})
export class ExperiencesComponent {
  public arrayExperiences = signal<IExperiences[]>([
    {
      summary: {
        strong: 'Residente Programador Full Stack ',
        p: 'Serratec (Parque Tecnológico da Região Serrana | Mar 2024 - Ago 2024',
      },
      text: '<p>Atuei como residente em Desenvolvedor full stack durante 5 meses,utilizei ferramentas como React, React Native e Java diariamente em todas as frentes dos projetos.Trabalhei em inúmeras equipes com a metodologia Ágil do Scrum e possui um relacionamento diário, dinâmico e direto com o cliente (algo que, com certeza, tornou a minha comunicação e trabalho em equipe grandes vantagens profissionais).</p>',
    },
    {
      summary: {
        strong: 'Jovem Aprendiz ',
        p: 'Hospital Alcides Carneiro | Out 2022 - Ago 2023',
      },
      text: '<p>Atuei como jovem aprendiz no setor no almoxarifado durante 10 meses </p>',
    },
  ]);
}
