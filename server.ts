import vCardsJS from 'vcards-js';
import express from 'express';
import fs from 'fs';
import fg from 'fast-glob';

const main = async () => {
    function loadJSONFromFile(filePath: string): any {
        const jsonString = fs.readFileSync(filePath, 'utf-8');
        return JSON.parse(jsonString);
    }
    const jsonFiles = await fg(['dataset/*.json'], { dot: true });

    const vCardDb = {};
    for (const filename of jsonFiles) {
        const name = filename.split("/")[1].split(".")[0];
        const json = loadJSONFromFile(filename);
        // https://www.npmjs.com/package/vcards-js
        const vCard = vCardsJS();
        for (let key in json.vCard) {
          if (key === "photo") {
            vCard.photo.embedFromFile(json.vCard[key].embedFromFile);
          } else if (key === "socialUrls") {
            for (let urlKey in json.vCard[key]) {
              vCard.socialUrls[urlKey] = json.vCard[key][urlKey];
            }
          } else {
            vCard[key] = json.vCard[key];
          }
        }

        vCardDb[name] = vCard;
    }

    const express = require('express')
    const app = express()
    const port = 3000

    app.get('/:user.vcf', function (req, res, next) {
        let user = req.params.user;
        if (user in vCardDb) { 
            const vCard = vCardDb[user];
            res.status(200)
            .attachment(`${user}.vcf`)
            .send(vCard.getFormattedString())
        } else {
            res.status(404).send('Sorry, we cannot find that!');
        }
    });

    
    app.listen(port, () => {
      console.log(`Example app listening on port ${port}`)
    })
}

main().then().catch(console.error);