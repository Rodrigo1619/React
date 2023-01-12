# Diferencia entre export y export default
Si a un componente al principio le ponemos el export y de ahi declaramos la funcion como siempre se hace, a la hora de importarlo
en otro archivo se debe de hacer mediante las {}
```
export function app() 
En otro archivo seria
import {app} from 'direccion'
```
Pero si lo hacemos con el default se debe de hacer sin los {}
```
function app(){}
export default app

import app from 'direccion'
```

Esto se puede hacer con las arrow function y asi se estara trabajando a lo largo del curso.

# Fragmento
Si queremos exportar mas de una etiqueta html nos dara un error, entonces hay 3 formas 
* Poner un div como elemento padre
* Importar {Fragment} de react y poner eso como elemento padre
* La ultima y la mas comun es solamente poner un <> como elemento padre y eso ya es sinonimo de un Fragment

# Imprimir variables en el html
Si queremos imprimir una variable en una etiquieta simplemente ponemos {variable}, incluso podemos imprimir lo que es una funcion, pero solamente si lo ponemos dentro de {} porque eso lo que nos permite es poner sintaxis o expresiones de js