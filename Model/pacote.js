import PacoteDB from "../DataBase/pacoteDB.js";

export default class Pacote {
    // atributos privados
    #codigo;
    #nome_pacote;
    #data;
    #destino;
    #valor

    constructor(codigo, nome_pacote, data, destino, valor) {
        this.#codigo = codigo;
        this.#nome_pacote = nome_pacote;
        this.#data = data;
        this.#destino = destino;
        this.#valor = valor
    }

    get codigo() {
        return this.#codigo;
    }

    set codigo(novoCodigo) {
        this.#codigo = novoCodigo;
    }

    get nome_pacote() {
        return this.#nome_pacote;
    }

    set nome_pacote(novoNome) {
        this.#nome_pacote = novoNome;
    }

    get data() {
        return this.#data;
    }

    set data(novaData) {
        this.#data = novaData;
    }

    get destino() {
        return this.#destino;
    }

    set destino(novoDestino) {
        this.#destino = novoDestino;
    }

    get valor() {
        return this.#valor;
    }

    set valor(novoValor) {
        this.#valor = novoValor;
    }


    toJSON() {
        return {
            "codigo": this.#codigo,
            "nome_pacote": this.#nome_pacote,
            "data": this.#data,
            "destino": this.#destino,
            "valor": this.#valor
        }
    }

    async gravar() {
        const pacoteDB = new PacoteDB();
        pacoteDB.gravar(this)
    }

    async alterar() {
        const pacoteDB = new PacoteDB();
        pacoteDB.alterar(this)
    }

    async excluir() {
        const pacoteDB = new PacoteDB();
        pacoteDB.excluir(this)
    }

    async consultar() {
        const pacoteDB = new PacoteDB();
        return await pacoteDB.consultar(this)
    }

}