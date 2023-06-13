import vCardsJS from 'vcards-js';
const fs = require('fs')


function loadJSONFromFile(filePath: string): any {
    const jsonString = fs.readFileSync(filePath, 'utf-8');
    return JSON.parse(jsonString);
}

for (const name of ["VZ"]) {
    const json = loadJSONFromFile(`dataset/${name}.json`);
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

    //save to file
    vCard.saveToFile(`output/${name}.vcf`);
    
}
