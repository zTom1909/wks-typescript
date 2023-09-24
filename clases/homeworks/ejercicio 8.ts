//Intenta tipar una pluck function!
//TIP! Buscar la palabra reservada keyof y usar extends!
function pluck<V extends object>(arreglo: V[], prop: keyof V) {
    return arreglo.map((object: V) => {
        return object[prop]
    }) 
}