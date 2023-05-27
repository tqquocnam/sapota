import slugify from "slugify";

export const generateSlug = (text: string): string => {
  const slug = slugify(text, {
    lower: true,
    remove: /[*+~.()'"!:@]/g,
  });
  return slug;
};
