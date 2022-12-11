import { Link, Outlet } from '@remix-run/react';

export default function CSSDemos() {
  return (
    <body>
      <header className="header">CSS Demos</header>
      <main className="text-body">
        <p>
          A collection of CSS demos, mostly investigating more niche areas that I'm not familiar
          with + going back over some fundamentals.
        </p>
      </main>
    </body>
  );
}
