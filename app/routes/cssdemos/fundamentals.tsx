import styles from '~/styles/fundamentals.css';

export function links() {
  return [{ rel: 'stylesheet', href: styles }];
}

export default function Fundamentals() {
  return (
    <body>
      <header>
        <h1>Fundamentals</h1>
      </header>
      <p>This page uses Remix's Route Styles :) </p>
      <h1>Box Model</h1>
      <p>
        Every element is a rectangular 'box'. A box is composed of 4 parts, each defined by their
        edges. Content edge, padding edge, border edge, margin edge. The content area contains the
        'real' content of the element. The padding area extends the content area to the padding
        values. The border area bounds the element. The margin area adds empty space to separate the
        element from others on the page.
        <p>
          The box below has a red background showing the content area, clear padding along the top
          and right, a black border showing the border area, and 12px top and right margin
          separating it from the other content.
        </p>
        <div className="boxModelDemo">BOX</div>
      </p>
      <h1>Cascading</h1>
      <p>
        There can be a number of stylesheets defined when we load a web page: User-agent stylesheets
        (browsers), Author stylesheets (web devs) and User stylesheets (custom user styles e.g from
        a browser extension)
        <br />
        We define the Cascading order as the order in which these are applied:
        <br />
        1. Relevance- Only apply rules that match this element
        <br />
        2. Origin and importance, ranked as:
        <br />
        <p className="indent">
          a. CSS transitions
          <br />
          b. user-agent(browser) !important
          <br />
          c. User !important
          <br />
          d. Author !important
          <br />
          e. CSS @keyframe animations
          <br />
          f. author
          <br />
          g. User
          <br />
          h. User-agent
          <br />
        </p>
        3. Specificity
        <br />
        4. Order of appearance
      </p>
      <h1>Margin Collapsing</h1>
      <p>
        Bit of a quirk. Only applies to top and bottom margins with block scope. Essentially if we
        have margin-bottom of 10px in element A, and element A is positioned above element B, and
        element B has margin-top of 5px, the actual margin between them will be the largest of the
        two - 10px. If we have more complex margins (top, bottom for both, negatives) then the final
        margin will be the largest positive + the largest negative.
      </p>
      <p>The example given is demonstrated below (check the dev tools to confirm a 10px spacing)</p>
      <div className="divA">A</div>
      <div className="divB">B</div>
      <h1>Block Formatting Context</h1>
      <p>Part of CSS's rendering steps.</p>
      <p>
        A good example is if we have a parent with a child, and the child is floated, the parent
        will default to 0 height. - If we give the parent a block formatting context e.g with
        overflow:hidden, or position: absolute it will expand to contain the children
      </p>
      <footer></footer>
    </body>
  );
}
