import React from "react";

// Project Components import
import { PostSection } from "../Components/PostSection/PostSection";
import { MessagesPanel } from "../Components/MessagesPanel/MessagesPanel";

const insureChallenge = [
  {
    postTitle: "Lorem Ipsum Morel ",
    postText:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Doloremque doloribus, obcaecati aut temporibus incidunt officia, voluptatum minus debitis consequatur architecto suscipit non nesciunt placeat quisquam beatae? Rem, dolore! Qui, aliquam. ",
    postImg: "https://placeimg.com/640/480/any",
  },
  {
    postTitle: "Title",
    postText:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Doloremque doloribus, obcaecati aut temporibus incidunt officia, voluptatum minus debitis consequatur architecto suscipit non nesciunt placeat quisquam beatae? Rem, dolore! Qui, aliquam. ",
    postImg: "https://placeimg.com/640/480/any",
  },
];
const Projects = () => {
  return (
    <div className="items-center justify-center brand-darkBlue">
      <PostSection content={insureChallenge[0]} />
      <PostSection content={insureChallenge[1]} />
      <PostSection content={insureChallenge[0]} />
      <PostSection content={insureChallenge[1]} />
      <PostSection content={insureChallenge[0]} />
      <PostSection content={insureChallenge[1]} />
    </div>
  );
};
export default Projects;
