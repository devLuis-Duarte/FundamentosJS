console.log('Hello World')

//console

console.error("Este é um erro")
console.warn("Este é um aviso")
console.log("Esta é uma mensagem")

//variáveis

var x = 10
//maneiras mais modernas
let y = 15 //valor alteravel
const z = 20 //valor constante

if(1){
    let y = 55
    console.log(y)
}

console.log(x)
console.log(y)
console.log(z)

y = 25

console.log(y)

//tipos de dados
const name = "Joao"
console.log(name)
console.log(typeof name)

const shirtsQty = 4
console.log(shirtsQty)
console.log(typeof shirtsQty)

const decimal = 4.15
console.log(decimal)
console.log(typeof decimal)

const isApproved = false //true ou false
console.log(isApproved)
console.log(typeof isApproved)

let surname = null
console.log(surname)
console.log(typeof surname)

surname = "Saldanha"
console.log(surname)
console.log(typeof surname)

let age
console.log(age)
console.log(typeof age)

const languages = ['Javascript', 'PHP', 'C#']
console.log(languages)
console.log(typeof languages)

const user = {email: "email@gmail.com", password: "1234", age: 28} //object literals
console.log(user)
console.log(typeof user)

//metodos de string
const fullname = "Lukas Saldanha"

console.log(fullname.length)

const stringToArray = fullname.split() //transforma string em array

console.log(stringToArray)

console.log(fullname.toLowerCase())

console.log(fullname.toUpperCase())

console.log(fullname.indexOf("Saldanha"))

console.log(fullname.slice(0, 7))

//metodos de array

const list = ['a', 'b', 'c', 'd', 'e']

console.log(list.length)

console.log(list[2])

list[5] = 'f'

console.log(list)

console.log(list[list.length - 1]) //como pega o ultimo elemento da lista

list.push('g')//adiciona um novo elemento ao final da lista

console.log(list)

list.pop()//remove o ultimo elemento da lista

console.log(list)

list.shift()//remove o primeiro elemento da lista

console.log(list)

list.unshift('a')//adiciona um novo elemento no comeco da lista

console.log(list)

const nome = 'Luis Saldanha'
const idade = 18

// console.log("Olá meu nome eh " + nome + "e minha idade eh " + idade)

// let lista = ['maca', 'pera', 'banana', 'morango']

// for(let i = 0; i<lista.length; i++){
//     console.log(lista[i])
// }

// lista.push('kiwi')

// console.log(lista)

// lista.pop()

// console.log(lista)

// lista.unshift('kiwi')

// console.log(lista)

// lista.shift()

// console.log(lista)

//objetos
const product = {
    name: "Camisa",
    price: 15.99,
    inStock: true,
    sizes: ['P', 'M', 'G'],
    'Main color': 'Azul',
}

console.log(product.name)

console.log(product['name'])

console.log(product['Main color'])

//destructuring

const{price, inStock} = product
            //^
            //|
            //|
            //|
            //mesma coisa, forma simplificada de acessar os atributos de um objeto
/*const price = product.price
const inStock = product.inStock*/

console.log(price)
console.log(inStock)

const [n1, n2] = list

console.log(n1)
console.log(n2)