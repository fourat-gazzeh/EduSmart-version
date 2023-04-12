import express from 'express';
import * as dotenv from 'dotenv' ;
import cors from 'cors';
import { Configuration, OpenAIApi } from 'openai';

dotenv.config();

const configuration = new Configuration ({ //une instance de Configuration est créée en utilisant la clé API d'OpenAI stockée dans la variable d'environnement "OPENAI_API_KEY
    apiKey: process.env.OPENAI_API_KEY,
});

const openai = new OpenAIApi(configuration); // Une fois l'instance créée, elle peut être utilisée pour appeler différentes méthodes de l'API OpenAI en fonction des besoins de l'application.
// Par exemple, l'instance peut être utilisée pour appeler la méthode generate qui génère du texte en fonction d'une entrée spécifique.

const app = express();
app.use(cors());//a fonction app.use() est utilisée pour ajouter deux middlewares Le premier middleware "cors()" permet d'autoriser les requêtes provenant de domaines différents
app.use(express.json());//permet à l'application d'analyser les données JSON envoyées avec les requêtes HTTP. Il transforme les données JSON en objets JavaScript 
//et les ajoute à la propriété body de l'objet Request qui est passé aux gestionnaires de routage.

app.get('/', async (req, res) =>{ //route indique que lorsque l'application reçoit une requête GET pour l'URL de base "/", elle doit renvoyer une réponse avec un code de statut 200 et un objet JSON contenant le message "Hello from CodeX"
    res.status(200).send({
        message: 'Hello from CodeX',
    })
});

app.post('/',async (req, res) => { // méthode HTTP POST de la route de base ('/'). Cette fonction de rappel est définie comme asynchrone avec le mot-clé async.
    try {
        const prompt = req.body.prompt;//req.body contient les données envoyées avec la requête.
        //La variable "prompt" est extraite du corps de la requête grâce à la propriété "body" de l'objet "req"
        //text ili dakhlou utilisateur

        const response = await openai.createCompletion({ // l'objet openai pour appeler la méthode createCompletion() qui est utilisée pour envoyer une demande à l'API OpenAI
            model: "text-davinci-003",
            prompt: `${prompt}`,//une requête est envoyée à l'API OpenAI pour générer une réponse à partir du modèle de langage
            temperature: 0,
            max_tokens: 3000,
            top_p: 1,
            frequency_penalty: 0.5,
            presence_penalty: 0,
            
        });

        res.status(200).send({
            bot: response.data.choices[0].text//La réponse est renvoyée au client sous forme d'un objet JSON contenant la clé "bot" avec le texte généré par le modèle OpenAI. Si une erreur se produit
        })
    } catch (error) {
        console.log(error);
        res.status(500).send({ error })
    }
    //Lorsqu'un utilisateur soumet une requête POST à l'URL racine, cette route est appelée.
    //Ce code est utilisé pour traiter une requête POST envoyée à l'URL de base de l'application (/). Il utilise
    // l'instance de l'API OpenAI pour créer une réponse à partir d'une chaîne de texte fournie dans la requête
})
app.listen(5000, () => console.log('Server is running on port http://localhost:5000'));
 