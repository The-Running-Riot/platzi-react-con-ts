import type { FunctionComponent,FC } from "react" // Usando tipos de React "FunctionComponent"


export const RandomFox1=()=>{ //Hover en la funcion y vemos que el tipo que retornara es un numero.
    return 39
}

export const RandomFox2=():JSX.Element=>{ //ahora de forma explicita le decimos que queremos de que retorne el tipo JSX.ELEMENT
    return <img src="" alt="" />
}

export const RandomFox3:FunctionComponent =()=>{ //tipando la constante con FunctionComponent
    return 30
}

export const RandomFox4:FC=()=>{ //Tipando la consonante con FC, que es la abreviacion de FunctionComponent
    return null
}