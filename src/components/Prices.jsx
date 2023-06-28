import React from "react";

const Prices = () => {
  return (
    <section className="pt-20 w-full px-8 md:px-0">
      <div className="flex gap-4 items-center justify-center">
        <h1 className="text-xl font-bold">Tabela de valores de AÇAI</h1>
        <img src="/assets/image-price.jpeg" alt="Imagem de um copo de açai" className="w-24 h-24" />
      </div>
      <div>
        <div>
          <strong>COPO 330 ML</strong>
          <small>R$ 10,00</small>
        </div>
        <div>
          <strong>COPO 440 ML</strong>
          <small>R$ 12,00</small>
        </div>
        <div>
          <strong>COPO 550 ML</strong>
          <small>R$ 15,00</small>
        </div>
        <div>
          <strong>COPO 770 ML</strong>
          <small>R$ 20,00</small>
        </div>
      </div>
      <div>
        <h1>ACOMPANHAMENTOS</h1>
        <div>
          
        </div>
      </div>
    </section>
  );
};

export default Prices;
