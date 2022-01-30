import { useRouter } from 'next/router';
import { DefaultSeo } from 'next-seo';
import { AnimatePresence } from 'framer-motion';

import { WEBSITE_NAME, BASE_URL } from '@/utils/constants';

import Layout from '@/components/Navigation/Layout';

import '@/styles/global.css';

function handleExitComplete() {
  if (typeof window !== 'undefined') {
    window.scrollTo({ top: 0 });
  }
}

function MyApp({ Component, pageProps }) {
  const router = useRouter();
  const url = `${BASE_URL}${router.asPath}`;

  return (
    <>
      <DefaultSeo
        titleTemplate={`%s - ${WEBSITE_NAME}`}
        openGraph={{
          type: 'website',
          locale: 'en_IE',
          url,
          description: '',
          site_name: WEBSITE_NAME,
          images: [],
        }}
        canonical={url}
      />
      <Layout>
        <AnimatePresence
          initial={false}
          exitBeforeEnter
          onExitComplete={handleExitComplete}
        >
          <Component {...pageProps} />;
        </AnimatePresence>
      </Layout>
    </>
  );
}

export default MyApp;
