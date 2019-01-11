var fn = `
  Array.prototype.mySome = function(fn, context) {
    for (var i = 0; i < this.length; i++) {
      if (fn.call(context, this[i], i, this)) {
        return true;
      }
    }
    return false;
  };

  var list = [1, 2, 3, 4, 5];

  var result = list.mySome(function(item) {
    return item > 3;
  });

  console.log(result);
`;
eval(fn);

import Link from "next/link";
import SyntaxHighlighter from "react-syntax-highlighter";
import { docco } from "react-syntax-highlighter/dist/styles/hljs";

export default () => (
  <div>
    <h2>Custom Some function</h2>
    <SyntaxHighlighter language="javascript" style={docco}>
      {fn}
    </SyntaxHighlighter>
  </div>
);
