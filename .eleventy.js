const pluginWebc = require("@11ty/eleventy-plugin-webc");

module.exports = function (config) {
	config.addPassthroughCopy("media");
	config.addPassthroughCopy("CNAME");

	config.addPlugin(pluginWebc);

};