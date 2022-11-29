import React, { useEffect, useState } from 'react';
import API from './Services/API';
import './App.css';

function App() {
  const [ data, setdata ] = useState('');

  useEffect(()=>{
    API.get('/info').then((response) => {
      setdata(response.data);
    }).catch((err) =>{
      console.log(err)
    })
  })

  let dados = data;
  let teste = dados(data => `${data.CD_OS} + ':' ${data.NM_SOLICITANTE}`)
  console.log(teste)
  
  return (
    <section >
      <p className="my-12 text-white text-center font-mono text-6xl font-extrabold">Painel de Ordem de Serviço - TI</p>
      <div className='flex justify-between my-16'>
        <div></div>
        <div></div>
        <div className="rounded-lg w-36 h-20 shadow-md bg-zinc-700">
          <p className='text-white font-bold ml-4 my-2'>Cod Os</p>
          <p className='text-white text-lg font-extrabold ml-16 my-2'></p>
        </div>
        <div className="rounded-md w-52 h-20 shadow-md bg-zinc-700">
          <p className='text-white font-bold ml-4 my-2'>Setor</p>
          <p className='text-white font-extrabold text-lg ml-10'>Unidade Amarela</p>
        </div>
        <div className="rounded-md w-64 h-20 shadow-md bg-zinc-700">
          <p className='text-white font-bold ml-4 my-2'>Solicitante</p>
          <p className='text-white font-extrabold text-lg ml-10'>Breno de oliveira Vieira</p>
        </div>
        <div className="rounded-lg w-auto h-20 shadow-md bg-zinc-700">
          <p className='text-white font-bold ml-4 my-2'>Nova Ordem de Serviço</p>
          <p className='font-extrabold text-white text-2xl mb-3.5 ml-8 mr-8 my-2'>teste de os e painel e sobre coisas importantes</p>
        </div>
        <div></div>
        <div></div>
      </div>

      <section className='flex flex-col items-center justify-center my-20'>
        <div className='flex flex-col rounded-md shadow-md bg-zinc-700 h-6/12 w-[95rem] items-center justify-center'>
          <p className='text-center mb-8 my-8 font-bold text-lg text-white'>Ultimas Ordens de Serviço</p>
          <span className='border bg-gray-900 shadow-md h-px mb-8 w-10/12'></span>
          <div className='flex flex-row justify-start'>

            <div className='flex flex-col '>
              <p className='text-gray-200 text-md ml-10 font-bold'>Cod. OS</p>
              <p className='text-white font-extrabold ml-10 my-2 mb-5 text-lg'>123465</p>
            </div>

            <span className='border bg-gray-900 shadow-md h-14 mr-5 ml-5 mb-3'></span>

            <div className='flex flex-col '>
              <p className='text-gray-200 text-md font-bold'>Setor</p>
              <p className='text-white font-extrabold ml-10 my-2 mb-5 text-lg'>Unidade Vermelha</p>
            </div>

            <span className='border bg-gray-900 shadow-md h-14 mr-5 ml-5 mb-3'></span>

            <div className='flex flex-col '>
              <p className='text-gray-200 text-md font-bold'>Solicitante</p>
              <p className='text-white font-extrabold ml-10 my-2 mb-5 text-lg'>Breno de oliveira vieira</p>
            </div>

            <span className='border bg-gray-900 shadow-md h-14 mr-5 ml-5 mb-3'></span>
            <div className='flex flex-col '>
              <p className='text-gray-200 text-md font-bold'>Descrição da Os</p>
              <p className='text-white font-extrabold ml-8 my-2 mb-5 text-lg text-center w-96'>TELEFONE DO POSTO DE ENFERMAGEM COM DEFEITO</p>
            </div>
          </div>

          <span className='border bg-gray-900 shadow-md h-px mb-5 w-10/12'></span>
          <div className='flex flex-row justify-between '>

            <div className='flex flex-col '>
              <p className='text-gray-200 text-md ml-10 font-bold'>Cod. OS</p>
              <p className='text-white font-extrabold ml-10 my-2 mb-5 text-lg'>123465</p>
            </div>

            <span className='border bg-gray-900 shadow-md h-14 mr-5 ml-5 mb-3'></span>

            <div className='flex flex-col '>
              <p className='text-gray-200 text-md font-bold'>Setor</p>
              <p className='text-white font-extrabold ml-10 my-2 mb-5 text-lg'>Unidade Vermelha</p>
            </div>

            <span className='border bg-gray-900 shadow-md h-14 mr-5 ml-5 mb-3'></span>
            <div className='flex flex-col '>
              <p className='text-gray-200 text-md font-bold'>Solicitante</p>
              <p className='text-white font-extrabold ml-10 my-2 mb-5 text-lg'>Breno de oliveira vieira</p>
            </div>

            <span className='border bg-gray-900 shadow-md h-14 mr-5 ml-5 mb-3'></span>
            <div className='flex flex-col  '>
              <p className='text-gray-200 text-md font-bold'>Descrição da Os</p>
              <p className='text-white font-extrabold ml-8 my-2 mb-5 w-96 text-center text-lg'>INSTALACAO DO RELATORIO DE ATENDIMENTO NO VNC 10.168.102.179 - A MAQUINA NA QUAL HAVIA SIDO INSTALADO PERDEU O HD</p>
            </div>
          </div>

          <span className='border bg-gray-900 shadow-md h-px mb-5 w-10/12'></span>
          <div className='flex flex-row justify-between '>

            <div className='flex flex-col '>
              <p className='text-gray-200 text-md ml-10 font-bold'>Cod. OS</p>
              <p className='text-white font-extrabold ml-10 my-2 mb-5 text-lg'>123465</p>
            </div>

            <span className='border bg-gray-900 shadow-md h-14 mr-5 ml-5 mb-3'></span>

            <div className='flex flex-col '>
              <p className='text-gray-200 text-md font-bold'>Setor</p>
              <p className='text-white font-extrabold ml-10 my-2 mb-5 text-lg'>Unidade Vermelha</p>
            </div>

            <span className='border bg-gray-900 shadow-md h-14 mr-5 ml-5 mb-3'></span>
            <div className='flex flex-col '>
              <p className='text-gray-200 text-md font-bold'>Solicitante</p>
              <p className='text-white font-extrabold ml-10 my-2 mb-5 text-lg'>Breno de oliveira vieira</p>
            </div>

            <span className='border bg-gray-900 shadow-md h-14 mr-5 ml-5 mb-3'></span>
            <div className='flex flex-col '>
              <p className='text-gray-200 text-md font-bold'>Descrição da Os</p>
              <p className='text-white font-extrabold ml-8 my-2 mb-5 text-lg w-96 text-center'>TELEFONE DO POSTO DE ENFERMAGEM COM DEFEITO</p>
            </div>
          </div>
          <span className='border bg-gray-900 shadow-md h-px mb-5 w-10/12'></span>
          <div className='flex flex-row justify-between '>

            <div className='flex flex-col '>
              <p className='text-gray-200 text-md ml-10 font-bold'>Cod. OS</p>
              <p className='text-white font-extrabold ml-10 my-2 mb-5 text-lg'>123465</p>
            </div>

            <span className='border bg-gray-900 shadow-md h-14 mr-5 ml-5 mb-3'></span>

            <div className='flex flex-col '>
              <p className='text-gray-200 text-md font-bold'>Setor</p>
              <p className='text-white font-extrabold ml-10 my-2 mb-5 text-lg'>Unidade Vermelha</p>
            </div>

            <span className='border bg-gray-900 shadow-md h-14 mr-5 ml-5 mb-3'></span>
            <div className='flex flex-col '>
              <p className='text-gray-200 text-md font-bold'>Solicitante</p>
              <p className='text-white font-extrabold ml-10 my-2 mb-5 text-lg'>Breno de oliveira vieira</p>
            </div>

            <span className='border bg-gray-900 shadow-md h-14 mr-5 ml-5 mb-3'></span>
            <div className='flex flex-col '>
              <p className='text-gray-200 text-md font-bold'>Descrição da Os</p>
              <p className='text-white font-extrabold ml-8 my-2 mb-5 text-lg w-96 text-center'>TELEFONE DO POSTO DE ENFERMAGEM COM DEFEITO</p>
            </div>
          </div>
        </div>
      </section>
    </section>
  );
}

export default App;
