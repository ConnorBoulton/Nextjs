import React from "react";
import { useRouter } from "next/router";
import Link from "next/link";

export default function article({ article }) {
  //   const router = useRouter();
  //   const { id } = router.query;

  return (
    <>
      <h1>This is article {article.id}</h1>
      <p>{article.body}</p>
      <br />
      <Link href="/">Go Back</Link>
    </>
  );
}

export const getServerSideProps = async (context) => {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${context.params.id}`
  );

  const article = await res.json();

  return {
    props: {
      article,
    },
  };
};
