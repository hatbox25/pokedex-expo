const { withEnzyme } = require('jest-expo-enzyme');
 
module.exports = {
  projects: [
    withEnzyme(require('jest-expo/web/jest-preset')),
  ],
};