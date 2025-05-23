"use client";

import { useEffect, useState } from "react";

type Props = {
  title: string;
};

export default function TestTest({ title }: Props) {
  const [users, setUsers] = useState<Array<JSON>>([]);
  const [visible, setVisible] = useState<boolean>(true);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users").then((res) => {
      res.json().then((data: Array<JSON>) => {
        console.log("data", data);
        setUsers(data);
      });
    });
  }, []);

  return (
    <div className={`${visible ? "bg-blue-100" : "bg-red-100"}`}>
      <h1 className="text-2xl">{title}</h1>
      <ul>
        {users.map((user: any, key: number) => {
          return <li key={key}>{user.username}</li>;
        })}
      </ul>

      <div
        className="border border-black p-4 rounded"
        onClick={() => {
          setVisible(!visible);
        }}
      >
        Toggle
      </div>
    </div>
  );
}
