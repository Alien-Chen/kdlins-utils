let utils = {};

const modules = require.context('./all/', true, /.js$/);

modules.keys().forEach((modulesKey) => {
  utils = { ...utils, ...modules(modulesKey) };
});
// console.log(utils);
module.exports = utils;
