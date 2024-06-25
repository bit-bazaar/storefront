import { MfReact } from '@frontend/module-federation.react.apps-types.mf-rspack';
import {
  type NetlifyOptions,
  Netlify,
} from '@teambit/cloud-providers.deployers.netlify';

const netlifyConfig: NetlifyOptions = {
  team: 'teambit',
  accessToken: process.env.NETLIFY_AUTH_TOKEN as string,
  productionSiteName: 'bit-bazaar-storefront',
  stagingSiteName: 'bit-bazaar-storefront',
  skipLaneDeployments: false,
  useDefaultRedirectsForSPA: false,
};

export default MfReact.from({
  name: 'storefront',
  clientRoot: './storefront.app-root.js',
  moduleFederation: {
    exposes: {
      './storenav': './navitem.js',
      './store': './storefront.js',
    },
    shared: [
      {
        react: {
          singleton: true,
          requiredVersion: '18.3.1',
          eager: true,
        },
        'react-dom': {
          singleton: true,
          requiredVersion: '18.3.1',
          eager: true,
        },
        'react-router-dom': {
          singleton: true,
          requiredVersion: '6.23.1',
        },
        '@emotion/react': {
          singleton: true,
          requiredVersion: '11.11.5',
        },
        '@emotion/styled': {
          singleton: true,
          requiredVersion: '11.11.5',
        },
        '@bit-bazaar/design.navigation.navbar-item': {
          singleton: true,
          requiredVersion: '*',
        },
        '@bit-bazaar/design.navigation.navbar': {
          singleton: true,
          requiredVersion: '*',
        },
        '@bit-bazaar/design.data-display.avatar': {
          singleton: true,
          requiredVersion: '*',
        },
        '@bit-bazaar/design.layout.box': {
          singleton: true,
          requiredVersion: '*',
        },
        '@bit-bazaar/design.layout.toolbar': {
          singleton: true,
          requiredVersion: '*',
        },
        '@bit-bazaar/design.layout.container': {
          singleton: true,
          requiredVersion: '*',
        },
        '@bit-bazaar/design.navigation.menu': {
          singleton: true,
          requiredVersion: '*',
        },
      },
    ],
  },
  transformers: [
    (mutator) => {
      mutator.merge({
        devServer: {
          ...mutator.config.devServer,
          historyApiFallback: true,
        },
      });

      return mutator;
    },
    (mutator) => {
      mutator!.config!.output!.publicPath =
        'https://bit-bazaar-storefront.netlify.app/';
      return mutator;
    },
  ],
  deploy: Netlify.deploy(netlifyConfig),
});
