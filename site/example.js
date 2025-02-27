const www = require("./www");
const gstyle = require("./gstyle");
const t = www.tag;

module.exports = (name) => {

	const page = t("html", {}, [
		t("head", {}, [
			t("meta", { name: "twitter:card", content: "player", }),
			t("meta", { name: "twitter:site", content: "@Kaboomjs", }),
			t("meta", { name: "twitter:title", content: name, }),
			t("meta", { name: "twitter:description", content: `kaboom.js example - ${name}`, }),
			t("meta", { name: "twitter:image", content: `https://kaboomjs.com/pub/img/chill.png`, }),
			t("meta", { name: "twitter:player", content: `https://kaboomjs.com/example/${name}`, }),
			t("meta", { name: "twitter:player:width", content: "480", }),
			t("meta", { name: "twitter:player:height", content: "480", }),
			t("style", {}, www.style(gstyle)),
			t("script", { src: "/lib/dev/kaboom.js", }, ""),
		]),
		t("body", {}, [
			t("script", { src: `/pub/examples/${name}.js`, }, ""),
		]),
	]);

	return "<!DOCTYPE html>" + page;

}
