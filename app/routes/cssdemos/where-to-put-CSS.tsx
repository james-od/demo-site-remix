import { Outlet } from '@remix-run/react';

export default function WhereToPutCSS() {
  return (
    <body>
      <header className="header">Orthogonality</header>
      <main>
        <p>
          Orthogonality is the idea that modules should be written in a way that a change in one
          module should not require changes in any other module.
        </p>
        <p>
          Two or more things are orthogonal if changes in one do not affect any of the others. In a
          well-designed system, the database code will be orthogonal to the user interface: you can
          change the interface without affecting the database, and swap databases without changing
          the interface.
        </p>
        <p>A question that emerges is where to draw the boundary between JavaScript and CSS.</p>
        <p>
          In JSX, by design, JavaScript and (effectively) HTML sit side by side, tightly coupled.
          With React's inline styles we can throw throw CSS in there too. Other framworks take
          different approaches, fully separating our structuring, behaviour and styling code.
        </p>
        <p>
          Co-location doesn't necessarily define whether or not code is orthogonal, and there can be
          pros and cons to both approaches depending on your situation. Coupling our CSS closely
          with a component makes that component as a whole more orthogonal to the rest of the
          codebase. But we sacrifice reusability of common styling.
        </p>
        <header className="header">Where to put CSS?</header>
        <div className="gridWrapper">
          <div className="gridBox">Raw, global, CSS</div>
          <div className="gridBox">CSS Modules</div>
          <div className="gridBox">CSS in JS</div>
          <div className="gridBox">
            Bad, everything is global (requires naming strategies to manage), CSS grows over time -
            can become unmanageable
          </div>
          <div className="gridBox">
            Essentially CSS in JavaScript objects. CSS modules use a hash based on file name, path
            and style name. With CSS modules we don't need to use BEM (Block, elements, modifiers)
            naming convention
          </div>
          <div className="gridBox">
            Benefits - far more control over styles, very dynamic. Also gets local scoping.
            Downsides - performance: larger bundlesize due to libraries required and browsers not
            being so optimised for it - multiple recalculations of rules, SSR problems?{' '}
          </div>
        </div>
        <h1>OOCSS</h1>
        <p>
          This appears to simply be the concept of applying inheritance to CSS rules in order to
          minimise duplication?
        </p>
        <h1>ITCSS</h1>
        <p>CSS is a giant global dependency mess</p>
        <p>There are a number of ways we get around this: mirror the web age in ordering which doesn't work for larger sites, create thematic chunks, 'stick it on the end'. You end up writing more CSS to undo other CSS.</p>
        <p>Specificity is confusing, can undo your naming conventions and source order</p>
        <p>Idea of ITCSS is to order your CSS by writing in specificity order</p>
        <p>They lay it out as an inverted triangle with 8 layers: Settings, Tools, Generic, Base, Objects, Components, Trumps.</p>
        <p>This should eliminate repetition and confusing specificity relationships</p>
        <p>It's a way of thinking, not a framework</p>
        <p>Recommends splitting out each layer into it's own .css file</p>
        <p>I think this would still end up a mess in large projects</p>
        <p>Fairly significant paradigm shift</p>
        <p>You can still have 'specificity wars', just rarer</p>
        <p>Web components fix this better</p>
        <p>But can use the same theory within a component, rather than at global level</p>
      </main>
      <footer>
        <p>
          <a href="https://benmccormick.org/2017/01/03/orthogonality-and-css-in-js/">
            Ben McCormick's article was the primary source and has helpful examples
          </a>
        </p>
        <p>
          <a href="https://dev.to/fyapy/sass-vs-css-modules-vs-css-in-js-vs-compile-time-css-in-js-who-wins-4cl#:~:text=CSS%20Modules%20it%20is%20the,like%20%3Cdiv%20className%3D%7Bstyle.">
            Great rundown of multiple approaches
          </a>
        </p>
      </footer>
    </body>
  );
}
