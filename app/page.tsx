'use client'; //Esto es debido a la nueva versión de Next.js (v13). Todos los componentes por defecto son ServerComponents, por lo que si se quieren usar hooks que utilicen API del navegador como useState se debe colocar “use client” en la primera línea del archivo dónde se encuentra dicho componente

import LazyImage from "@/components/RandomFox";
import { MouseEventHandler, useState } from "react";

type ImageItems= {id:string,url:string}

const generateId = () => Math.random().toString(36).substring(2,9)

const random = (): number => {
  return Math.floor(Math.random() * 123) + 1;
};

// export default function Home() {
//   const [image, setImage] = useState<string[]>([ //<string> es un generador
//     `https://randomfox.ca/images/${random()}.jpg`,
//     `https://randomfox.ca/images/${random()}.jpg`,
//     `https://randomfox.ca/images/${random()}.jpg`,
//     `https://randomfox.ca/images/${random()}.jpg`
//   ]);


// export default function Home() {
//   const [image, setImage] = useState<Array<ImageItems>>([ //<Array<ImageItems>> es un generador
//     {id:generateId(), url:`https://randomfox.ca/images/${random()}.jpg`},
//     {id:generateId(), url:`https://randomfox.ca/images/${random()}.jpg`},
//     {id:generateId(), url:`https://randomfox.ca/images/${random()}.jpg`},
//     {id:generateId(), url:`https://randomfox.ca/images/${random()}.jpg`}
//   ]);


export default function Home() {
  const [image, setImage] = useState<Array<ImageItems>>([]);

  const addNewFox:MouseEventHandler<HTMLButtonElement>=(event)=>{ //asignarle el tipo que pide el onClick
    const newImageItem:ImageItems={ //asignarle a la nueva variable el tipo de imageItems para ser explicito
      id:generateId(), url:`https://randomfox.ca/images/${random()}.jpg`
    };

    setImage([
      ...image,
      newImageItem
    ])
  }


  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1 className="text-3xl font-bold underline">Hello world!</h1>
      <button className="btn btn--primary" onClick={addNewFox}>Add new fox</button>
      {image.map(({id, url}) => (
        <div key={id}>
          <LazyImage image={url} title="Random Fox" alt="" className="bg-gray-300 w-80 my-2 rounded" onClick={()=>console.log('hey')}></LazyImage>
        </div>
      ))}
    </main>
  );
}
