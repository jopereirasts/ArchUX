import '../../App.css'
import meet from '../../img/reuniao.jpeg'

export default function AI() {
  

  return (
    <>
      <div className='banner'>
        Sobre Nós
      </div>
      <div className='divisor'></div>
      <p className='text'>
      Somos alunos bolsistas do Projeto Super, um projeto entre a SAMSUNG e a Universidade Federal do Amazonas 
      (UFAM) que visa estimular a capacitação e a pesquisa em 11 cursos de graduação.
      </p>
      <p className='text'>
      Nossa task "WP3-ICOMP-1-UX" tem grande ênfase em usabilidade e UX, tendo também outros trabalhos em 
      desenvolvimento voltados a esse tema. 
      </p>
      <img src={meet} alt='Reunião do Time' className='exampleimg'/>
      <p className='legendfigure'>Reunião da Equipe</p>
      <p className='text'>
      Caso exista alguma dúvida ou sugestão para melhoria deste trabalho, nossos emails para são:
      </p>
      <p className='text'>
      Brendo: bcss@icomp.ufam.edu.br (Bolsista) <br/>
      Jo: jo.pereira@icomp.ufam.edu.br (Bolsista) <br/>
      Genildo: genildo.gomes@icomp.ufam.edu.br (Monitor)<br/>
      Bruno: bruno@icomp.ufam.edu.br (Professor orientador)<br/>
      Tayana: tayana@icomp.ufam.edu.br (Professora orientadora)
      </p>
    </>
  )
}