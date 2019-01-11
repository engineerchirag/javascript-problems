var fn = `
  Array.prototype.myEvery = function(fn, context) {
    for (var i = 0; i < this.length; i++) {
      if (!fn.call(context, this[i], i, this)) {
        return false;
      }
    }
    return true;
  };

  var list = [1, 2, 3, 4, 5, 6];

  var result = list.myEvery(function(item) {
    return item < 10;
  });

  console.log(result);
`;
eval(fn);

import Link from "next/link";
import SyntaxHighlighter from "react-syntax-highlighter";
import { docco } from "react-syntax-highlighter/dist/styles/hljs";

export default () => (
  <div>
    <h2>Custom Every function</h2>
    <SyntaxHighlighter language="javascript" style={docco}>
      {fn}
    </SyntaxHighlighter>
  </div>
);
