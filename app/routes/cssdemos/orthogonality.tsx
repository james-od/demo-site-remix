import { Outlet } from '@remix-run/react';

export default function Orthogonality() {
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
      </main>
      <footer>
        <p>
          Ben McCormick's article was the primary source and has helpful examples
          <a href="https://benmccormick.org/2017/01/03/orthogonality-and-css-in-js/">
            https://benmccormick.org/2017/01/03/orthogonality-and-css-in-js/
          </a>
        </p>
        <p>
          Great rundown of multiple approaches
          <a href="https://dev.to/fyapy/sass-vs-css-modules-vs-css-in-js-vs-compile-time-css-in-js-who-wins-4cl#:~:text=CSS%20Modules%20it%20is%20the,like%20%3Cdiv%20className%3D%7Bstyle.">
            https://dev.to/fyapy/sass-vs-css-modules-vs-css-in-js-vs-compile-time-css-in-js-who-wins-4cl#:~:text=CSS%20Modules%20it%20is%20the,like%20%3Cdiv%20className%3D%7Bstyle.
          </a>
        </p>
      </footer>
    </body>
  );
}
