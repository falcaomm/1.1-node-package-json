import { countries } from "./countries.js"

const pais = process.argv[2]

if (!pais) {
    console.log("insira valor");
} else {
    const listafiltrada = countries.filter((item) => {
        return item.name.toLowerCase().includes(pais.toLowerCase())
    })
    console.table(listafiltrada);
}