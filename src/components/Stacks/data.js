// Imagen ico
const ico = require.context('../../assets/stacks/');


const stackData = [
    {
        imgIco: ico('./bash.png'),
        title: 'Bash',
        description: 'Habilidades para el desarrollo de proyectos en terminal, optimización de funciones repetitivas y automatización de tareas del sistema mediante script.',
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
        description: 'Desarrollo de diseño css, maquetación y animaciones UI y UX.',
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
        description: 'Conocimiento técnico del lenguaje para el desarrollo frontend y buenas prácticas de SEO on page.',
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
        description: 'Conocimiento de git para el desarrollo de aplicación mediante control de versiones, trabajo experimental en ramas y buenas prácticas y comunicación con el equipo.',
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
        description: 'Conocimientos para el trabajo de proyectos cooperativos mediante repositorios remotos.',
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
        title: 'GitHub',
        description: 'Sistema operativo Linux utilizado para el desarrollo de proyectos, por la gama de herramientas disponible, comandos de la terminal y amplio soporte por la comunidad para la resolución de problemas y nuevas implementaciones.',
        list: [
            'Uso de la terminal',
            'Configuración de comandos para la optimización de tareas y procesos.'
        ]
    },
    {
        imgIco: ico('./discord.png'),
        title: 'Discord',
        description: '😅',
        list: [
            'Conferencias',
            'Servidores',
            'Bots'
        ]
    },
    {
        imgIco: ico('./excel.png'),
        title: 'Excel',
        description: 'Manipulación de hojas de cálculo para el análisis de datos y desarrollo de informes.',
        list: [
            'Excel para el análisis de datos',
            'Creación de dashboard',
            'Construcción y diseño de tablas dinámicas',
            'Uso de macros básico competitivo'
        ]
    },
    {
        imgIco: ico('./figma.png'),
        title: 'Excel',
        description: '📝',
        list: [
            'Excel para el análisis de datos',
            'Creación de dashboard',
            'Construcción y diseño de tablas dinámicas',
            'Uso de macros básico competitivo'
        ]
    }
];

export {stackData};