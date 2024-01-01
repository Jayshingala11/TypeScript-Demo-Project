import fs from 'fs';
import path from 'path';

const directory = __dirname;

const files = fs.readdirSync(directory);

const models = {};

files.forEach((file) => {
  if (file !== "indexModel.ts" && file.endsWith(".ts")) {
    const modelName = path.basename(file, ".ts");
    const model = require(`./${file}`);
    models[modelName] = model;
  }
});

Object.keys(models).forEach((modelName) => {
  if (models[modelName].associate) {
    models[modelName].associate(models);
  }
});

export default models;


// import fs from 'fs';
// import path from 'path';
// import { Sequelize } from 'sequelize';
// import { Model } from 'sequelize/types';

// const directory = __dirname;

// interface Models {
//   [key: string]: Model<any, any>; // Adjust as per your actual model types
// }

// const models: Models = {};

// const files = fs.readdirSync(directory);

// files.forEach((file) => {
//   if (file !== 'indexModel.ts' && file.endsWith('.ts')) {
//     const modelName = path.basename(file, '.ts');
//     const model = require(`./${file}`);
//     models[modelName] = model;
//   }
// });

// Object.keys(models).forEach((modelName) => {
//   if (models[modelName].associate) {
//     models[modelName].associate(models);
//   }
// });

// export default models as { [key: string]: Model<any, any> }; // Adjust as per your actual model types
