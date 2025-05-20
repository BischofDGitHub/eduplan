"use client";

import React, { useEffect, useState } from "react";

type Props = {
  text: string;
};

export default function test({ text }: Props) {
  const [comments, setComments] = useState<Array<string>>([]);
  const [active, setActive] = useState<boolean>(false);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts/1/comments").then(
      (res) => {
        res.json().then((data: Array<string>) => {
          setComments(data);
        });
      }
    );
  }, []);

  return (
    <div className={`${active ? "bg-green-200" : "bg-gray-100"}`}>
      <h1>Hallo</h1>
      {comments.map((comment, key) => {
        return <div key={key}>{comment}</div>;
      })}
      <div
        className="border border-black p-4 rounded"
        onClick={() => {
          setActive(!active);
        }}
      >
        Click me!
      </div>
    </div>
  );
}
