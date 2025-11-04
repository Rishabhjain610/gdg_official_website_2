export default function robots() {
  const base = "https://gdgtsecoffical.dpdns.org";
  return {
    rules: [{ userAgent: "*", allow: "/" }],
    sitemap: `${base}/sitemap.xml`,
    host: base,
  };
}