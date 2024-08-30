import React from "react";
import { Html, Head, Main, NextScript, DocumentProps } from "next/document";
import {
  DocumentHeadTags,
  documentGetInitialProps,
} from "@mui/material-nextjs/v14-pagesRouter";

import { createCache } from "@/utils/createCache";

interface MyDocumentProps extends DocumentProps {
  emotionStyleTags: React.ReactElement<any>[];
}

const MyDocument = (props: MyDocumentProps) => {
  return (
    <Html lang="en">
      <Head>
        <meta name="charset" content="utf-8" />
        <DocumentHeadTags {...props} />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
};

MyDocument.getInitialProps = async (ctx: any) => {
  const finalProps = await documentGetInitialProps(ctx, {
    emotionCache: createCache(),
  });

  return finalProps;
};

export default MyDocument;
