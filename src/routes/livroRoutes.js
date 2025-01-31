"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const livroController_1 = require("../controllers/livroController");
const router = express_1.default.Router();
router.get('/', livroController_1.getLivros);
router.get('/:id', livroController_1.getLivroById);
router.post('/', livroController_1.createLivro);
router.put('/:id', livroController_1.updateLivro);
router.delete('/:id', livroController_1.deleteLivro);
exports.default = router;
