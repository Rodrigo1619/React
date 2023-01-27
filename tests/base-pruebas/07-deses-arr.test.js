import { retornaArreglo } from "../../src/base-pruebas/07-deses-arr"

describe(' Pruebas en 07-deses-arr', () => {
    test('Debe de retornar un string y un numero', () => {
        const [letters, numbers] = retornaArreglo();
        expect(letters).toBe('ABC');
        expect(numbers).toBe(123);

        //Ahora si queremos que la prueba sea en base al tipo
        expect(typeof letters).toBe('string');
        expect(typeof numbers).toBe('number');

        //Ahora si no sabemos que retorna en si nuestro arreglo, ya sea un numero random o cualquier string
        //Este codigo dice que espere cualquier tipo de string
        expect(letters).toEqual(expect.any(String));
    })
})