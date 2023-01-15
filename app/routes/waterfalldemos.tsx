import { Link, Outlet } from '@remix-run/react';

export default function WaterFallDemos() {
  return (
    <body>
      <div>
        <nav className="tab-container">
          <Link className="tab" to="clientsidefetch">
            Client Side fetching
          </Link>
          <Link className="tab" to="withloader">
            With loader
          </Link>
        </nav>
        <main>
          <Outlet />
        </main>
      </div>
    </body>
  );
}
