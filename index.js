const express = require("express");
const fs = require("fs");const app = express();app.listen(3000, () => {
    console.log("SERVER STARTED...");
});app.use(express.static('./public'));app.get('/get_text', (req, res) => {
    res.send({
    	title:"Mon article",
    	content:"le contenu de l'article",
    	author:"Khadija",
    });
});