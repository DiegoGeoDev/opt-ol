import { ArrowLeft } from 'lucide-react';
import { Link, Outlet } from 'react-router-dom';

import { Header } from '../../components/ui';

export function DefaultLayout() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header>
        <Link to={'/'}>
          <ArrowLeft />
        </Link>
        <h1>opt-ol</h1>
      </Header>
      <div className="flex flex-1 overflow-y-auto">
        <Outlet />
      </div>
    </div>
  );
}
