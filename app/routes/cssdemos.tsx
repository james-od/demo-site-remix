import { Link, Outlet } from '@remix-run/react';

export default function CSSDemos() {
  return (
    <body>
      <div>
        <nav className="tab-container">
          <Link className="tab" to="specificity">
            Specificity
          </Link>
          <Link className="tab" to="where-to-put-CSS">
            Where to put CSS
          </Link>
          <Link className="tab" to="fundamentals">
            Fundamentals
          </Link>
        </nav>
        <main>
          <Outlet />
        </main>
      </div>
    </body>
  );
}
