export default function Specificity() {
  const codeExample = `
    #myElement {
      color: green;
    }
    .bodyClass .sectionClass .parentClass [id="myElement"] {
      color: yellow;
    }
  `;
  return (
    <body>
      <header className="header">Specificity</header>
      <main>
        <p>With the current AI-of-the-week in mind, I asked Chat GPT about Specificity. </p>
        <p>
          "In CSS (Cascading Style Sheets), specificity refers to the degree to which a particular
          CSS rule applies to an element on a web page. It is determined by the number and type of
          selectors in the rule. In general, a rule with more specific selectors will have a higher
          specificity and will take precedence over rules with less specific selectors. For example,
          a rule that uses an ID selector (#my-id) will have a higher specificity than a rule that
          uses a class selector (.my-class). In turn, a rule that uses a class selector will have a
          higher specificity than a rule that uses an element selector (p, h1, etc.). When there are
          multiple rules that apply to the same element on a page, the browser will use the one with
          the highest specificity to determine the element's styling. This allows web designers to
          override the default styles of HTML elements and create more specific and customized
          styles for their web pages."
        </p>
        <p>Not bad.</p>
        <p>The exact ordering can be seen below:</p>
        <p>1. Inline styling (e.g style="X") applies (1,0,0,0) points</p>
        <p>2. Each id value (e.g #nav) applies (0,1,0,0) points</p>
        <p>3. Each class value (e.g .active, id=["X"]) applies (0,0,1,0) points</p>
        <p>4. Each element reference (e.g ul) applies (0,0,0,1) points</p>
        <p>So if I set the following rules:</p>
        <pre>
          <code>{codeExample}</code>
        </pre>
        <p>
          The id selector #myElement will score 0100, whereas the second selector will score 0010
          for each - totalling 0040.
        </p>
      </main>
      <footer>
        <header className="header">References</header>
        <p>
          I quite like this article:
          <a href="https://css-tricks.com/specifics-on-css-specificity">
            https://css-tricks.com/specifics-on-css-specificity/
          </a>
        </p>
        <p>
          Plus the MDN docs of course:
          <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/Specificity">
            https://developer.mozilla.org/en-US/docs/Web/CSS/Specificity
          </a>
        </p>
      </footer>
    </body>
  );
}
