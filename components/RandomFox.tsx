import React, { ImgHTMLAttributes, useEffect, useRef, useState } from "react";

type ImageNativeTypes= ImgHTMLAttributes<HTMLImageElement>; //el tipo que nos pide la etiqueta <img>, esto para que herede todos los tipos que funcionarian por defecto para una imagen <img>
type LazyImageProps={image:string}
type Props=LazyImageProps&ImageNativeTypes

//FORMA 1
// const RandomFox = (props: { image: string }) => { 

//   return (
//     <div>
//       <img src={props.image} alt="" />
//     </div>
//   )
// }

// export default RandomFox

const LazyImage = ({image,...imgProps}:Props) => { //se utiliza el spreadOperator (...) para decirle que todo lo demas que venga en los props lo guarde en esa variable para usarla en <img>
  const node = useRef<HTMLImageElement>(null); //Por defecto el generico useRef viene por undefined y debemos darle el tipo que se usara.
  //En este caso se usara el elemento de Image que ref en <img>
  //En este caso los tipos del useRef esperan una imagen de tipo <HTMLImage Element> o un null.
  //Como le enviamos la imagen desde los props, en este momento sera null

  const [src, setsrc] = useState(
    "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzIwIiBoZWlnaHQ9IjMyMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB2ZXJzaW9uPSIxLjEiLz4="
  );

  useEffect(() => {
    //nuevo Obsevador
    const observer = new window.IntersectionObserver((entries) => {
      //IntersectionObserver tiene un callback recibiendo entradas
      entries.forEach((entry) => {
        //onIntersection -> console.log
        if (entry.isIntersecting) {
          //Si esta propiedad llega a ser cierta, significa que este elemento esta dentro en la pantalla y saldra el console log
          console.log("hey you");
          setsrc(image);
        }
      });
    });

    //observe node
    if (node.current) {
      //este if nos verificara que el node.current existe
      observer.observe(node.current);
    }

    //desconectar
    return () => {
      observer.disconnect();
    };
  }, [image]);

  return (
    <div>
      <img
        ref={node}
        src={src}
        // alt=""
        // className="bg-gray-300 w-80 my-2 rounded" no es necesario tener ahora estos elementos en el hijo generico
        {...imgProps} //pasa todo lo de img props para diferentes atributos como OnClick,title,etc que se reciben del padre
      />
    </div>
  );
};

export default LazyImage;
