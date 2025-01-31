import { Request, Response } from 'express';
import { Livro } from '../models/livro';

let livros: Livro[] = [];
let idCounter = 1;

export const getLivros = (req: Request, res: Response) => {
  res.json(livros);
};

export const getLivroById = (req: Request, res: Response) => {
  const id = parseInt(req.params.id);
  const livro = livros.find(l => l.id === id);
  if (livro) {
    res.json(livro);
  } else {
    res.status(404).send('Livro não encontrado');
  }
};

export const createLivro = (req: Request, res: Response) => {
  const novoLivro: Livro = {
    id: idCounter++,
    titulo: req.body.titulo,
    autor: req.body.autor,
    anoPublicacao: req.body.anoPublicacao
  };
  livros.push(novoLivro);
  res.status(201).json(novoLivro);
};

export const updateLivro = (req: Request, res: Response) => {
  const id = parseInt(req.params.id);
  const livroIndex = livros.findIndex(l => l.id === id);
  if (livroIndex !== -1) {
    livros[livroIndex] = { ...livros[livroIndex], ...req.body };
    res.json(livros[livroIndex]);
  } else {
    res.status(404).send('Livro não encontrado');
  }
};

export const deleteLivro = (req: Request, res: Response) => {
  const id = parseInt(req.params.id);
  const livroIndex = livros.findIndex(l => l.id === id);
  if (livroIndex !== -1) {
    livros.splice(livroIndex, 1);
    res.status(204).send();
  } else {
    res.status(404).send('Livro não encontrado');
  }
};