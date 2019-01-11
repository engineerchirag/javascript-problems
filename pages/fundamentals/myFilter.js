var fn = `
  Array.prototype.myFilter = function(fn, context) {
    var result = [];
    for (var i = 0; i < this.length; i++) {
      if (fn.call(context, this[i], i, this)) {
        result.push(this[i]);
      }
    }
    return result;
  };

  var list = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  var newList = list.myFilter(function(item) {
    return item > 5;
  });

  console.log("NewList: ", newList);
`;
eval(fn);

import Link from "next/link";
import SyntaxHighlighter from "react-syntax-highlighter";
import { docco } from "react-syntax-highlighter/dist/styles/hljs";

export default () => (
  <div>
    <h2>Custom Filter function</h2>
    <SyntaxHighlighter language="javascript" style={docco}>
      {fn}
    </SyntaxHighlighter>
  </div>
);
