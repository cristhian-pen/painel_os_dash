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
      setOs0(os0);
      const os1 = dados[1]
      setOs1(os1);
      const os2 = dados[2]
      setOs2(os2);
      const os3 = dados[3]
      setOs3(os3);


    }).catch((err) => {
      console.log(err);
    })
  }, [1000])


  return (
    <section className='flex flex-col'>
      <p className="my-12 text-white text-center font-mono text-6xl font-extrabold">Painel de Ordem de Serviço - TI</p>
      <div className='flex animate__animated animate__slideInDown justify-between my-16'>
        <div></div>
        <div></div>
        <div className="rounded-lg w-36 h-20 shadow-md bg-zinc-700">
          <p className='text-white font-bold ml-4 my-2'>Cod Os</p>
          <p className='text-white text-lg font-extrabold ml-16 my-2'>{os0['CD_OS']}</p>
        </div>
        <div className="rounded-md w-72 h-20 shadow-md bg-zinc-700">
          <p className='text-white font-bold ml-4 my-2'>Setor</p>
          <p className='text-white font-extrabold truncate ... rtext-lg ml-8'>{os0['NM_SETOR']}</p>
        </div>
        <div className="rounded-md w-64 h-20 shadow-md bg-zinc-700">
          <p className='text-white font-bold ml-4 my-2'>Solicitante</p>
          <p className='text-white font-extrabold text-lg ml-10'>{os0['NM_SOLICITANTE']}</p>
        </div>
        <div className="rounded-lg w-auto h-20 shadow-md bg-zinc-700">
          <p className='text-white font-bold ml-4 my-2'>Nova Ordem de Serviço</p>
          <p className='font-extrabold text-white text-lg mb-3.5 ml-8 mr-8 my-2'>{os0['DS_SERVICO']}</p>
        </div>
        <div></div>
        <div></div>
      </div>

      <section className='flex flex-col items-center animate_animated animate__slideInDown justify-center my-20'>
        <div className='flex flex-col rounded-md shadow-md bg-zinc-700 h-6/12 w-[95rem] items-center justify-center'>
          <p className='text-center mb-8 my-8 font-bold text-lg text-white'>Ultimas Ordens de Serviço</p>
          <span className='border bg-gray-900 shadow-md h-px mb-8 w-10/12'></span>
            <div className='flex flex-row justify-start'>

              <div className='flex flex-col '>
                <p className='text-gray-200 text-md ml-10 font-bold'>Cod. OS</p>
                <p className='text-white font-extrabold ml-10 my-2 mb-5 text-lg'>{os1['CD_OS']}</p>
              </div>

              <span className='border bg-gray-900 shadow-md h-14 mr-5 ml-5 mb-3'></span>

              <div className='flex flex-col '>
                <p className='text-gray-200 text-md font-bold'>Setor</p>
                <p className='text-white font-extrabold ml-10 my-2 mb-5 text-lg'>{os1['NM_SETOR']}</p>
              </div>

              <span className='border bg-gray-900 shadow-md h-14 mr-5 ml-5 mb-3'></span>

              <div className='flex flex-col '>
                <p className='text-gray-200 text-md font-bold'>Solicitante</p>
                <p className='text-white font-extrabold ml-10 my-2 mb-5 text-lg'>{os1['NM_SOLICITANTE']}</p>
              </div>

              <span className='border bg-gray-900 shadow-md h-14 mr-5 ml-5 mb-3'></span>
              <div className='flex flex-col '>
                <p className='text-gray-200 text-md font-bold'>Descrição da Os</p>
                <p className='text-white font-extrabold ml-10 my-2 mb-5 truncate ... text-lg w-1/2'>{os1['DS_SERVICO']}</p>
              </div>
            </div>

            <span className='border bg-gray-900 shadow-md h-px mb-5 w-10/12'></span>
            <div className='flex flex-row justify-between '>

              <div className='flex flex-col '>
                <p className='text-gray-200 text-md ml-10 font-bold'>Cod. OS</p>
                <p className='text-white font-extrabold ml-10 my-2 mb-5 text-lg'>{os2['CD_OS']}</p>
              </div>

              <span className='border bg-gray-900 shadow-md h-14 mr-5 ml-5 mb-3'></span>

              <div className='flex flex-col '>
                <p className='text-gray-200 text-md font-bold'>Setor</p>
                <p className='text-white font-extrabold ml-10 my-2 mb-5 text-lg'>{os2['NM_SETOR']}</p>
              </div>

              <span className='border bg-gray-900 shadow-md h-14 mr-5 ml-5 mb-3'></span>
              <div className='flex flex-col '>
                <p className='text-gray-200 text-md font-bold'>Solicitante</p>
                <p className='text-white font-extrabold ml-10 my-2 mb-5 text-lg w-1/2 '>{os2['NM_SOLICITANTE']}</p>
              </div>

              <span className='border bg-gray-900 shadow-md h-14 mr-5 ml-5 mb-3'></span>
              <div className='flex flex-col  '>
                <p className='text-gray-200 text-md font-bold'>Descrição da Os</p>
                <p className='text-white font-extrabold ml-8 my-2 mb-5 text-center text-lg w-1/2 truncate ...'>{os2['DS_SERVICO']}</p>
              </div>
            </div>

            <span className='border bg-gray-900 shadow-md h-px mb-5 w-10/12'></span>
            <div className='flex flex-row justify-between '>

              <div className='flex flex-col '>
                <p className='text-gray-200 text-md ml-10 font-bold'>Cod. OS</p>
                <p className='text-white font-extrabold ml-10 my-2 mb-5 text-lg'>{os3['CD_OS']}</p>
              </div>

              <span className='border bg-gray-900 shadow-md h-14 mr-5 ml-5 mb-3'></span>

              <div className='flex flex-col '>
                <p className='text-gray-200 text-md font-bold'>Setor</p>
                <p className='text-white font-extrabold ml-10 my-2 mb-5 text-clip overflow-hidden ... text-center text-lg'>{os3['NM_SETOR']}</p>
              </div>

              <span className='border bg-gray-900 shadow-md h-14 mr-5 ml-5 mb-3'></span>
              <div className='flex flex-col '>
                <p className='text-gray-200 text-md font-bold'>Solicitante</p>
                <p className='text-white font-extrabold ml-10 my-2 mb-5 text-lg truncate ... text-center'>{os3['NM_SOLICITANTE']}</p>
              </div>

              <span className='border bg-gray-900 shadow-md h-14 mr-5 ml-5 mb-3'></span>
              <div className='flex flex-col'>
                <p className='text-gray-200 text-md font-bold'>Descrição da Os</p>
                <p className='text-white font-extrabold my-2 mb-5 text-lg w-96 text-center'>{os3['DS_SERVICO']}</p>
              </div>
            </div>
        </div>
      </section>
    </section>
  );
}

export default App;
