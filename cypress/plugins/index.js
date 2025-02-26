/// <reference types="cypress" />
const cucumber =
  require("@badeball/cypress-cucumber-preprocessor").addCucumberPreprocessorPlugin;
const createBundler = require("@bahmutov/cypress-esbuild-preprocessor");
const createEsbuildPlugin =
  require("@badeball/cypress-cucumber-preprocessor/esbuild").createEsbuildPlugin;
const fs = require("fs");
const xlsx = require("node-xlsx").default;
// ***********************************************************

/**
 * @type {Cypress.PluginConfig}
 */
// eslint-disable-next-line no-unused-vars

module.exports = async (on, config) => {
  await cucumber(on, config); // to allow json to be produced
  // To use esBuild for the bundler when preprocessing
  on(
    "file:preprocessor",
    createBundler({
      plugins: [createEsbuildPlugin(config)],
    })
  );
  on("task", {
      readdir(folderName) {
      return new Promise((resolve, reject) => {
        fs.readdir(folderName, (err, files) => {
          if (err) {
            return reject(err);
          }
          resolve(files);
        });
      });
    },
    //parsing xlsx data
    parseXlsx({ filePath }) {
      return new Promise((resolve, reject) => {
        try {
          const jsonData = xlsx.parse(fs.readFileSync(filePath));
          resolve(jsonData);
        } catch (e) {
          reject(e);
        }
      });
    },
    downloads: (downloadspath) => {
      return fs.readdirSync(downloadspath);
    },
    deleteFolder(folderName) {
      console.log("deleting folder %s", folderName);
      return new Promise((resolve, reject) => {
        fs.rmdir(folderName, { maxRetries: 10, recursive: true }, (err) => {
          if (err) {
            console.error(err);
            return reject(err);
          }
          resolve(null);
        });
      });
    },
  });
  return config;
};




