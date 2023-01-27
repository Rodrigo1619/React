import { getHeroeById, getHeroesByOwner } from "../../src/base-pruebas/08-imp-exp";
import heroes from "../../src/data/heroes";
describe('Pruebas en 08-imp-exp', () => { 
    test('getHeroeById debe de retornar un heroe por Id', () => {
        const id = 1;
        const hero = getHeroeById(id);
        expect(hero).toEqual({id: 1,name: 'Batman',owner: 'DC'})
    });
    test('getHeroeById debe de retornar un undefined sino existe', () => {
        const id = 100;
        const hero = getHeroeById(id);
        expect(hero).toBeFalsy();//esto quiere decir que sea falso o que tenga un valor nullo por asi decirse
    });
    test('getHeroeByOwner debe de retornar un arreglo de los heroes que pertenece a DC', () => {
        const owner = 'DC';
        const heros = getHeroesByOwner(owner);
        console.log(heros)

        //evalua que hayan 3 heroes en el arreglo
        expect(heros.length).toBe(3); 
        //evalua que en efecto la data de heroes coincidan con la data de heros
        expect(heros).toEqual(heroes.filter( (heroe) => heroe.owner === owner ))
    });
    test('getHeroeByOwner debe de retornar un arreglo de los heroes que pertenece a Marvel', () => {
        const owner = 'Marvel';
        const heros = getHeroesByOwner(owner);
        console.log(heros)

        //evalua que hayan 3 heroes en el arreglo
        expect(heros.length).toBe(2); 
        //evalua que en efecto la data de heroes coincidan con la data de heros
        expect(heros).toEqual(heroes.filter( (heroe) => heroe.owner === owner ))
    });
    

})