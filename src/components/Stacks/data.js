// Imagen ico
const ico = require.context('../../assets/stacks/');


const stackData = [
    {
        imgIco: ico('./bash.png'),
        title: 'Bash',
        list: [
            'Manipulación de archivos y directorios',
            'Exploración de archivo y carpetas con wildcards',
            'Redirecciones standard input',
            'pipe operator |',
            'Operadores de control',
            'Gestión de permisos $ chmod',
            'Variables de entorno .bashrc',
            'Comando de búsqueda',
            'Instalación de programas tar.gz',
            'Instalación de programas apt',
            'Trabajar con archivos comprimidos tar zip',
            '# Manejo de progresos',
            'Procesar texto desde la terminal'

        ]
    },
    {
        imgIco: ico('./css.png'),
        title: 'CSS',
        list: [
            'Metodología BEM',
            'Animaciones básicas',
            'Dominio de Flexbox',
            'Dominio de CSS grid',
            'Diseño responsive',
            'Media queries',
            'Framework bootstrap',
            'Preprocesador Sass'
        ]
    },
    {
        imgIco: ico('./html.png'),
        title: 'HTML 5',
        list: [
            'Semántica de las etiquetas html5',
            'SEO on page',
            'Metodología BEM para las clases',
            'Construcción de formularios'
        ]
    },
    {
        imgIco: ico('./git.png'),
        title: 'Git',
        list: [
            'Inicialización de repositorio',
            'Análisis de cambios en el proyecto',
            'Trabajo experimental y de aporte mediante ramas',
            'Resolución de conflictos en merge',
            'Visualización de progresos con checkout',
            'Recuperación de commits con git reset',
            'Configuración de usuario git',
            'Creación y configuración de llave ssh',
            'Comandos para trabajar con github'
        ]
    },
    {
        imgIco: ico('./github.png'),
        title: 'GitHub',
        list: [
            'Integración de llaves públicas y privadas.',
            'Conexión a github con SSH',
            'Manejo de ramas en GitHub',
            'Configuración de colaboradores',
            'Flujo de trabajo con pull request',
            'Creación de Fork',
            'Deployment a un servidor',
            'Configuración de .gitignore',
            'Redacción de README',
            'Configuración de GitHub Pages',
            'Limpieza de proyecto Git Clean'
        ]
    },
    {
        imgIco: ico('./ubuntu.png'),
        title: 'Ubuntu',
        list: [
            'Uso de la terminal',
            'Configuración de comandos para la optimización de tareas y procesos.'
        ]
    },
    {
        imgIco: ico('./discord.png'),
        title: 'Discord',
        list: [
            'Conferencias',
            'Servidores',
            'Bots'
        ]
    },
    {
        imgIco: ico('./excel.png'),
        title: 'Excel',
        list: [
            'Excel para el análisis de datos',
            'Creación de dashboard',
            'Construcción y diseño de tablas dinámicas',
            'Uso de macros básico competitivo'
        ]
    },
    {
        imgIco: ico('./figma.png'),
        title: 'figma',
        list: [
            'Creación de esquemas y mapas visuales.',
            'Diseño de interfaces gráficas.',
            'Diseño de componentes para interfaces gráficas.'
        ]
    },
    {
        imgIco: ico('./illustrator.png'),
        title: 'Illustrator',
        list: [
            'Vectorización de imágenes',
            'Retoques y creación de íconos'
        ]
    },
    {
        imgIco: ico('./photoshop.png'),
        title: 'Photoshop',
        list: [
            'Transformaciones',
            'Pinceles',
            'Retoque fotográfico',
            'Luces, sombras y color'
        ]
    },
    {
        imgIco: ico('./java.png'),
        title: 'Java',
        list: [
            'Variables',
            'Condicionales',
            'Bucles',
            'Funciones',
            'Arrays',
            'Java Docs',
            'Objetos',
            'Modularidad',
            'Definición de clases',
            'Getters & Setters',
            'Interfaces'
        ]
    },
    {
        imgIco: ico('./javascript.png'),
        title: 'JavaScript',
        list: [
            'Variables',
            'Condicionales',
            'Bucles',
            'Operaciones matemáticas',
            'Funciones',
            'Arrays',
            'Objetos',
            'Manipulación del DOM',
            'Interfaces',
            'Clases',
            'Consumo de API'
        ]
    },
    {
        imgIco: ico('./react.png'),
        title: 'React',
        list: [
            'Componentes basados en clases',
            'Uso del State',
            'Renderizado de componentes',
            'Componentes basados en funciones',
            'Hooks',
            'useState',
            'Custom hook',
            'useReducer',
            'Formularios'
        ]
    },
    {
        imgIco: ico('./python.png'),
        title: 'Python',
        list: [
            'Variables',
            'Condicionales',
            'Bucles',
            'Operaciones matemáticas',
            'Funciones',
            'Arrays',
            'Objetos'
        ]
    },
    {
        imgIco: ico('./linode.png'),
        title: 'Linode',
        list: [
            'Creación de linode para web statica',
            'Creación de linode para web en reac',
            'Configuración de dominio',
        ]
    },
    {
        imgIco: ico('./notion.png'),
        title: 'Notion',
        list: [
            'Creación de datas',
            'Funciones aritméticas en tablas',
            'Creación de dashboard',
        ]
    },
    {
        imgIco: ico('./sql.png'),
        title: 'SQL',
        list: [
            'Manejo de script',
            'Creación de base de datos',
            'Manejo de llaves',
            'Consultas',
            'Actualización y eliminación de datos'
        ]
    },
    {
        imgIco: ico('./vscode.png'),
        title: 'Visual Studio code',
        list: [
            'Instalación de plugis',
            'Productividad',
            'Personalización',
            'Uso de la terminal'
        ]
    }
];

export {stackData};