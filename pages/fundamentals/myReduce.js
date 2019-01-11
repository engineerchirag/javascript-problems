var fn = `
  Array.prototype.myReduce = function(fn, accumulator, context) {
    var acc = accumulator === undefined ? this[0] : accumulator;
    for (var i = 0; i < this.length; i++) {
      acc = fn.call(context, acc, this[i], i, this);
    }
    return acc;
  };

  var list = [{ a: 1 }, { a: 2 }];
  var newData = list.myReduce(function(acc, val) {
    return acc + val.a;
  }, 5);

  console.log(newData);
`;

eval(fn);

import Link from "next/link";
import SyntaxHighlighter from "react-syntax-highlighter";
import { docco } from "react-syntax-highlighter/dist/styles/hljs";

export default () => (
  <div>
    <h2>Custom Reduce function</h2>
    <SyntaxHighlighter language="javascript" style={docco}>
      {fn}
    </SyntaxHighlighter>
  </div>
);
