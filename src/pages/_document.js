import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
     <Head>
        <link rel="stylesheet" type="text/css" href="https://js.api.here.com/v3/3.1/mapsjs-ui.css" />
        <link rel="icon" href="/images/logo.svg" /> {/* Update this path if your favicon is a different type */}

        <script
          src={`https://js.api.here.com/v3/3.1/mapsjs-core.js`}
          type="text/javascript"
          
          defer
        />
        <script
          src={`https://js.api.here.com/v3/3.1/mapsjs-service.js`}
          type="text/javascript"
          
          defer
        />
        <script
          src={`https://js.api.here.com/v3/3.1/mapsjs-ui.js`}
          type="text/javascript"
          
          defer
        />
        <script
          src={`https://js.api.here.com/v3/3.1/mapsjs-mapevents.js`}
          type="text/javascript"
          
          defer
        />
        <script  
          src="https://js.api.here.com/v3/3.1/mapsjs-harp.js"
          type="text/javascript"
          
          defer
          >
          </script>
          <script  
          src="https://js.api.here.com/v3/3.1/mapsjs-clustering.js"
          type="text/javascript"
          
          defer
          >
          </script>

          

      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
