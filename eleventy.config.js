import { DateTime } from "luxon";

export default function (eleventyConfig) {

    eleventyConfig.addPassthroughCopy("views/assets/img");
    eleventyConfig.addPassthroughCopy("views/assets/js");

    // FILTERS
    eleventyConfig.addFilter("postDate", (dateObj, format = "DDD", locale = "en") => {
        return DateTime.fromJSDate(dateObj).setLocale(locale).toFormat(format);
    });

    eleventyConfig.addFilter("postDateIso", (dateStr, format = "DDD", locale = "en") => {
        return DateTime.fromISO(dateStr).setLocale(locale).toFormat(format);
    });
};

export const config = {

    markdownTemplateEngine: "njk",
    htmlTemplateEngine: "njk",

    dir: {
        input: "views",
        layouts: "_layouts",
        output: "dist"
    }
};