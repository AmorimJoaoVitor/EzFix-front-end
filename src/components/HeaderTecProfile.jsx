/* eslint-disable @next/next/no-img-element */
const HeaderTecProfile = () => {
  return (
    <>
      <div className="flex w-10/12 flex-col items-center justify-center">
        <section className="flex justify-center w-full">
          <div className="flex flex-col items-center">
            <img src="imgAsssist.png" alt="assitencia" width="100" />
            <p>Avenida Paulista</p>
          </div>
          <div>
            <h1>TH Tecnologia</h1>
            <div className="bg-blue-light px-3.5 py-1 flex ">
              <div>
                <b>8</b>
                <p>Reparos Feitos</p>
              </div>
              <div>
                <b>4,7</b>
                <p>Avaliações feitas</p>
              </div>
              <div>
                <b>1,2 KM</b>
                <p>Distância</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default HeaderTecProfile;
