export const getQuestions = async(difficulty,category, amount,retries = 3, delay = 1000) => {
 
    // const quizApi = `${import.meta.env.VITE_QUIZ_API_URL}?amount=10&category=${category}&difficulty=${difficulty}`;
    const quizApi = `${import.meta.env.VITE_QUIZ_API_URL}?amount=${amount}&category=${category}&difficulty=${difficulty}`;
    try{
        const response = await fetch(quizApi);
        if(!response.ok){
            if (response.status === 429 && retries > 0) {
              // Retry mechanism for Too Many Requests error
                console.log('Rate limited, retrying...');
                await new Promise(resolve => setTimeout(resolve, delay));
                return getQuestions(difficulty, category,amount, retries - 1, delay);
            }
            throw(`Error fetching data: ${response.status}`);
        }
        const data = await response.json();
        return data;
    }catch(error){
        console.error(error.message);
        throw error;
    }
}