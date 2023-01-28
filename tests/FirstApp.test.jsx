import { render } from "@testing-library/react"
import { FirstApp } from "../src/FirstApp"

describe('Pruebas en <FirstApp/>', () => {
 /*    test('Debe de hacer match con el snapshot', () => {
        const title ='Ola no camaron'
        const {container} =  render(<FirstApp title={title} /> );
        expect(container).toMatchSnapshot();
    }) */
    test('Debe de mostrar el titulo en h1', () => {
        const title ='Ola no camaron';
        const {container, getByText, getByTestId} =  render(<FirstApp title={title} /> );
        expect(getByText(title)).toBeTruthy();

/*         const h1 = container.querySelector('h1');
        expect(h1.innerHTML).toContain( title ); //mejor esto porque con el toBe cuenta hasta los espacios */

        expect(getByTestId('test-title').innerHTML).toContain(title)


    });

    test('debe de mostrar el subtitulo enviado por props', () => {
        const title ='Ola no camaron';
        const subtitle ='camaron simon';
        const {getByText} =  render(
            <FirstApp
                title={title}
                subtitle={subtitle}
            /> 
        );
        expect(getByText(subtitle)).toBeTruthy();
    });
});