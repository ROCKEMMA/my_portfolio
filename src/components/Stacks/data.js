// Imagen ico
const ico = require.context('../../assets/stacks/');


const stackData = [
    {
        imgIco: ico('./bash.png'),
        title: 'Bash',
        description: 'Esta es la descripción del la habilidad de bash terminal',
        list: [
            'Comandos para directorios',
            'Instalación de programas apt',
            'Instalación de programas apt',
            'Instalación de programas apt',
            'Instalación de programas apt'
        ]

    },
    {
        imgIco: ico('./css.png'),
        title: 'CSS',
        description: 'Esta son las habilidad que puedo trabajar con CSS',
        list: [
            'Comandos para directorios',
            'Instalación de programas apt',
            'Instalación de programas apt',
            'Instalación de programas apt',
            'Instalación de programas apt'
        ]

    }
];

export {stackData};