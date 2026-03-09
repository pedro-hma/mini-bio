export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-gray-100 text-center p-6">
      <img src="/foto.png" alt="Foto de Pedro Ayres" width="200"className="rounded-full shadow-lg mb-6"/>
      <h1 className="text-3xl font-bold mb-2">Pedro Ayres</h1>
      <p className="max-w-md text-gray-700">
        Sou estudante de desenvolvimento web apaixonado por tecnologia e criação de aplicações modernas.
        Atualmente estudo React e Next.js enquanto desenvolvo projetos para aprimorar minhas habilidades.
        Meu objetivo é evoluir como desenvolvedor e programador.
      </p>
    </main>
  );
}