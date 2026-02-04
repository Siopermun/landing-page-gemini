import { promises as fs } from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { remark } from 'remark';
import html from 'remark-html';
import { Metadata } from 'next';
import Navbar from '../../../components/Navbar';
import Footer from '../../../components/Footer';
import Link from 'next/link';
import Image from 'next/image';

interface PostPageProps {
  params: {
    slug: string;
  };
}

async function getPost(slug: string) {
  if (!slug || typeof slug !== 'string') {
    return null;
  }

  const postsDirectory = path.join(process.cwd(), 'src/content/blog');
  const filePath = path.join(postsDirectory, `${slug}.md`);
  
  try {
    const fileContents = await fs.readFile(filePath, 'utf8');
    const { data, content } = matter(fileContents);

    const processedContent = await remark().use(html).process(content);
    const contentHtml = processedContent.toString();

    return {
      title: data.title,
      date: new Date(data.date).toLocaleDateString('es-VE', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
      }),
      author: data.author,
      contentHtml,
      excerpt: data.excerpt,
      image: data.image,
    };
  } catch {
    return null;
  }
}

export async function generateMetadata({ params }: PostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = await getPost(slug);

  if (!post) {
    return {
      title: 'Artículo no encontrado',
      description: 'La página que buscas no existe.',
    };
  }

  return {
    title: `${post.title} | Siopermun Blog`,
    description: post.excerpt,
    openGraph: {
      title: `${post.title} | Siopermun Blog`,
      description: post.excerpt,
      images: [post.image],
    },
    twitter: {
      card: 'summary_large_image',
      title: `${post.title} | Siopermun Blog`,
      description: post.excerpt,
      images: [post.image],
    },
  };
}

const PostPage = async ({ params }: PostPageProps) => {
  const { slug } = await params;
  const post = await getPost(slug);

  if (!post) {
    return (
      <div>
        <Navbar
          brandName="Siopermun"
          navLinks={[{ href: "/", text: "Inicio" }, { href: "/blog", text: "Blog" }]}
        />
        <main className="container py-5 text-center">
          <h1 className="display-4">Artículo no Encontrado</h1>
          <p className="lead">Lo sentimos, pero el artículo que buscas no existe o ha sido movido.</p>
          <p className="text-muted">Ruta intentada: <code>/blog/{slug || 'undefined'}</code></p>
          <Link href="/blog" className="btn btn-primary mt-3">
            Volver al Blog
          </Link>
        </main>
        <Footer
          quote=""
          quoteSource=""
          copyrightText="Copyright &copy; Siopermun 2025"
          links={[]}
        />
      </div>
    );
  }

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
        <div className="row justify-content-center">
          <div className="col-lg-8">
            <article>
              <header className="mb-4">
                <h1 className="fw-bold display-5">{post.title}</h1>
                <p className="text-muted">
                  Publicado el {post.date} por {post.author}
                </p>
              </header>
              <Image src={post.image} alt={`Imagen para ${post.title}`} className="img-fluid rounded mb-4" width={800} height={400} />
              <hr />
              <div
                className="blog-post-content"
                dangerouslySetInnerHTML={{ __html: post.contentHtml }}
              />
            </article>
          </div>
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

export async function generateStaticParams() {
  const postsDirectory = path.join(process.cwd(), 'src/content/blog');
  try {
    const filenames = await fs.readdir(postsDirectory);
    const mdFileNames = filenames.filter((filename: string) => filename.endsWith('.md'));

    const paths = mdFileNames.map((filename: string) => ({
      slug: filename.replace(/\.md$/, ''),
    }));
    
    return paths;
  } catch {
    return [];
  }
}

export default PostPage;
