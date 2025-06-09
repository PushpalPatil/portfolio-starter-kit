import { BlogPosts } from 'app/components/posts'

export default function Page() {
  return (
    <section>
      <h1 className="mb-8 text-2xl font-semibold tracking-tighter">
        Pushpal's Pages
      </h1>
      <p className="mb-4">
        {`Hey! I'm Pushpal. 
        
        I'm doing the Fractal Bootcamp this summer and here's my diary for the 3 months I'm here.
        
        I'm excited to share the variety of ups and downs here, 
        hope you enjoy the read and maybe even learn something from this :}`}
      </p>
      <div className="my-8">
        <BlogPosts />
      </div>
    </section>
  )
}
