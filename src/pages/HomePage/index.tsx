import { Link } from 'react-router-dom';

function HomePage() {
  return (
    <main className="flex w-full flex-col gap-4 p-4">
      <section className="flex items-center justify-center">
        <h1>Exemplos</h1>
      </section>
      <section className="grid place-items-center">
        <ul className="grid gap-4 text-center">
          <li>
            <Link to="/map">
              <p>Mapa Simples</p>
            </Link>
          </li>
          <li>
            <Link to="/scale-line">
              <p>Controle ScaleLine</p>
            </Link>
          </li>
        </ul>
      </section>
    </main>
  );
}

export { HomePage };
