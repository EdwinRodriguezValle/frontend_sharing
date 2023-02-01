# NOTAS REACT

## Componentes reutilizables:

1. A la función principal se le pone pros en el argumento y en seguida se puede cambiar
   las el contenido con props o el nombre directo de la referencia.
   import React from 'react';
- El siguiente es estática:

`function Card(props) {
return (

<article>
<h1>{props.title}</h1>
{props.children}
</article>
);
}

export default Cards`

Luego en app principal llamas de esta manera

`function App() {
return (
<>
<Cards
title={"Hola"}
children={"Canciones"}
/>

);
}

default export App`


## useState
function App() {
const [player, setPlayer] = React.useState('');

return (
<>
<h1>{player} is aan de beurt</h1>
<button type="button" onClick={() => setPlayer('Bart')}>Bart</button>
<button type="button" onClick={() => setPlayer('Piet')}>Piet</button>
<button type="button" onClick={() => setPlayer('Marie')}>Marie</button>
</>
);
}