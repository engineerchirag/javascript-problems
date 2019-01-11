import Link from "next/link";
export default () => (
  <div>
    <h2>Javascript Fundamentals</h2>
    <ul>
      <li>
        <Link href="fundamentals/curry">
          <a>Currying function</a>
        </Link>
      </li>
      <li>
        <Link href="fundamentals/debounce">
          <a>Debounce function</a>
        </Link>
      </li>
      <li>
        <Link href="fundamentals/trottle">
          <a>Trottle function</a>
        </Link>
      </li>
      <li>
        <Link href="fundamentals/deepClone">
          <a>DeepClone function</a>
        </Link>
      </li>
      <li>
        <Link href="fundamentals/functionCompose">
          <a>Compose function</a>
        </Link>
      </li>
      <li>
        <Link href="fundamentals/myBind">
          <a>Custom Bind function</a>
        </Link>
      </li>
      <li>
        <Link href="fundamentals/myEvery">
          <a>Custom Every function</a>
        </Link>
      </li>

      <li>
        <Link href="fundamentals/myFilter">
          <a>Custom Filter function</a>
        </Link>
      </li>
      <li>
        <Link href="fundamentals/myMap">
          <a>Custom Map function</a>
        </Link>
      </li>
      <li>
        <Link href="fundamentals/myReduce">
          <a>Custom Reduce function</a>
        </Link>
      </li>
      <li>
        <Link href="fundamentals/mySome">
          <a>Custom Some function</a>
        </Link>
      </li>
      <li>
        <Link href="fundamentals/object.create.polyfill">
          <a>Object.create poly-fill function</a>
        </Link>
      </li>
    </ul>

    <h2>Games</h2>
    <ul>
      <li>
        <Link href="games/snake/canvas">
          <a>
            Snake <i>(Using Canvas)</i>
          </a>
        </Link>
      </li>
    </ul>
  </div>
);
