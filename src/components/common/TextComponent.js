import React from "react";

const TextComponent = ({ tag, text }) => {
  const tagsWithClasses = {
    h1: "text-4xl font-bold text-white",
    h2: "text-xl font-semibold text-white",
    p: "text-base text-green",
    // Add more predefined tags and their CSS classes here as needed
  };

  const TagName = tag in tagsWithClasses ? tag : "p"; // Use "p" tag by default if the tag is not predefined.

  return <TagName className={tagsWithClasses[TagName]}>{text}</TagName>;
};

export default TextComponent;
