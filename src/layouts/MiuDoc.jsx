import logo from "../resources/miuLogo.png";
import CodeCard from "../components/CodeCard";

function MiuDoc() {
  const ExamplesCodes = [
    {
      title: "Funciones",
      content: [
        {
          subtitle: "Funcion Main",
          code: `fn Main() {\n\tfmt.Print("Hola, mundo!");\n}`,
        },
        {
          subtitle: "Funcion con parametros",
          code: `fn Suma(x:int) {\n\tlet x=10;\n}`,
        },
        {
          subtitle: "Funcion con retorno",
          code: `fn Suma()->int {\n\treturn 10==1;\n}`,
        },
      ],
    },
    {
      title: "Declaracion variables",
      content: [
        {
          subtitle: "",
          code: `fn Suma()->int {\n\tlet i=0;\n\tlet j=0;\n\treturn i==j;\n}`,
        },
      ],
    },
    {
      title: "Declaracion del ciclo For",
      content: [
        {
          subtitle: "",
          code: `fn SaySomethin10Times(){\n\tfor i in 1..10{\n\t\tfmt.Print("Hola, mundo!");\n\t}\n}`,
        },
      ],
    },
    {
      title: "Declaración de estructuras de control",
      content: [
        {
          subtitle: "",
          code: `fn ValidateX(x:int){\n\tif x>10 {\n\t\tfmt.Print("x > 10");\n\t}else if x<10{\n\t\tfmt.Print("x < 10");\n\t}else{\n\t\tfmt.Print("x == 10");\n\t}\n}`,
        }
      ],
    },
    {
      title: "Llamadas de funcion",
      content: [
        {
          subtitle: "",
          code: `fn ExampleCallFunction() {\n\tfmt.Print("Hola, mundo!");\n}`,
        },
      ],
    },
    {
      title: "Declaración de modulos",
      content: [
        {
          subtitle: "",
          code: `use std::fmt;\n\nfn Module() {\n\tfmt.Print("Hola, mundo!");\n}`,
        },
      ],
    },
  ];

  return (
    <>
      <div className="border border-transparent border-r-white overflow-y-auto bg-slate-700 text-white w-1/2 h-full flex flex-col items-center content-center p-10 ">
        <img src={logo} className="h-1/5 w-auto mb-10"></img>
        <h1 className="text-4xl mb-20">MIU Language</h1>
        <p>
          Este lenguaje de programación es una fusión entre el lenguaje Rust y
          Go, funcionando lo bueno de cada uno de ellos con el fin de tener una
          experiencia más cómoda de programación, así como una lectura más
          clara.
        </p>
        <br />
        <p>
          Pasando al código, este cuenta con una sintaxis mayormente inspirada
          en Rust, empezando con la escritura de sus funciones, esta página solo
          mostrar la escritura de las estructuras, no habrá mucho detalle al
          respecto de estas:
        </p>
        <br />

        <div className="w-full pl-8">
          {ExamplesCodes.map((example, index) => {
            return (
              <CodeCard
                key={index}
                title={example.title}
                content={example.content}
              />
            );
          })}
        </div>
    
      </div>
    </>
  );
}

export default MiuDoc;
