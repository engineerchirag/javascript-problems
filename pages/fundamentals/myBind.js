var fn = `
  Function.prototype.myBind = function(context) {
    var fn = this,
      previousArgs = Array.prototype.slice.call(arguments, 1);
    return function() {
      var currentArgs = Array.prototype.slice.call(arguments);
      return fn.call(context, ...previousArgs, ...currentArgs);
    };
  };

  var a = {
    b: 1,
    c: 2,
    sum: function() {
      return this.b + this.c;
    }
  };

  console.log(a.sum());
  var sum1 = a.sum;
  // console.log(sum1());
  var sum = a.sum.myBind(a);
  console.log(sum());
`;

eval(fn);

import Link from "next/link";
import SyntaxHighlighter from "react-syntax-highlighter";
import { docco } from "react-syntax-highlighter/dist/styles/hljs";

export default () => (
  <div>
    <h2>Custom bind function</h2>
    <SyntaxHighlighter language="javascript" style={docco}>
      {fn}
    </SyntaxHighlighter>
  </div>
);
