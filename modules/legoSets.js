const setData = require("../data/setData");
const themeData = require("../data/themeData");

let sets = []; 


function Initialize() {
    return new Promise((resolve, reject) => {
      try {
        setData.forEach(set => {
          const theme = themeData.find(theme => theme.id === set.theme_id);
          if (theme) {
            sets.push({
              ...set,
              theme: theme.name
            });
          }
        });
        resolve(); // Resolve with no data
      } catch (error) {
        reject(`Error initializing sets: ${error}`);
      }
    });
  }


  function getAllSets() {
    return new Promise((resolve, reject) => {
      try {
        resolve(sets); // Resolve with the complete sets array
      } catch (error) {
        reject(`Error retrieving sets: ${error}`);
      }
    });
  }

  function getSetByNum(setNum) {
    return new Promise((resolve, reject) => {
      try {
        const set = sets.find(set => set.set_num === setNum);
        if (set) {
          resolve(set); // Resolve with the found set object
        } else {
          reject(`Unable to find requested set with set_num: ${setNum}`);
        }
      } catch (error) {
        reject(`Error retrieving set: ${error}`);
      }
    });
  }

  function getSetsByTheme(theme) {
    return new Promise((resolve, reject) => {
      try {
        const lowerCaseTheme = theme.toLowerCase();
        const foundSets = sets.filter(set => set.theme.toLowerCase().includes(lowerCaseTheme));
        if (foundSets.length > 0) {
          resolve(foundSets); // Resolve with the found set objects
        } else {
          reject(`Unable to find requested sets with theme: ${theme}`);
        }
      } catch (error) {
        reject(`Error retrieving sets by theme: ${error}`);
      }
    });
  }

Initialize(); 


module.exports = { Initialize, getAllSets, getSetByNum, getSetsByTheme }