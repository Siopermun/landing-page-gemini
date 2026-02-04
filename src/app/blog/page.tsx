import Link from 'next/link';
import Image from 'next/image';
import { promises as fs } from 'fs';
import path from 'path';
import matter from 'gray-matter';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

interface Post {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  image: string;
}

async function getPosts(): Promise<Post[]> {
  const postsDirectory = path.join(process.cwd(), 'src/content/blog');
  try {
    const filenames = await fs.readdir(postsDirectory);
    const mdFileNames = filenames.filter(filename => filename.endsWith('.md'));

    const posts = await Promise.all(
      mdFileNames.map(async (filename) => {
        const filePath = path.join(postsDirectory, filename);
        const fileContents = await fs.readFile(filePath, 'utf8');
        const { data } = matter(fileContents);

        return {
          slug: filename.replace(/\.md$/, ''),
          title: data.title,
          date: new Date(data.date).toISOString(),
          excerpt: data.excerpt,
          image: data.image,
        };
      })
    );

    return posts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
  } catch {
    return [];
  }
}

export const metadata = {
  title: 'Blog | Siopermun - Consejos y Noticias de Tecnología',
  description: 'Artículos sobre mantenimiento de PC, optimización de software, y las últimas noticias de tecnología para mantener tus equipos en perfecto estado.',
};

const BlogPage = async () => {
  const posts = await getPosts();

  return (
    <div>
      <Navbar
        brandName="Siopermun"
        navLinks={[
          { href: "/", text: "Inicio" },
          { href: "/#services", text: "Servicios" },
          { href: "/#about", text: "Sobre Nosotros" },
          { href: "/blog", text: "Blog" },
          { href: "/#contact", text: "Contacto" },
        ]}
      />
      <main className="container py-5">
        <div className="text-center mb-5">
          <h1 className="display-4 fw-bold">Blog de Tecnología</h1>
          <p className="lead text-muted">
            Consejos, guías y noticias para mantener tus equipos al día.
          </p>
        </div>

        <div className="row g-4 blog-posts-grid">
          {posts.length > 0 ? (
            posts.map((post) => (
              <div key={post.slug} className="col-lg-6 blog-post-card-wrapper">
                <div className="card h-100 shadow-sm border-0 overflow-hidden blog-post-card">
                  <Link href={`/blog/${post.slug}`} passHref>
                    <Image src={post.image} className="card-img-top blog-card-image" alt={`Imagen destacada para ${post.title}`} width={400} height={200} />
                  </Link>
                  <div className="card-body d-flex flex-column">
                    <h2 className="card-title h4 blog-post-title">{post.title}</h2>
                    <p className="card-text text-muted small mb-2 blog-post-date">
                      {new Date(post.date).toLocaleDateString('es-VE', {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric',
                      })}
                    </p>
                    <p className="card-text flex-grow-1 blog-post-excerpt">{post.excerpt}</p>
                    <Link href={`/blog/${post.slug}`} className="btn btn-primary mt-auto align-self-start blog-read-more-btn">
                      Leer más <i className="bi bi-arrow-right"></i>
                    </Link>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div className="col-12 text-center text-muted py-5 no-posts-message">
              <i className="bi bi-robot display-1 text-primary mb-3"></i>
              <p className="lead">No hay publicaciones en el blog todavía. ¡Vuelve pronto!</p>
              <Link href="/" className="btn btn-outline-primary mt-3">
                Volver al Inicio
              </Link>
            </div>
          )}
        </div>
      </main>
      <Footer
        quote="El conocimiento es poder."
        quoteSource="Francis Bacon"
        copyrightText="Copyright &copy; Siopermun 2025"
        links={[
          { href: "/politica-de-privacidad", text: "Política de Privacidad" },
          { href: "/terminos-de-servicio", text: "Términos de Servicio" },
          { href: "/politica-de-cookies", text: "Política de Cookies" },
        ]}
      />
    </div>
  );
};

export default BlogPage;
