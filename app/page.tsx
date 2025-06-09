import { BlogPosts } from 'app/components/posts'

export default function Page() {
  return (
    <section>
      <h1 className="mb-8 text-2xl font-semibold tracking-tighter">
        Pushpal's Pages
      </h1>
      <p className="mb-4">
        {`Hey! I'm Pushpal. 
        
        I did my undergrad, and am currently doing my masters in Software Engineering at San Jose State University. 

        I'm at Fractal to learn to trust myself as an engineer/designer. 

        This is my diary for the 3 months I'm here. 
        
        I'm excited to share the variety of ups and downs here, 
        hope you enjoy the read and maybe even learn something from this :}`}
      </p>
      <div className="my-8">
        <BlogPosts />
      </div>
    </section>
  )
}
