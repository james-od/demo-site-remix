import { Link, Outlet } from '@remix-run/react';

export default function CSSDemos() {
  return (
    <body>
      <div>
        <nav className="tab-container">
          <Link className="tab" to="specificity">
            Specificity
          </Link>
          <Link className="tab" to="orthogonality">
            Orthogonality/Where to put CSS
          </Link>
          <Link className="tab" to="responsive-adaptive">
            Responsive vs Adaptive
          </Link>
        </nav>
        <main>
          <Outlet />
        </main>
      </div>
    </body>
  );
}
