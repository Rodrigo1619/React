import { getImagen } from "../../src/base-pruebas/11-async-await"

describe('Pruebas en 11-async-await', () => {
    test('getImagen debe de retornar un URL de la imagen', async() => {
        const url = await getImagen();
        console.log(url);

        expect(typeof url).toBe('string')
    })
   /*  test('getImagen debe de retornar un error si no hay apikey', async() => {
        const resp = await getImagen();
        expect(typeof resp).toBe('No se encontro la imagen')
    }) */
})