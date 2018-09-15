import slugify from "slugify";

export const tagLink = tag => `/tag/${slugify(tag, { lower: true })}`;
