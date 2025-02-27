import connection from "./connection.js";
import Pacote from "../Model/pacote.js";

export default class PacoteDB {

    constructor() {
        this.init();
    }

    async init() {
        try {
            const conexao = await connection();
            const sql = `CREATE TABLE IF NOT EXISTS pacote (
                codigo VARCHAR(14) NOT NULL PRIMARY KEY,
                nome_pacote VARCHAR(100) NOT NULL,
                data VARCHAR(20) NOT NULL,
                destino VARCHAR(100) NOT NULL,
                valor VARCHAR(20) NOT NULL,
            )`;

            await conexao.execute(sql);

        } catch ( erro ) {
            console.log(`Erro ao iniciar a tabela pacote: ${erro}`)
        }

    }

    async gravar(pacote) {
        if (pacote instanceof Pacote) {
            const conexao = await connection();
            const sql = `INSERT INTO pacote (codigo, nome_pacote, data, destino, valor)
                         VALUES (?, ?, ?, ?, ?)`
            const parametros = [
                pacote.codigo,
                pacote.nome_pacote,
                pacote.data,
                pacote.destino,
                pacote.valor,
            ];

            await conexao.execute(sql, parametros);
            await conexao.release();
        }
    }

    async alterar(pacote) {
        if (pacote instanceof Pacote) {
            const conexao = await connection();
            const sql = `UPDATE pacote SET 
                         nome_pacote = ?, data = ?, destino = ?, valor = ? WHERE codigo = ?`
            const parametros = [
                pacote.nome_pacote,
                pacote.data,
                pacote.destino,
                pacote.valor,
                pacote.codigo
            ];

            await conexao.execute(sql, parametros);
            await conexao.release();
        }
    }

    async excluir(pacote) {
        if (pacote instanceof Pacote) {
            const conexao = await connection();
            const sql = `DELETE FROM pacote WHERE codigo = ?`;
            const parametros = [pacote.codigo];

            await conexao.execute(sql, parametros);
            await conexao.release();
            
        }
    }

    async consultar() {
        const conexao = await connection();
        const sql = `SELECT * FROM pacote ORDER BY nome_pacote`;
        const [registros, campos] = await conexao.execute(sql);
        await conexao.release();
        let listaPacotes = [];
        for (const registro of registros) {
            const pacote = new Pacote(
                registro.codigo, 
                registro.nome_pacote, 
                registro.data, 
                registro.destino, 
                registro.valor, 
            )

            listaPacotes.push(pacote)
        }
        return listaPacotes;
    }
}