'use client'
import Nav from "./components/nav";

export default function Home() {

  return (
    <>
      <Nav />
      <main className="flex flex-col items-center">
        <div className="flex flex-col items-center p-10 pb-96 max-w-md">
          <div className="flex gap-24 mt-80">
            <h1 className="text-8xl font-bold hover:text-red-600">[π]</h1>
            <h1 className="grid text-6xl font-bold gap-2">
              <span>PEDRO</span>
              <span>FAINO</span>
              <h3 className="text-base">back end dev</h3>
              <div className="flex gap-2">
                <a href="" className="nes-icon linkedin is-medium"></a>
                <a href="" className="nes-icon github is-medium"></a>
                <a href="" className="nes-icon gmail is-medium"></a>
              </div>
            </h1>
          </div>
        </div>
        <div className="flex flex-col items-center pt-36 pb-36 bg-secondary w-full">
          <section className="nes-container is-rounded is-dark max-w-5xl">
            <p className="title">Hi, i'm pedro</p>
            <p>Good morning. Thou hast had a good night's sleep, I hope.</p>
            <p>Good morning. Thou hast had a good night's sleep, I hope.</p>
            <p>Good morning. Thou hast had a good night's sleep, I hope.</p>
            <p>Good morning. Thou hast had a good night's sleep, I hope.</p>
            <p>Good morning. Thou hast had a good night's sleep, I hope.</p>
            <p>Good morning. Thou hast had a good night's sleep, I hope.</p>
            <p>Contact me: pedrofaino99@gmail.com</p>
            <div className="flex gap-5 mt-5">
            </div>
          </section>
        </div>
        <div className="flex flex-col bg-white w-full items-center">
          <div className="mt-10 mb-10 text-black max-w-5xl">
            <section className="nes-container with-title is-centered">
              <p className="title"> Projects </p>
              <span className="nes-text is-error">02-2023: CM</span>
              <p className="mb-8">App para una pyme riocuartense, que se utiliza para gestionar clientes, sus respectivas cuentas y los cobradores de la empresa.</p>
              <span className="nes-text is-error">11-2023: La Fiambreria</span>
              <p className="mb-8">App para el manejo de stock de un negocio de alimentos en rio cuarto, fue realizado con .net.</p>
              <span className="nes-text is-error">02-2023: Faino</span>
              <p className="mb-8">App para el manejo de una metalurgica, esto incluye las distintas tareas diarias para su realizacion, control de stock, ademas facturacion y manejo de precios.</p>
            </section>
          </div>
        </div>
        <div className="flex flex-col mt-10 mb-10 items-center">
          <section className="nes-container with-title is-dark max-w-5xl">
            <p className="title"> Personal Projects </p>
            <span className="nes-text is-error">02-2023: Reminders</span>
            <p className="mb-8">Desarrolle un app para una pyme riocuartense, que se utiliza para gestionar clientes, sus respectivas cuentas y los cobradores de la empresa.</p>
            <span className="nes-text is-error">02-2023: Training day</span>
            <p className="mb-8">Desarrolle un app para una pyme riocuartense, que se utiliza para gestionar clientes, sus respectivas cuentas y los cobradores de la empresa.</p>
          </section>
        </div>
      </main >
    </>
  )
} 
