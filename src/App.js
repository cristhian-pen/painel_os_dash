import React, { useEffect, useState } from 'react';
import API from './Services/API';
import './App.css';
import 'animate.css';

function App() {
  const [os0, setOs0] = useState({
    CD_OS: '',
    DS_SERVICO: '',
    NM_SOLICITANTE: '',
    NM_SETOR: ''
  });
  const [os1, setOs1] = useState({
    CD_OS: '',
    DS_SERVICO: '',
    NM_SOLICITANTE: '',
    NM_SETOR: ''
  });
  const [os2, setOs2] = useState({
    CD_OS: '',
    DS_SERVICO: '',
    NM_SOLICITANTE: '',
    NM_SETOR: ''
  });
  const [os3, setOs3] = useState({
    CD_OS: '',
    DS_SERVICO: '',
    NM_SOLICITANTE: '',
    NM_SETOR: ''
  });

  useEffect(() => {
    API.get('/api').then((response) => {
      const dados = response.data.rows
      const os0 = dados[0];
      if(os0 === null ){
        return console.log("sem dados");
      }else {
        setOs0(os0);
      }
      const os1 = dados[1]
      if(os1 === null){
        return console.log("sem dados");
      }else {
        setOs1(os1);
      }
      const os2 = dados[2]
      if (os2 === null) {
        return console.log("sem dados");
      } else {
        setOs2(os2);
      }
      const os3 = dados[3]
      if (os3 == null) {
        return console.log("sem dados");
      } else {
        setOs3(os3);
      }
    }).catch((err) => {
      console.log(err);
    })
  }, [1000])


  return (
    <section className='flex flex-col'>

      <p className="my-12 text-white text-center font-mono text-6xl font-extrabold">Painel de Ordem de Serviço - TI</p>
      <div className='flex container mx-auto animate__animated animate__slideInDown justify-between my-10'>
        <div></div>
        <div></div>
        <div className="rounded-lg h-20 2xl:w-36 sm:pr-4 sm:mr-4 shadow-md bg-zinc-700">
          <p className='text-white font-bold ml-4 my-2'>Cod Os</p>
          <p className='text-white text-lg sm:ml-8 2xl:font-extrabold sm:font-medium 2xl:ml-16 my-2'>{os1.CD_OS}</p>
        </div>
        <div className="rounded-md h-20 2xl:w-72 sm:pr-2 sm:mr-4 shadow-md bg-zinc-700">
          <p className='text-white font-bold ml-4 my-2'>Setor</p>
          <p className='text-white text-lg 2xl:font-extrabold 2xl:ml-8 sm:overflow-auto sm:font-medium sm:ml-4 sm:truncate ... '>undgndgkjjlk lksjflsdkjflsfsdfsdfsd</p>
        </div>
        <div className="rounded-md shadow-md bg-zinc-700 h-20 2xl:w-72 sm:mr-4 sm:pr-4">
          <p className='text-white font-bold my-2 ml-4'>Solicitante</p>
          <p className='text-white text-lg 2xl:font-extrabold 2xl:ml-5 2xl:overflow-hidden sm:ml-4 sm:overflow-auto sm:font-medium'>GLEIDINSIN.ALBURQUERQUE</p>
        </div>
        <div className="rounded-lg h-20 shadow-md sm:overflow-hidden bg-zinc-700">
          <p className='text-white font-bold ml-4 my-2'>Nova Ordem de Serviço</p>
          <p className='text-lg text-white 2xl:font-extrabold 2xl:truncate ... sm:overflow-auto 2xl:mb-3.5 2xl:ml-8 2xl:mr-8 2xl:my-2 sm:font-medium sm:ml-4'>gfgdfogudfugd hsdasdkajh akjsdhaksjd figudifgudofigudoifgudodifugodfig fjsdfsdfjksdf fksdhfksjf hksdjfhskdjf hkfsjdf hksdjfshdkfj</p>
        </div>
        <div></div>
        <div></div>
      </div>

      <section className='flex flex-col items-center animate_animated animate__slideInDown justify-center 2xl:my-20'>
        <div className='flex container mx-auto flex-col rounded-md shadow-md bg-zinc-700 h-6/12 w-[95rem] items-center justify-center'>
          <p className='text-center mb-8 my-8 font-bold text-lg text-white'>Ultimas Ordens de Serviço</p>
          <span className='border bg-gray-900 shadow-md h-px mb-8 w-10/12'></span>
          <div className='flex ml-96 sm:overflow-auto 2xl:overflow-hidden flex-row justify-start'>

            <div className='flex flex-col '>
              <p className='text-gray-200 text-md ml-10 font-bold'>Cod. OS</p>
              <p className='text-white font-extrabold text-lg my-2 ml-10 mb-5'>2345678</p>
            </div>

            <span className='border bg-gray-900 shadow-md h-14 mr-5 ml-5 mb-3'></span>

            <div className='flex flex-col '>
              <p className='text-gray-200 text-md font-bold'>Setor</p>
              <p className='text-white font-extrabold truncate ...  ml-10 my-2 mb-5 text-lg'>iasfafjakfldjasd jfasdfjsdfjklsdjflksa</p>
            </div>

            <span className='border bg-gray-900 shadow-md h-14 mr-5 ml-5 mb-3'></span>

            <div className='flex flex-col '>
              <p className='text-gray-200 text-md font-bold'>Solicitante</p>
              <p className='text-white font-extrabold ml-10 my-2mb-5 text-lg'>idfusodifusdoifu osidufsdifus sdoifusodifu</p>
            </div>

            <span className='border bg-gray-900 shadow-md h-14 mr-5 ml-5 mb-3'></span>
            <div className='flex flex-col '>
              <p className='text-gray-200 text-md font-bold'>Descrição da Os</p>
              <p className='text-white font-extrabold ml-10 my-2 mb-5 truncate ... text-lg w-1/2'>ufusudifsdfisdfisudfidfusdifusduifu fsudfoisudfoidsf ifuosdufsudiofu</p>
            </div>
          </div>

          <span className='border bg-gray-900 shadow-md h-px mb-5 w-10/12'></span>
          <div className='flex ml-96 sm:overflow-auto 2xl:overflow-hidden flex-row justify-start'>

            <div className='flex flex-col '>
              <p className='text-gray-200 text-md ml-10 font-bold'>Cod. OS</p>
              <p className='text-white font-extrabold ml-10 my-2 mb-5 text-lg'>2345678</p>
            </div>

            <span className='border bg-gray-900 shadow-md h-14 mr-5 ml-5 mb-3'></span>

            <div className='flex flex-col '>
              <p className='text-gray-200 text-md font-bold'>Setor</p>
              <p className='text-white font-extrabold sm:overflow-auto ml-10 my-2 mb-5 text-lg'>iasfafjakfldjasd jfasdfjsdfjklsdjflksa</p>
            </div>

            <span className='border bg-gray-900 shadow-md h-14 mr-5 ml-5 mb-3'></span>

            <div className='flex flex-col '>
              <p className='text-gray-200 text-md font-bold'>Solicitante</p>
              <p className='text-white font-extrabold sm:overflow-auto ml-10 my-2 mb-5 text-lg'>idfusodif osidufsdifus sdoifusodifu</p>
            </div>

            <span className='border bg-gray-900 shadow-md h-14 mr-5 ml-5 mb-3'></span>
            <div className='flex flex-col '>
              <p className='text-gray-200 text-md font-bold'>Descrição da Os</p>
              <p className='text-white font-extrabold ml-10 my-2 mb-5 truncate ... text-lg w-1/2'>ufusudifsdfisdfisudfidfusdifusduifu fsudfoisudfoidsf ifuosdufsudiofu</p>
            </div>
          </div>

          <span className='border bg-gray-900 shadow-md h-px mb-5 w-10/12'></span>
          <div className='flex ml-96 sm:overflow-auto 2xl:overflow-hidden flex-row justify-start'>

            <div className='flex 2xl:ml-64 flex-col '>
              <p className='text-gray-200 text-md ml-10 font-bold'>Cod. OS</p>
              <p className='text-white font-extrabold ml-10 my-2 mb-5 text-lg'>2345678</p>
            </div>

            <span className='border bg-gray-900 shadow-md h-14 mr-5 ml-5 mb-3'></span>

            <div className='flex flex-col '>
              <p className='text-gray-200 text-md font-bold'>Setor</p>
              <p className='text-white font-extrabold h-10 ml-10 my-2 mb-5 text-lg'>iasfafjakfldjasd jfasdfjsdfjklsdjflksa</p>
            </div>

            <span className='border bg-gray-900 shadow-md h-14 mr-5 ml-5 mb-3'></span>

            <div className='flex flex-col '>
              <p className='text-gray-200 text-md font-bold'>Solicitante</p>
              <p className='text-white font-extrabold ml-10 my-2 mb-5 text-lg'>idfusodifusdoifu osidufsdifus sdoifusodifu</p>
            </div>

            <span className='border bg-gray-900 shadow-md h-14 mr-5 ml-5 mb-3'></span>
            <div className='flex container mx-auto flex-col '>
              <p className='text-gray-200 text-md font-bold'>Descrição da Os</p>
              <p className='text-white font-extrabold font-extrabold ml-10 my-2 mb-5 truncate ... text-lg w-1/2'>ufusudifsdfisd hhdaskjdhashkj kajsdhaksjd aksjdhaksdj fisudfidfusdifusduifu fsudfoisudfoidsf ifuosdufsudiofu</p>
            </div>
          </div>
        </div>
      </section>
    </section>

  );
}

export default App;
