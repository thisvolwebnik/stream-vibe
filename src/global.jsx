import { Head } from "minista";
import "@/styles";
import Header from "@/layouts/Header";
import Footer from "@/layouts/Footer";
import Content from "@/layouts/Content";

export default function (props) {
  const { children, title } = props;

  return (
    <>
      <Head htmlAttributes={{ lang: "en" }}>
        <title>Stream Vibe | {title}</title>
        <link rel="apple-touch-icon" sizes="180x180" href="/favicon/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon/favicon-16x16.png" />
        <link rel="manifest" href="/favicon/site.webmanifest" />
        <script src="/src/main.js" type="module" />
      </Head>
      <Header />
      <Content>{children}</Content>
      <Footer />
    </>
  );
}
