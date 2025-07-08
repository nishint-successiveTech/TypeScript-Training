import Link from "next/link";
import React from "react";

const Page: React.FC = () => {
  const questions: number[] = [1, 2, 3, 4, 5, 6];

  return (
    <div>
      <center>
        <h1>SELECT QUESTION</h1>
        <ul>
          {questions.map((id) => (
            <li
              key={id}
              style={{
                listStyle: "none",
              }}
            >
              <Link href={`/assignment-1/question-${id}`}>Question {id}</Link>
            </li>
          ))}
        </ul>
      </center>
    </div>
  );
};

export default Page;
