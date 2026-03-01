import { createNode, insert, search } from "../Trie/ts/trie.ts";
/**
  Given a paragraph, pre-process it into a Trie.
  Then given word as an input, return true or false if it's in the paragraph
 */

function main() {
  const givenParagraph: string =
    "The stereotype of the solitary coder in a basement is largely outdated. Modern software engineering is a team sport. Communication, empathy, and the ability to give and receive code reviews are just as important as technical prowess. Explaining technical debt to a product manager or mentoring a junior developer are daily requirements.";
  const givenInput: string = "Explaining";
  const regex: RegExp = /[ .,]/;
  const paragraphArray = givenParagraph.split(regex);

  let root = createNode("");
  for (let index = 0; index < paragraphArray.length; index++) {
    root = insert(root, paragraphArray[index]);
  }

  console.log(search(root, givenInput));
}

main();
