import * as cssHelper from "./libs/css-helper";
import cssList from './assets/data/css-list.json';
cssList.forEach((css: cssHelper.CSSobj) => cssHelper.injectCSS(css));

import './index.scss';
import "vue-toastification/dist/index.css";