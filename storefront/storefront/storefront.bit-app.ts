import { MfReact } from '@frontend/module-federation.react.apps-types.mf-rspack';
import {
  type NetlifyOptions,
  Netlify,
} from '@teambit/cloud-providers.deployers.netlify';
import { shellAppSharedDependencies } from '@bit-bazaar/shell-app.shared-dependencies';

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
    shared: shellAppSharedDependencies,
  },
  transformers: [
    (mutator, context) => {
      if (context.dev) {
        mutator.merge({
          devServer: {
            ...mutator.config.devServer,
            historyApiFallback: true,
          },
        });
      }

      return mutator;
    },
  ],
  deploy: Netlify.deploy(netlifyConfig),
});
