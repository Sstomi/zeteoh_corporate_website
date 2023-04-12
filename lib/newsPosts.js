import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { bundleMDX } from "mdx-bundler";

const postsDirectory = path.join(process.cwd(), "news-posts");

export function getSortedNewsPostsData(locale) {
  // Get file names under /posts
  const fileNames = fs.readdirSync(postsDirectory);
  // filter out filenames that contain the locale and extract the id
  const allPostsData = fileNames
    .filter((fileName) => fileName.includes(locale))
    .map((fileName) => {
      // the filename are like this: 2021-01-01.en.mdx
      // and we want only 2021-01-01
      const id = fileName.split(".")[0];

      // Read markdown file as string
      const fullPath = path.join(postsDirectory, fileName);
      const fileContents = fs.readFileSync(fullPath, "utf8");

      // Use gray-matter to parse the post metadata section
      const matterResult = matter(fileContents);

      // Combine the data with the id
      return {
        id,
        ...matterResult.data,
      };
    });
  // Sort posts by date
  return allPostsData.sort((a, b) => {
    if (a.date < b.date) {
      return 1;
    } else {
      return -1;
    }
  });
}

export function getAllNewsPostIds() {
  const fileNames = fs.readdirSync(postsDirectory);
  return fileNames.map((fileName) => {
    return {
      id: fileName.replace(/\.mdx$/, ""),
      slug: fileName.split(".")[0],
      locale: fileName.split(".")[1],
    };
  });
}

export async function getNewsPostData(slug, locale) {
  const fullPath = path.join(postsDirectory, `${slug}.${locale}.mdx`);
  const source = fs.readFileSync(fullPath, "utf8");
  const { code, frontmatter } = await bundleMDX({
    source: source,
  });
  return {
    slug,
    frontmatter,
    code,
  };
}
