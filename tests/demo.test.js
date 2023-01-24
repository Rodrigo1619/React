describe('Pruebas en <DemoComponent/>', () => {
    
    test('esta prueba no debe de fallar',()=>{
    
        //1. Inicializacion
        const message1 = 'ola camaron sin cola';
        //2. Estimulo
        const message2 = message1.trim();//quitar espacios de adelante y atras
        //3. Observar el comportamiento... esperado
        expect(message1).toBe(message2); //en lugar de hacer un if, JEST ya nos proprciona esto
    })
    
});