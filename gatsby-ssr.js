/**
 * Implement Gatsby's SSR (Server Side Rendering) APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/ssr-apis/
 */

// You can delete this file if you're not using it

import 'bootstrap/dist/css/bootstrap.min.css';
import "./src/css/layout.scss"
import "./src/containers/login/index.scss"
import "./src/views/events/styles.scss"
import "./src/views/book/styles.scss"
export { default as wrapRootElement } from './src/ReduxWrapper';
