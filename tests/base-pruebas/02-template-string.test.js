import { getSaludo } from "../../src/base-pruebas/02-template-string";

describe('Pruebas en archivo 02-template-string', () => {
    
    test('getSaludo debe de retornar "Hola Rodrigo"', () => {
        const name = 'Rodrigo';
        const message = getSaludo(name);

        expect(message).toBe(`Hola ${name}`)
    });

});