var question = `
  var sum = function() { /* put your code here */};
  var s = sum();
  alert(s); // 0
  alert(s(1)); // 1
  alert(s(1)(2)); //3
  alert(s(3)(4)(5)); // 12

`;

var fn = `
  const sum = (...prevArgs) => {
    var res = (...nextArgs) => sum(...nextArgs, ...prevArgs);
    res.valueOf = () => prevArgs.reduce((a,b) => a + b );
    return res;
  }

  var s = sum(1);
  console.log(+s); //1
  console.log(+s(1)); //2
  console.log(+s(1, 2)(3)); //7
  console.log(+s(1)(2)(3)); //7
  console.log(+s); //1

`;
eval(fn);

import Link from "next/link";
import SyntaxHighlighter from "react-syntax-highlighter";
import { docco } from "react-syntax-highlighter/dist/styles/hljs";

export default () => (
  <div>
    <h2>Random 1</h2>
    <SyntaxHighlighter language="javascript" style={docco}>
      {question}
    </SyntaxHighlighter>

    <h5>Prgram:</h5>
    <SyntaxHighlighter language="javascript" style={docco}>
      {fn}
    </SyntaxHighlighter>
  </div>
);
