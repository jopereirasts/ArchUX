import '../../App.css'
import h1 from '../../img/cardImgs/h1.jpeg'

export default function AI() {
  

  return (
    <>
      <div className='banner'>
        Heurísticas
      </div>
      <div className='divisor'></div>
      <p className='text'>
      Baseadas no texto do Garrett, em problemas encontrados no artigo 
      <a href='https://drive.google.com/file/d/1kbFP1scZfLI5QXRFsE7YdhIDKkRVh1yz/view' target="_blank">"A problem 
      analysis in game-based student response system from ux elements perspective"</a>, e em conceitos 
      gerais de usabilidade e UX, 15 heurísticas foram criadas e organizadas de acordo cada um do Planos de Garrett. 
      </p>
      <div className='divisor'></div>
      <h2>Plano Estratégia</h2>
      <div className='card'>
        <img src={h1} alt='Heurística 1' width='180px'></img>
        <div className='cardTitle'>
            H1 - Aplicação para mais de um tipo de usuário
        </div>
        <div className='cardText'>
        Deve-se ter atenção para que, conforme os objetivos, a aplicação seja pensada 
        para mais de um tipo de usuário. Exemplo: aplicações de ensino baseadas em jogos/competição 
        podem ter modos de controle de tempo, para usuários mais competitivos e menos competitivos 
        poderem utilizar.
        </div>
      </div>
      <div className='divisor'></div>
      <h2>Plano Escopo</h2>
      <div className='divisor'></div>
      <h2>Plano Estrutura</h2>
      <div className='divisor'></div>
      <h2>Plano Esqueleto</h2>
      <div className='divisor'></div>
      <h2>Plano Superfície</h2>
    </>
  )
}