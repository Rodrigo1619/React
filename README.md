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