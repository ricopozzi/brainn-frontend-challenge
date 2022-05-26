import type { GetStaticProps, NextPage } from "next";
import { Listbox } from "@headlessui/react";
import { useState, useEffect } from "react";
import { AiFillCaretDown } from "react-icons/ai";
import { Ball } from "../components/Ball";
import { Fetcher } from "../lib/api";

const Home: NextPage = ({ loterias, concursosId }: any) => {
  const [selectedConcurso, setSelectedConcurso] = useState(loterias[0].nome);
  const [theme, setTheme] = useState("megasena");
  const [concurso, setConcurso] = useState<any>({
    id: "XXX",
    loteria: 1,
    numeros: ["XX"],
    data: "2021-04-20T00:28:09.426Z",
  });
  const handleConcurso = async () => {
    const findId = loterias.find((item: any) => item.nome === selectedConcurso);

    const findConcursoId = concursosId.find(
      (item: any) => item.loteriaId === findId.id
    );

    const response = await Fetcher(`/concursos/${findConcursoId.concursoId}`);

    return setConcurso(response);
  };

  useEffect(() => {
    handleConcurso();
    switch (selectedConcurso) {
      case loterias[0].nome:
        setTheme("megasena");
        break;
      case loterias[1].nome:
        setTheme("quina");
        break;
      case loterias[2].nome:
        setTheme("lotofacil");
        break;
      case loterias[3].nome:
        setTheme("lotomania");
        break;
      case loterias[4].nome:
        setTheme("timemania");
        break;
      case loterias[5].nome:
        setTheme("diadesorte");
        break;
      default:
        setTheme("megasena");
        break;
    }
  }, [selectedConcurso]);

  return (
    <>
      <main
        className={`${theme} bg-[#EFEFEF] overflow-hidden h-screen hidden lg:flex`}
      >
        <div className='w-2/5 h-screen flex flex-col'>
          <svg
            width='613'
            height='1080'
            viewBox='50 0 613 1080'
            xmlns='http://www.w3.org/2000/svg'
            className='fill-skin-base hidden lg:flex'
          >
            <path d='M613 0C613 0 361.26 501.011 613 1080H0V0H613Z' />
          </svg>
          <Listbox
            as='div'
            value={selectedConcurso}
            onChange={setSelectedConcurso}
            className='z-20 absolute left-20 top-10'
          >
            {/* <Listbox.Label className='text-sm font-medium w-48 h-12 bg-quina'>
              {selectedConcurso}
            </Listbox.Label> */}
            <Listbox.Button className='w-48 h-11 bg-white rounded-lg font-montserrat flex justify-center items-center px-4 text-sm'>
              {selectedConcurso.toUpperCase()}
              <AiFillCaretDown size={18} className='ml-auto' />
            </Listbox.Button>
            <Listbox.Options className='w-full h-full bg-white mt-1 rounded-md'>
              {loterias.map((conc: any) => (
                <Listbox.Option
                  className='h-9 p-2 font-montserrat cursor-pointer hover:bg-[#f2f3f3] text-sm'
                  key={conc.id}
                  value={conc.nome}
                >
                  {conc.nome.toUpperCase()}
                </Listbox.Option>
              ))}
            </Listbox.Options>
          </Listbox>

          <img src='logoheart.svg' className='absolute top-[50%] left-20' />
          <img src='logoleft.svg' className='absolute top-[50%] left-20' />
          <div className='absolute top-[51.5%] left-40 flex font-montserrat text-white font-bold text-2xl'>
            {selectedConcurso.toUpperCase()}
          </div>
        </div>

        <div className='h-1/3 flex gap-10 gap-y-3 w-full  ml-auto my-auto justify-center flex-wrap items-center'>
          {concurso.numeros.map((item: any) => (
            <Ball
              classy='justify-center items-center hidden lg:flex left-10 w-20 h-20 xl:w-28 xl:h-28'
              number={item}
            />
          ))}
        </div>
        <p className='font-medium font-montserrat mt-auto text-center absolute bottom-20 left-[50%]'>
          Este sorteio é meramente ilustrativo e não possui nenhuma ligação com
          a CAIXA
        </p>
      </main>

      <main className={`${theme} bg-[#EFEFEF] h-screen flex lg:hidden `}>
        <div className='w-screen'>
          <svg
            width='100%'
            height='400'
            viewBox='0 0 524 490'
            xmlns='http://www.w3.org/2000/svg'
            className='fill-skin-base flex lg:hidden w-screen'
          >
            <path d='M871.477 569.828C871.477 569.828 306.227 281.609 -347 569.828V-132L871.477 -132V569.828Z' />
          </svg>

          <div className='absolute flex flex-col w-screen h-screen top-0 '>
            <Listbox
              as='div'
              value={selectedConcurso}
              onChange={setSelectedConcurso}
              className='z-20 flex mx-auto mt-8 flex-col'
            >
              {/* <Listbox.Label className='text-sm font-medium w-48 h-12 bg-quina'>
              {selectedConcurso}
            </Listbox.Label> */}
              <Listbox.Button className='w-48 h-11 bg-white rounded-lg font-montserrat flex justify-center items-center px-4 text-sm font-medium'>
                {selectedConcurso.toUpperCase()}
                <AiFillCaretDown size={18} className='ml-auto' />
              </Listbox.Button>
              <Listbox.Options className='w-48 bg-white mt-12 rounded-md absolute'>
                {loterias.map((conc: any) => (
                  <Listbox.Option
                    className='h-9 p-2 font-montserrat cursor-pointer hover:bg-[#f2f3f3] text-sm'
                    key={conc.id}
                    value={conc.nome}
                  >
                    {conc.nome.toUpperCase()}
                  </Listbox.Option>
                ))}
              </Listbox.Options>
            </Listbox>
            <div className='flex justify-center mt-10'>
              <img src='logoheart.svg' className='absolute' />
              <img src='logoleft.svg' className='absolute' />
            </div>

            <div className='flex font-montserrat text-white font-bold text-2xl text-center justify-center w-screen mt-20'>
              {selectedConcurso.toUpperCase()}
            </div>
            <p className='text-center text-white font-medium mt-10'>
              CONCURSO Nº {concurso.id}
            </p>
            <div className='flex flex-col w-screen px-2 items-center justify-center mt-16 mb-2 md:mt-20 overflow-auto'>
              <div className='flex gap-9 gap-y-3 w-full flex-wrap justify-center overflow-auto mt-auto'>
                {concurso.numeros.map((item: any) => (
                  <Ball
                    classy='flex justify-center mt-10 items-center lg:hidden w-[3.5rem] h-[3.5rem]'
                    number={item}
                    key={item}
                  />
                ))}
              </div>
            </div>
            <p className='font-medium font-montserrat text-xs mt-auto  text-center'>
              Este sorteio é meramente ilustrativo e não possui nenhuma ligação
              com a CAIXA
            </p>
          </div>
        </div>
      </main>
    </>
  );
};

export default Home;

export const getStaticProps: GetStaticProps = async () => {
  const loteriasResponse = await Fetcher("/loterias");
  const concursosIdResponse = await Fetcher("/loterias-concursos");

  return {
    props: {
      loterias: loteriasResponse,
      concursosId: concursosIdResponse,
    },
  };
};
