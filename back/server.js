/* Ce code configure un serveur Express de base en JavaScript. */
require("dotenv").config();
const express = require("express");
const app = express();
const userRouter = require("./routes/userRoute");

/* Fonction middleware */
app.use((req, res, next) => {
    /* Définit la valeur de l'en-tête `Access-Control-Allow-Origin` dans la réponse. */
    res.setHeader('Access-Control-Allow-Origin', '*');
    /* Définit la valeur de l'en-tête de réponse `Access-Control-Allow-Headers`. */
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');

    next();
});

/* Permet au serveur de gérer les données JSON envoyées dans le corps de la requête. */
app.use(express.json());

/* Middleware pour gérer les requêtes vers la route "/users". */
app.use("/users", userRouter);

/* Utilisée pour démarrer le serveur et lui faire écouter les requêtes entrantes sur un port spécifique. */
app.listen(process.env.APP_PORT, () => {
    console.log("Server up and running on PORT : ", process.env.APP_PORT);
})