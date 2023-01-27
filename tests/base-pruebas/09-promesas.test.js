import { getHeroeByIdAsync } from "../../src/base-pruebas/09-promesas";

describe('Pruebas en 09-promesas', () => {
    test('getHeroesByIdAsync debe de retornar un heroe', (done) => {
        const id = 1;
        getHeroeByIdAsync(id)
            .then(hero=>{
                expect(hero).toEqual({id:1, name:'Batman', owner:'DC'})
            
            done();
        });
    });

    test('getHeroesByIdAsync debe de retornar un error si el heroe no existe', (done) => {
        const id = 10;
        getHeroeByIdAsync(id).catch(error=>{
                try {
                    expect(error).toBe('No se pudo encontrar el heroe')
                    done();
                } catch (error) {
                    done(error)
                }
                
        });
    });
});