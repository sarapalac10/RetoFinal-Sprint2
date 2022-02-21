export const askHTML = [
    {
        question: "¿HTML es la abreviatura de...?",
        opciones: [
            {respuesta: "Lenguaje de material de hiperweb", isCorrect: false },
            {respuesta: "HyperText Markup Language", isCorrect: true },
            {respuesta: "History Totaly MyWeb Lenguage", isCorrect: false },
        ],
    },
    {
        question: "¿Cómo se inserta un comentario en HTML?",
        opciones: [
            {respuesta: "Los comentarios en HTML empiezan con '</-' y terminan con '/>'", isCorrect: false },
            {respuesta: "Los comentarios en HTML empiezan con '<¿-' y terminan con '?>'", isCorrect: false },
            {respuesta: "Los comentarios en HTML empiezan con '<!-' y terminan con '->'", isCorrect: true },
        ],
    },
    {
        question: "¿Cuál es la versión actualmente vigente del estándar HTML?",
        opciones: [
            {respuesta: "HTML 6", isCorrect: false },
            {respuesta: "HTML 4", isCorrect: false },
            {respuesta: "HTML 5", isCorrect: true },
        ],
    },
    {
        question: "¿Cuál es la estructura de una página Web?",
        opciones: [
            {respuesta: "<!DOCTYPE html> <html> <head>.....</head> <body>.....</body> </html>", isCorrect: true },
            {respuesta: "<!DOCTYPE html> <html> <head>.....</head> <body>.....</body> <footer>....</footer> </html>", isCorrect: false },
            {respuesta: "<!DOCTYPE html> <head>.....</head> <body>....</body> <footer>.....</footer>", isCorrect: false },
        ],
    },
    {
        question: "¿Cuál de estas etiquetas ayuda a que los acentos se vean bien en una página web?",
        opciones: [
            {respuesta: "<accentuation='on'>", isCorrect: false },
            {respuesta: "<meta ASCII='yes'>", isCorrect: false },
            {respuesta: "<meta charset='UTF-8'>", isCorrect: true },
        ],
    }
]

export const askCSS = [
    {
        question: "¿Qué significa CSS?",
        opciones: [
            {respuesta: "Coded Style Sheets (Hojas de Estilo Codificadas)", isCorrect: false },
            {respuesta: "Cross-browser Style Sheets (Hojas de Estilo Multi-navegador)", isCorrect: false },
            {respuesta: "Cascading Style Sheets (Hojas de Estilo en Cascada)", isCorrect: true },
        ],
    },
    {
        question: "¿Cómo podemos añadir un comentario en una hoja de estilo CSS?",
        opciones: [
            {respuesta: "Después de los caracteres '//'. Ej: // Este es un comentario CSS", isCorrect: false },
            {respuesta: "Entre los caracteres '/*' y '*/ '. Ej: /* esto es un comentario CSS */", isCorrect: true },
            {respuesta: "Entre las etiquetas '<!--' y '-->'. Ej: <!-- Esto es un comentario CSS -->", isCorrect: false },
        ],
    },
    {
        question: "¿Cuál es la versión actualmente vigente del estándar HTML?",
        opciones: [
            {respuesta: "En la sección <head>", isCorrect: true },
            {respuesta: "Se puede definir en cualquier sección de la página", isCorrect: false },
            {respuesta: "En la sección <footer>", isCorrect: false },
        ],
    },
    {
        question: "En HTML existe el atributo 'class'. En relación con los estilos CSS, ¿para qué crees que sirve?",
        opciones: [
            {respuesta: "Para indicar la clase de estilo que vamos a aplicar al elemento/etiqueta HTML que lleva ese atributo: en línea, hoja interna o externa CSS", isCorrect: false },
            {respuesta: "Es específico para indicar el color de la fuente que queremos aplicar, Por ejemplo: p class='red' presentaría las letras en rojo de ese párrafo", isCorrect: false },
            {respuesta: "Para aplicar unos estilos específicos (que se definen en una hoja CSS interna o externa) a los elementos que tenga la misma clase, es decir, el mismo valor en ese atributo.", isCorrect: true },
        ],
    },
    {
        question: "¿Qué está mal en esta regla de estilo: '.cuadro { border: 1px blue dotted padding: 10px 5px; }' ?",
        opciones: [
            {respuesta: "falta una ',' (coma) entre los dos valores de la propiedad padding (10px 5px)", isCorrect: false },
            {respuesta: "A la propiedad border solo se le puede dar un valor y no 3 como aparece aquí: 1px, blue y dotted", isCorrect: false },
            {respuesta: "Falta un ';' (punto y coma) al final de la declaración del estilo 'border'", isCorrect: true },
        ],
    }
]

export const askJS = [
    {
        question: "¿Cuáles de estas son marcas para la inserción del código JavaScript en las páginas HTML?",
        opciones: [
            {respuesta: "<?script> y <script?>", isCorrect: false },
            {respuesta: "<javascript _code> y </javascript_code>", isCorrect: false },
            {respuesta: "<script> y </script>", isCorrect: true },
        ],
    },
    {
        question: "¿La llamada al código Javascript debe colocarse en: ?",
        opciones: [
            {respuesta: "La sección Body de la página", isCorrect: false },
            {respuesta: "Puede colocarse en la sección Head o en Body", isCorrect: true },
            {respuesta: "Antes de la etiqueta HTML", isCorrect: false },
        ],
    },
    {
        question: "En JavaScript, para darle el nombre a una variable, objeto o función, debemos tener en cuenta que: ",
        opciones: [
            {respuesta: "JavaScript diferencia entre mayúsculas y minúsculas", isCorrect: true },
            {respuesta: "No se pueden usar mayúsculas", isCorrect: false },
            {respuesta: "JavaScript no distingue entre mayúsculas y minúsculas", isCorrect: false },
        ],
    },
    {
        question: "¿Cuál es la instrucción usada para devolver un valor en una función de JavaScript?",
        opciones: [
            {respuesta: "Send", isCorrect: false },
            {respuesta: "Value", isCorrect: false },
            {respuesta: "Return", isCorrect: true },
        ],
    },
    {
        question: "¿Para concatenar cadenas de caracteres en Javascript se usa el carácter?",
        opciones: [
            {respuesta: ". (punto)", isCorrect: false },
            {respuesta: "& (ampersand)", isCorrect: false },
            {respuesta: "+ (más)", isCorrect: true },
        ],
    },
    {
        question: "¿Para terminar las instrucciones en Javascript se utiliza:?",
        opciones: [
            {respuesta: "La sentencia End.", isCorrect: false },
            {respuesta: "Un punto y coma", isCorrect: false },
            {respuesta: "Un punto y coma o un salto de línea", isCorrect: true },
        ],
    }
]

export const askFIGMA = [
    {
        question: "¿Qué es Figma?",
        opciones: [
            {respuesta: "Es un apartado de codificación", isCorrect: false },
            {respuesta: "Es un apartado de prototipos", isCorrect: false },
            {respuesta: "Es una herramienta de creación de prototipos.", isCorrect: true },
        ],
    },
    {
        question: "Seleccione las características de Figma",
        opciones: [
            {respuesta: "Cuenta con una biblioteca de componentes", isCorrect: true },
            {respuesta: "Permite el trabajo de manera colaborativa", isCorrect: false },
            {respuesta: "Diseña interfaces que se ejecutan en el navegador", isCorrect: false },
        ],
    },
    {
        question: "Seleccione las opciones de navegabilidad",
        opciones: [
            {respuesta: "Revisión de código de superiores", isCorrect: false },
            {respuesta: "Tiene historial de versiones", isCorrect: true },
            {respuesta: "Bibliotecas diferentes", isCorrect: false },
        ],
    },
    {
        question: "¿Figma nació directamente con la mentalidad de...?",
        opciones: [
            {respuesta: "Sotware malicioso", isCorrect: false },
            {respuesta: "Software libre", isCorrect: false },
            {respuesta: "Software colaborativo", isCorrect: true },
        ],
    },
    {
        question: "¿Cuál de las siguientes son características de Figma?",
        opciones: [
            {respuesta: "Es multiplataforma", isCorrect: true },
            {respuesta: "Desechar las propiedades de los elementos duplicados", isCorrect: false },
            {respuesta: "Sólo funciona en escritorio", isCorrect: false },
        ],
    }
]

export const askUX = [
    {
        question: "¿Cuál es el significado de UI-UX?",
        opciones: [
            {respuesta: "Es una herramienta de creación de prototipos.", isCorrect: false },
            {respuesta: "Es un apartado de codificación", isCorrect: false },
            {respuesta: "UI es interfaz de usuario y UX experiencia de usuario", isCorrect: true },
        ],
    },
    {
        question: "Es el área de conocimiento que se encarga de la distribución de los contenidos en un producto digital...",
        opciones: [
            {respuesta: "Teoría del color", isCorrect: false },
            {respuesta: "Motivación al diseño", isCorrect: false },
            {respuesta: "Arquitectura de la información", isCorrect: true },
        ],
    },
    {
        question: "Selecciona dos elementos en lo que se puede implementar el diseño UX",
        opciones: [
            {respuesta: "Facebook", isCorrect: false },
            {respuesta: "Apps Android", isCorrect: false },
            {respuesta: "Sitios web", isCorrect: true },
        ],
    },
    {
        question: "Selecciona beneficios que se obtienen al implementar UX en productos o servicios de la vida diaria...",
        opciones: [
            {respuesta: "Viralización del producto en redes sociales", isCorrect: false },
            {respuesta: "Atracción de nuevos inversionistas", isCorrect: false },
            {respuesta: "Aumento de las ganancias", isCorrect: true },
        ],
    },
    {
        question: "Es la disciplina que se encarga de crear productos funcionales y estéticos que brinden satisfacción al usuario...",
        opciones: [
            {respuesta: "Jerarquía de contenidos", isCorrect: false },
            {respuesta: "Desarrollo de interfaz del usuario", isCorrect: false },
            {respuesta: "Diseño de experiencia del usuario", isCorrect: true },
        ],
    }
]