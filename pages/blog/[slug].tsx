import fs from "fs";
import matter from "gray-matter";
import marked from "marked";
import Head from "next/head";
import path from "path";

interface PostProps {
  htmlString: string;
  data: {
    title: string;
    description: string;
  };
}

const Post: React.FC<PostProps> = ({ htmlString, data }) => {
  return (
    <>
      <Head>
        <title>{data.title}</title>
        <meta
          property="description"
          content={data.description}
          key="description"
        />
      </Head>
      <div>
        <div>Contents Below</div>
        <div dangerouslySetInnerHTML={{ __html: htmlString }} />
      </div>
    </>
  );
};

// Creates Paths for the items in the /posts/ route

export const getStaticPaths = async () => {
  const files = fs.readdirSync("posts");
  const paths = files.map((filename) => ({
    params: {
      slug: filename.replace(".md", ""),
    },
  }));

  return {
    paths,
    fallback: false,
  };
};

// Fetches data

export const getStaticProps = async ({ params: { slug } }: any) => {
  //reads file
  const markdownWithMetadata = fs
    .readFileSync(path.join("posts", slug + ".md"))
    .toString();
  const parsedMarkdown = matter(markdownWithMetadata);

  const htmlString = marked(parsedMarkdown.content);
  return {
    props: {
      htmlString,
      data: parsedMarkdown.data,
    },
  };
};

export default Post;
