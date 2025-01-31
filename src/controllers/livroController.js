"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteLivro = exports.updateLivro = exports.createLivro = exports.getLivroById = exports.getLivros = void 0;
let livros = [];
let idCounter = 1;
const getLivros = (req, res) => {
    res.json(livros);
};
exports.getLivros = getLivros;
const getLivroById = (req, res) => {
    const id = parseInt(req.params.id);
    const livro = livros.find(l => l.id === id);
    if (livro) {
        res.json(livro);
    }
    else {
        res.status(404).send('Livro não encontrado');
    }
};
exports.getLivroById = getLivroById;
const createLivro = (req, res) => {
    const novoLivro = {
        id: idCounter++,
        titulo: req.body.titulo,
        autor: req.body.autor,
        anoPublicacao: req.body.anoPublicacao
    };
    livros.push(novoLivro);
    res.status(201).json(novoLivro);
};
exports.createLivro = createLivro;
const updateLivro = (req, res) => {
    const id = parseInt(req.params.id);
    const livroIndex = livros.findIndex(l => l.id === id);
    if (livroIndex !== -1) {
        livros[livroIndex] = Object.assign(Object.assign({}, livros[livroIndex]), req.body);
        res.json(livros[livroIndex]);
    }
    else {
        res.status(404).send('Livro não encontrado');
    }
};
exports.updateLivro = updateLivro;
const deleteLivro = (req, res) => {
    const id = parseInt(req.params.id);
    const livroIndex = livros.findIndex(l => l.id === id);
    if (livroIndex !== -1) {
        livros.splice(livroIndex, 1);
        res.status(204).send();
    }
    else {
        res.status(404).send('Livro não encontrado');
    }
};
exports.deleteLivro = deleteLivro;
