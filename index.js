import Customer from "./Model/customer.js";

let custumer = new Customer(
    "777-777-777-77",
    "Vitor Soares",
    "Rua 1",
    "Bairro 1",
    "Cidade 1",
    "SP",
    "(77) 77777 7777",
    "generico@gmail.com"
)

custumer.telefone = "(11) 11111 1111"

console.log(custumer.toJSON())
console.log(`O telefone de cliente é ${custumer.telefone}`)