function sumaConcatena(a: number | string, b: number | string): number | string | void {
    if (typeof a === "number" && typeof b === "number") return a + b
    if (typeof a === "string" && typeof b === "string") return a + b
}
// Logra que esta funcion tambien concatene strings