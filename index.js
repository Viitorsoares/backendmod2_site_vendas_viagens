import Pacote from "./Model/pacote.js";

let pacote = new Pacote(
    "12345",
    "Praias Recife",
    "23-06-2025",
    "Nordeste",
    "3222"
)

pacote.gravar().then(() => {
    console.log(`Pacote gravado com sucesso`)
}).catch((erro) => {
    console.log(`Erro ao gravar o pacote ${erro}`)
})

/*pacote.consultar().then((listaPacotes) => {
    for (const pacote of listaPacotes) {
        console.log(pacote.toJSON())
    }
})*/

/*pacote.excluir().then(() => {
    console.log("Pacote excluido com sucesso!");
}).catch((erro) => {
    console.log("Erro ao excluir o pacote: " + erro);
})*/

/*pacote.alterar().then(() => {
    console.log("Pacote alterado com sucesso!");
}).catch((erro) => {
    console.log("Erro ao alterar o pacote: " + erro);
});*/
