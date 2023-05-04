import work1 from "../../assets/work1.jpg";
import work2 from "../../assets/work2.jpeg";
import work3 from "../../assets/work3.jpeg";
import work4 from "../../assets/work4.jpeg";
import work5 from "../../assets/work5.jpeg"
import work6 from "../../assets/work6.png";
import work7 from "../../assets/work7.png";

export const projectsData = [
    {
        id: 1,
        image: work4,
        title: 'REST API example',
        link: 'https://github.com/Mateusbrbza/REST-API',
        category: [
            'web',
            'backend',
            'mongodb',
            'express',
        ],
    },
    {
        id: 1,
        image: work7,
        title: 'Twitter Clone Demo',
        link: 'https://github.com/Mateusbrbza/Twitter-Demo',
        category: [
            'web',
            'frontend',
            'mongodb',
            'prisma',
            'next',
            'tailwind',
            'react',
        ],
    },
    {
        id: 1,
        image: work6,
        title: 'Ecommerce',
        link: 'https://encantali-prototype.netlify.app',
        category: ['web', 'frontend', 'react'],
    },
    {
        id: 1,
        image: work3,
        title: 'e-gym',
        link: 'https://exercism-gym.netlify.app',
        category: ['web', 'frontend', 'react'],
    },
    {
        id: 1,
        image: work2,
        title: 'Admin Dashboard',
        link: 'https://adm-dashboard.netlify.app',
        category: ['web', 'tailwind', 'react', 'frontend'],
    },
    {
        id: 1,
        image: work5,
        title: 'Netflix Clone',
        link: 'https://reactflix-clone.netlify.app',
        category: ['web', 'frontend', 'react'],
    },
];

// filtros de name serão utilizados somente quando houver mais projetos

export const projectsNav = [
    {
        name: 'todos',
    },
    {
        name: 'web',
    },
    {
        name: 'app',
    },
];