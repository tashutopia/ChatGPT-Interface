const OpenAI = require('openai');
const express = require('express');

const openai = new OpenAI({
  organization: 'org-8x2140RFMmlidGcZnliyUN5K',
  apiKey: //enter api key,
});


// async function callApi() {
//   const completion = await openai.chat.completions.create({
//     messages: [{ role: "system", content: "You are a helpful assistant." }],
//     model: "gpt-3.5-turbo",
//   });

//   console.log(completion.choices[0]);
// }

// callApi();

const app = express();
const port = 3080;

app.post('/', async (req, res) => {
    const completion = await openai.chat.completions.create({
        messages: [{ role: "system", content: "You are a helpful assistant." }],
        model: "gpt-3.5-turbo",
    });
    
    console.log(completion.choices[0]);
    res.json({
        data: completion.choices
    })
});

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});