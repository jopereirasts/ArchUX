import '../../App.css'
import ai from '../../img/ai.png'

export default function AI() {
  

  return (
    <>
      <div className='banner'>
        Técnicas
      </div>
      <p className='text'>
      A Arquitetura da Informação (AI) é um campo fundamental no design e organização de sistemas de informação, como websites e aplicativos, que visa tornar a informação acessível, compreensível e fácil de navegar. A AI concentra-se na estrutura, categorização e hierarquia das informações, com o objetivo de melhorar a usabilidade e a experiência do usuário. Ela desempenha um papel crucial na organização e na apresentação de conteúdo de maneira lógica e intuitiva.
      </p>
      <p className='text'>
      Um dos principais elementos da Arquitetura da Informação é a criação de mapas do site ou wireframes, que representam visualmente a estrutura da informação, os relacionamentos entre os elementos e a disposição de conteúdo em uma interface. Além disso, a AI envolve a definição de taxonomias e sistemas de categorização para classificar e organizar o conteúdo de forma coerente, permitindo que os usuários encontrem informações relevantes com facilidade.
      </p>
      <img src={ai} alt='Exemplo de Wireframe' className='exampleimg'/>
      <p className='legendfigure'>Exemplo de Wireframe</p>
      <p className='text'>
      A acessibilidade é outra dimensão importante da AI, pois se concentra em garantir que a informação seja acessível a todas as pessoas, independentemente de suas habilidades ou deficiências. Uma AI bem planejada pode melhorar a experiência de todos os usuários, incluindo aqueles que dependem de tecnologias assistivas.
      </p>
      <p className='text'>
      Em resumo, a Arquitetura da Informação é essencial para criar sistemas de informação eficazes e usáveis. Ela se concentra na organização, estrutura e acessibilidade da informação, garantindo que os usuários possam encontrar e compreender o conteúdo de forma intuitiva e eficiente. Uma boa AI contribui significativamente para a satisfação do usuário e o sucesso de um projeto de design de informação.
      </p>
    </>
  )
}