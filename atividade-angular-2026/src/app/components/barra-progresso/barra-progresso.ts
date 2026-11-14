import { ChangeDetectionStrategy, Component, input } from '@angular/core';

@Component({
  selector: 'app-barra-progresso',
  templateUrl: './barra-progresso.html',
  styleUrl: './barra-progresso.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BarraProgresso {
  readonly valor = input.required<number>();
}
