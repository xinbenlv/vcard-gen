import vCardsJS from 'vcards-js';
const fs = require('fs')
const fg = require('fast-glob');


const main = async () => {
    function loadJSONFromFile(filePath: string): any {
        const jsonString = fs.readFileSync(filePath, 'utf-8');
        return JSON.parse(jsonString);
    }
    const jsonFiles = await fg(['dataset/*.json'], { dot: true });
    
    for (const filename of jsonFiles) {
        console.log(`Name XXX = `, filename);
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
    
        //save to file
        vCard.saveToFile(`output/${name}.vcf`);
        
    }
}

main().then().catch(console.error);