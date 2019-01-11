var fn = `
  // PolyFill for Object.create function

  if (!Object.create) {
    Object.create = function(O, Properties) {
      if (typeof O !== "object" || O === null) {
        return new TypeError();
      }
      var obj = new Object();
      obj.prototype = O;
      if (Properties !== undefined) {
        Object.defineProperties(O, Properties);
      }
      return obj;
    };
  }
  var newObj = Object.create(Object.prototype, {
    a: { value: 2, enumerable: true }
  });

  console.log(newObj);
`;

eval(fn);

import Link from "next/link";
import SyntaxHighlighter from "react-syntax-highlighter";
import { docco } from "react-syntax-highlighter/dist/styles/hljs";

export default () => (
  <div>
    <h2>Object.create polyfill function</h2>
    <SyntaxHighlighter language="javascript" style={docco}>
      {fn}
    </SyntaxHighlighter>
  </div>
);
