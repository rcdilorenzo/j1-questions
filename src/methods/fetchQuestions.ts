const fetchQuestions = async () => {
  return await fetch('https://apps.dev.jupiterone.io/static/managed-questions.json')
    .then((r: any) => r.json())
}

export default fetchQuestions