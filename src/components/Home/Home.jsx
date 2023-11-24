import '../../App.css'
import { Link } from "react-router-dom"



export default function Home() {
  

  return (
    <>
      <div className='banner'>
        ArchUX
      </div>
      <div className='divisor'></div>
      <h1>Bem-vindo ao ArchUX</h1>
      <p className='text'>
        O Nosso Objetivo é reunir em um 
          só lugar informações sobre 
          Experiência do Usuário (UX) e 
          Arquitetura da Informação, com o 
          foco nos Elementos da UX de Garret. 
          Além de apresentar possíveis técnicas 
          de como aplicar cada um dos níveis e 
          também uma técnica de inspeção de 
          sistemas baseada no estudo do Garrett.
      </p>
      <div className='divisor'></div>
      <h2> User Experience (UX) </h2>
      <p className='text'>
      User Experience (UX) refere-se à experiência geral de um usuário ao interagir com um produto ou serviço digital. Envolve a usabilidade, acessibilidade, eficiência e satisfação do usuário. A UX busca criar interfaces intuitivas, agradáveis e eficazes, considerando a jornada do usuário para proporcionar experiências positivas e significativas. 
      <Link to={'/ux'}> Ver Mais</Link> 
      </p>
      <div className='divisor'></div>
      <h2> Arquitetura da Informação (AI) </h2>
      <p className='text'>
      É uma disciplina que envolve o planejamento e organização de informações de forma lógica e acessível em sistemas digitais, sites e aplicativos. Ela visa melhorar a usabilidade, tornando mais fácil para os usuários encontrar e compreender o conteúdo, promovendo experiências mais eficazes e satisfatórias. 
      <Link to={'/ai'}> Ver Mais</Link> 
      </p>
      <div className='divisor'></div>
      <h2> Planos de Garrett </h2>
      <p className='text'>
      Os Planos de Garrett, desenvolvidos por Jesse James Garrett, são uma estrutura amplamente utilizada no design de experiência do usuário (UX). Eles descrevem uma série de diagramas que ajudam a visualizar e comunicar as fases de um projeto de design, desde a compreensão inicial do problema até a implementação da solução, incluindo pesquisa, design, desenvolvimento e teste. Esses planos auxiliam na organização e na garantia de que a visão do projeto seja bem-sucedida. 
      <Link to={'/garrett'}> Ver Mais</Link> 
      </p>
      <div className='divisor'></div>
      <h2> Avaliação</h2>
      <p className='text'>
        15 heurísticas  foram criadas e organizadas de acordo cada um do Planos de Garrett para avaliação de sistemas.
        Ver mais.
      </p>
      <div className='divisor'></div>
      <h2> Design </h2>
      <p className='text'>
      Sugestão de Técnicas para utilizar no design de aplicações, de acordo com cada um dos planos Garrett.
      Veremos mais em breve. :)
      </p>
      {/*TODO
      FAZER ACCORDION DA PAGINA PRINCIPAL*/}
      
    </>
  )
}
