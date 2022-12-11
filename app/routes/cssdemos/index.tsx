import { Link, Outlet } from '@remix-run/react';

export default function CSSDemos() {
  return (
    <body>
      <header className="header">CSS Demos</header>
      <main className="text-body">
        A collection of CSS demos, investigating more niche areas that I'm not familiar with.
        <br />
        <br />
        TODO:
        <br />
        <br />
        Specificity (DONE) <br /> Orthogonality <br /> Responsive vs Adaptive <br />
        https://css-tricks.com/snippets/css/a-guide-to-flexbox/ <br /> ITCSS, OOCSS, The Media
        Island, Aspects <br /> Watch
        https://web.microsoftstream.com/video/21d53aaf-b6db-4a5e-9d2f-f034b2a84996?list=studio{' '}
        <br />
        Watch https://www.youtube.com/watch?v=1OKZOV-iLj4&t=653s&ab_channel=DaFED <br /> float: left
        vs clear: both <br /> CSS Modules vs JS-in-CSS <br />
        https://bradfrost.com/blog/post/front-of-the-front-end-and-back-of-the-front-end-web-development/
        <br /> Read the 'Concepts' section
        https://developer.mozilla.org/en-US/docs/Web/CSS/Reference#concepts <br /> Cascade <br />{' '}
        Block formatting context <br /> Box model <br /> Margin collapsing <br />
      </main>
    </body>
  );
}
