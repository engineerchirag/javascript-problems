var fn = `
  // Basic throttle - This will rate limit events, but won't execute last event
  function throttleBasic(fn, limit) {
    var trottleFlag;
    return function() {
      var context = this,
        args = arguments;
      if (!trottleFlag) {
        fn.apply(context, args);
        trottleFlag = true;
        setTimeout(() => (trottleFlag = false), limit);
      }
    };
  }

  // Advanced throttle - This will rate limit events and execute last event too
  function throttleAdvance(fn, limit) {
    var trottleFn;
    var lastRunTime;
    return function() {
      var context = this,
        args = arguments;
      if (!lastRunTime) {
        fn.apply(context, args);
        lastRunTime = Date.now();
      } else {
        clearTimeout(trottleFn);
        trottleFn = setTimeout(() => {
          if (Date.now() - lastRunTime >= limit) {
            fn.apply(context, args);
            lastRunTime = Date.now();
          }
        }, limit - (Date.now() - lastRunTime));
      }
    };
  }

  // Test basic use case of first function call and last function call within limit
  console.log("Start");
  var consoleLogBasic = throttleBasic(console.log, 1000);
  var consoleLogAdvance = throttleAdvance(console.log, 1000);
  for (var i = 0; i <= 110; i++) {
    consoleLogBasic("Basic: " + i);
    consoleLogAdvance("Advanced: " + i);
  }
  console.log("Done");

  // Check the throttling of events by a limit
  var newFn = throttleAdvance(console.log, 20000);
  var a = setInterval(function() {
    newFn(Date.now());
  }, 1000);
`;
eval(fn);

import Link from "next/link";
import SyntaxHighlighter from "react-syntax-highlighter";
import { docco } from "react-syntax-highlighter/dist/styles/hljs";

export default () => (
  <div>
    <h2>Trottle function</h2>
    <SyntaxHighlighter language="javascript" style={docco}>
      {fn}
    </SyntaxHighlighter>
  </div>
);
