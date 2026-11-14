import { Injectable } from '@angular/core';

interface Livro {
  titulo: string;
  autor: string;
  categoria: 'Tecnologia' | 'Literatura';
}

@Injectable({ providedIn: 'root' })
export class Catalogo {
  readonly categorias = ['Todas', 'Tecnologia', 'Literatura'];

  private readonly livros: Livro[] = [
    { titulo: 'Código Limpo', autor: 'Robert C. Martin', categoria: 'Tecnologia' },
    { titulo: 'Dom Casmurro', autor: 'Machado de Assis', categoria: 'Literatura' },
    { titulo: 'O Programador Pragmático', autor: 'David Thomas e Andrew Hunt', categoria: 'Tecnologia' },
    { titulo: 'A Hora da Estrela', autor: 'Clarice Lispector', categoria: 'Literatura' },
    { titulo: 'Entendendo Algoritmos', autor: 'Aditya Y. Bhargava', categoria: 'Tecnologia' },
    { titulo: 'Capitães da Areia', autor: 'Jorge Amado', categoria: 'Literatura' },
    { titulo: 'Padrões de Projeto', autor: 'Erich Gamma e outros', categoria: 'Tecnologia' },
  ];

  filtrar(categoria: string): readonly Livro[] {
    if (categoria === 'Todas') return this.livros;
    return this.livros.filter((livro) => livro.categoria === categoria);
  }
}
