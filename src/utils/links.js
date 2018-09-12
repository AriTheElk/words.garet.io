import slugify from "slugify";

export const categoryLink = category =>
  `/category/${slugify(category, { lower: true })}`;
