import { Button, ButtonGroup } from "@chakra-ui/react"

export default function Home() {
  return (
    <div className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen">
      <main>
		<section className="flex w-120 justify-around content-center">
			<h2 className="text-2xl">Catálogo de roupas</h2>
			<Button>Criar roupa</Button>
		</section>
	  </main>
      <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center">
        <p>Desenvolvido por Isabella Camilli Meletani</p>
      </footer>
    </div>
  );
}
