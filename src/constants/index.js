export const quizNavigation = [
    {name:'Home', to:'/'},
    {name:'Start', to:'/welcome'},
    {name:'Category', to:'/categories'},
    {name:'Quiz', to:'/quiz'},
    {name:'Results', to:'/results'},
];

const getNavByLinkName = (name) => {
    return quizNavigation.find(link => link.name === name);
}



export const startLink = getNavByLinkName('Start').to;
export const categoryLink = getNavByLinkName('Category').to;
export const quizLink = getNavByLinkName('Quiz').to;
export const resultsLink = getNavByLinkName('Results').to;


// export const quizNavigation = {
//     home: '/',
//     start: '/start',
//     category: '/categories',
//     quiz: '/quiz',
//     results: '/results'
// };

// export const startLink = quizNavigation.start;
// export const categoryLink = quizNavigation.category;
// export const quizLink = quizNavigation.quiz;
// export const resultsLink = quizNavigation.results;