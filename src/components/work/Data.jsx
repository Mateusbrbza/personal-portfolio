import work1 from "../../assets/work1.jpg";
import work2 from "../../assets/work2.jpeg";
import work3 from "../../assets/work3.jpeg";
import work5 from "../../assets/work5.jpeg"
import work6 from "../../assets/work6.png";

export const projectsData = [
    {
        id: 1,
        image: work6,
        title: 'Ecommerce',
        link: 'https://encantali-prototype.netlify.app',
        category: 'web',
    },
    {
        id: 1,
        image: work3,
        title: 'e-gym',
        link: 'https://exercism-gym.netlify.app',
        category: 'web',
    },
    {
        id: 1,
        image: work2,
        title: 'Admin Dashboard',
        link: 'https://adm-dashboard.netlify.app',
        category: 'web',
    },
    {
        id: 1,
        image: work5,
        title: 'Netflix Clone',
        link: 'https://reactflix-clone.netlify.app',
        category: 'web',
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