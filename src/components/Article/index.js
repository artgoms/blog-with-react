import Post from '../Post'


const Article = () => {
  return (
    <section className='container'>
      <h3>Article</h3>
      <div className='mt-5 container-posts'>
        <Post subtitle="tecnologia" title="O guia definitivo sobre o blog">
          1 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam in sem sed felis posuere accumsan in eu velit. Duis quis congue turpis, a tempus nibh. Nam malesuada turpis odio, eget lobortis diam viverra sit amet. Cras neque eros, maximus quis pulvinar eget, congue molestie erat. Aenean porta massa sed consequat dignissim. Aenean iaculis lorem eu nunc accumsan, ut aliquet quam malesuada. Pellentesque tristique mauris nulla, in maximus neque consequat id.
        </Post>
        <Post subtitle="fotografia" title="Quais as melhores câmeras em 2021?">
          2 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam in sem sed felis posuere accumsan in eu velit. Duis quis congue turpis, a tempus nibh. Nam malesuada turpis odio, eget lobortis diam viverra sit amet. Cras neque eros, maximus quis pulvinar eget, congue molestie erat. Aenean porta massa sed consequat dignissim. Aenean iaculis lorem eu nunc accumsan, ut aliquet quam malesuada. Pellentesque tristique mauris nulla, in maximus neque consequat id.
        </Post>
        <Post subtitle="cinema" title="Os 10 filmes com maior bilheteria">
          3 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam in sem sed felis posuere accumsan in eu velit. Duis quis congue turpis, a tempus nibh. Nam malesuada turpis odio, eget lobortis diam viverra sit amet. Cras neque eros, maximus quis pulvinar eget, congue molestie erat. Aenean porta massa sed consequat dignissim. Aenean iaculis lorem eu nunc accumsan, ut aliquet quam malesuada. Pellentesque tristique mauris nulla, in maximus neque consequat id.
        </Post>
      </div>

    </section>
  )
}

export default Article