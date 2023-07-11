import { Outlet, Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

import { Header } from "../../components/ui";

export function DefaultLayout() {
  return (
    <div>
      <Header>
        <Link to={"/"}>
          <ArrowLeft />
        </Link>
        <h1>opt-ol</h1>
      </Header>
      <Outlet />
    </div>
  );
}
