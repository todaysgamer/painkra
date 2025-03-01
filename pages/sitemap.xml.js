import { getAllMobile} from '../lib/sanity';



const generateSitemapXml = (staticData, dynamicData) => {
  let sitemap = `<?xml version="1.0" encoding="UTF-8"?>\n`;
  sitemap += `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n`;

  staticData.forEach((page) => {
    sitemap += `  <url>\n`;
    sitemap += `    <loc>${`${process.env.SITE_URL}${page.url}`}</loc>\n`;
    sitemap += `    <lastmod>${page.lastModified}</lastmod>\n`;
    sitemap += `  </url>\n`;
  });

  dynamicData.forEach((item) => {
    sitemap += `  <url>\n`;
    sitemap += `    <loc>${`${process.env.SITE_URL}/techblog/${item.slug.current}`}</loc>\n`; 
    sitemap += `    <lastmod>${new Date(item.lastModified).toISOString()}</lastmod>\n`;
    sitemap += `  </url>\n`;

  });

  sitemap += `</urlset>\n`;

  return sitemap;
};

const Sitemap = () => {};

export async function getServerSideProps({ res }) {
  const staticPages = [
    { url: '/', lastModified: '2024-03-26' },
    { url: '/mobile', lastModified: '2023-08-09' },
    { url: '/computer', lastModified: '2023-08-09' },
    { url: '/tech', lastModified: '2023-08-13' },
    { url: '/contact', lastModified: '2024-02-29' },
  ];

  const mobileData = await getAllMobile(); 
 

  const dynamicData = [...mobileData];

  const sitemapXml = generateSitemapXml(staticPages, dynamicData);

  res.setHeader('Content-Type', 'text/xml');
  res.write(sitemapXml);
  res.end();

  return {
    props: {},
  };
}

export default Sitemap;
