import '../../App.css'
import levels from '../../img/levels.png'

export default function Garrett() {
  

  return (
    <>
      <div className='banner'>
        Planos de Garrett
      </div>
      <div className='divisor'></div>
      <img src={levels} alt='Níveis de UX de Garrett' className='exampleimg'/>
      <p className='legendfigure'>Níveis de UX de Garrett</p>
      <p className='text'>
      Jesse James Garrett é um renomado profissional da área de design de experiência do usuário (UX) 
      e é conhecido por sua contribuição à definição dos "5 planos" para o design de interações bem-sucedidas. 
      Esses cinco planos, também chamados de "The Elements of User Experience" são uma estrutura que ajuda a guiar 
      a criação de produtos e serviços digitais de alta qualidade.
      </p>
      <p className='text'>
      O primeiro plano de Garrett é a <span className='bold'>Estratégia</span>, que envolve a compreensão das 
      metas de negócios e das necessidades dos usuários. Ele destaca a importância de definir o propósito do 
      projeto e como ele se alinha com os objetivos da empresa. A estratégia é o alicerce sobre o qual todo o 
      processo de design é construído.
      </p>
      <p className='text'>
      O segundo plano é o <span className='bold'>Escopo</span>, que se concentra em definir o conteúdo e as 
      funcionalidades do projeto. Aqui, é crucial determinar quais recursos são necessários para atender aos 
      objetivos estratégicos e às necessidades dos usuários. O escopo ajuda a estabelecer limites claros para o projeto.
      </p>
      <p className='text'>
      O terceiro plano é a <span className='bold'>Estrutura</span>, que trata da organização e hierarquia da 
      informação. Isso envolve a criação de mapas do site, fluxos de usuário e arquitetura da informação para 
      garantir que os usuários possam navegar de maneira lógica e eficiente no sistema.
      </p>
      <p className='text'>
      O quarto plano é o <span className='bold'>Esqueleto</span>, que se concentra em definir a interface e o 
      layout. Isso envolve a criação de wireframes e protótipos para visualizar como a informação será apresentada 
      aos usuários. A esqueletização está ligada à usabilidade e à estética visual do produto.
      </p>
      <p className='text'>
      Por fim, o quinto plano é a <span className='bold'>Superfície</span>, que envolve a camada visual e 
      interativa do design. Isso inclui a escolha de cores, tipografia, elementos de design e interatividade 
      que tornam a interface atraente e agradável para os usuários.
      </p>
      <p className='text'>
      Jesse James Garrett demonstra como esses cinco planos trabalham em conjunto para criar uma experiência 
      do usuário completa e eficaz. Cada plano desempenha um papel crucial na definição, desenvolvimento e 
      refinamento de produtos e serviços digitais de alta qualidade.
      </p>
    </>
  )
}