export default function Header({ goFormacao, goProjetos, goContato}) {
  return (
    <header>
        <div className="flex justify-between items-center pt-5 pr-15 pl-15 pb-5">
            <h1 className="text-3xl font-bold">Pedro Lima</h1>
            <nav className="flex gap-6">
                <a href="#">Início</a>
                <a onClick={goFormacao}>Formação</a>
                <a onClick={goProjetos}>Projetos</a>
                <a onClick={goContato}>Contato</a>
            </nav>
        </div>
      <hr />
    </header>
  );
}
