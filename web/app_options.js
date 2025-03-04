/* Copyright 2018 Mozilla Foundation
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import { apiCompatibilityParams } from 'pdfjs-lib';
import { viewerCompatibilityParams } from './viewer_compatibility';

const OptionKind = {
  VIEWER: 0x02,
  API: 0x04,
  WORKER: 0x08,
  PREFERENCE: 0x80,
};

/**
 * PLEASE NOTE: To avoid introducing unnecessary dependencies, we specify the
 *              values below *explicitly* rather than relying on imported types.
 */
const defaultOptions = {
  cursorToolOnLoad: {
    /** @type {number} */
    value: 0,
    kind: OptionKind.VIEWER + OptionKind.PREFERENCE,
  },
  defaultUrl: {
    /** @type {string} */
    // value: 'document.pdf',
    value: 'https://www.p-y.xyz/document.pdf',
    // value: 'https://www.p-y.xyz/car.pdf',
    kind: OptionKind.VIEWER,
  },
  defaultZoomValue: {
    /** @type {string} */
    value: '',
    kind: OptionKind.VIEWER + OptionKind.PREFERENCE,
  },
  disableHistory: {
    /** @type {boolean} */
    value: false,
    kind: OptionKind.VIEWER,
  },
  disablePageLabels: {
    /** @type {boolean} */
    value: false,
    kind: OptionKind.VIEWER + OptionKind.PREFERENCE,
  },
  /**
   * The `disablePreferences` is, conditionally, defined below.
   */
  enablePrintAutoRotate: {
    /** @type {boolean} */
    value: false,
    kind: OptionKind.VIEWER + OptionKind.PREFERENCE,
  },
  enableWebGL: {
    /** @type {boolean} */
    value: false,
    kind: OptionKind.VIEWER + OptionKind.PREFERENCE,
  },
  eventBusDispatchToDOM: {
    /** @type {boolean} */
    value: false,
    kind: OptionKind.VIEWER + OptionKind.PREFERENCE,
  },
  externalLinkRel: {
    /** @type {string} */
    value: 'noopener noreferrer nofollow',
    kind: OptionKind.VIEWER,
  },
  externalLinkTarget: {
    /** @type {number} */
    value: 0,
    kind: OptionKind.VIEWER + OptionKind.PREFERENCE,
  },
  historyUpdateUrl: {
    /** @type {boolean} */
    value: false,
    kind: OptionKind.VIEWER + OptionKind.PREFERENCE,
  },
  imageResourcesPath: {
    /** @type {string} */
    value: './images/',
    kind: OptionKind.VIEWER,
  },
  /**
   * The `locale` is, conditionally, defined below.
   */
  maxCanvasPixels: {
    /** @type {number} */
    value: 16777216,
    compatibility: viewerCompatibilityParams.maxCanvasPixels,
    kind: OptionKind.VIEWER,
  },
  pdfBugEnabled: {
    /** @type {boolean} */
    value: false,
    kind: OptionKind.VIEWER + OptionKind.PREFERENCE,
  },
  /**
   * The `printResolution` is, conditionally, defined below.
   */
  renderer: {
    /** @type {string} */
    value: 'canvas',
    kind: OptionKind.VIEWER + OptionKind.PREFERENCE,
  },
  renderInteractiveForms: {
    /** @type {boolean} */
    value: false,
    kind: OptionKind.VIEWER + OptionKind.PREFERENCE,
  },
  sidebarViewOnLoad: {
    /** @type {number} */
    value: -1,
    kind: OptionKind.VIEWER + OptionKind.PREFERENCE,
  },
  scrollModeOnLoad: {
    /** @type {number} */
    value: -1,
    kind: OptionKind.VIEWER + OptionKind.PREFERENCE,
  },
  spreadModeOnLoad: {
    /** @type {number} */
    value: -1,
    kind: OptionKind.VIEWER + OptionKind.PREFERENCE,
  },
  textLayerMode: {
    /** @type {number} */
    value: 1,
    kind: OptionKind.VIEWER + OptionKind.PREFERENCE,
  },
  useOnlyCssZoom: {
    /** @type {boolean} */
    value: false,
    kind: OptionKind.VIEWER + OptionKind.PREFERENCE,
  },
  viewOnLoad: {
    /** @type {boolean} */
    value: 0,
    kind: OptionKind.VIEWER + OptionKind.PREFERENCE,
  },

  cMapPacked: {
    /** @type {boolean} */
    value: true,
    kind: OptionKind.API,
  },
  cMapUrl: {
    /** @type {string} */
    value: (typeof PDFJSDev === 'undefined' || !PDFJSDev.test('PRODUCTION') ?
            '../external/bcmaps/' : '../web/cmaps/'),
    kind: OptionKind.API,
  },
  disableAutoFetch: {
    /** @type {boolean} */
    value: false,
    kind: OptionKind.API + OptionKind.PREFERENCE,
  },
  disableCreateObjectURL: {
    /** @type {boolean} */
    value: false,
    compatibility: apiCompatibilityParams.disableCreateObjectURL,
    kind: OptionKind.API,
  },
  disableFontFace: {
    /** @type {boolean} */
    value: false,
    kind: OptionKind.API + OptionKind.PREFERENCE,
  },
  disableRange: {
    /** @type {boolean} */
    value: false,
    kind: OptionKind.API + OptionKind.PREFERENCE,
  },
  disableStream: {
    /** @type {boolean} */
    value: false,
    kind: OptionKind.API + OptionKind.PREFERENCE,
  },
  docBaseUrl: {
    /** @type {string} */
    value: '',
    kind: OptionKind.API,
  },
  isEvalSupported: {
    /** @type {boolean} */
    value: true,
    kind: OptionKind.API,
  },
  maxImageSize: {
    /** @type {number} */
    value: -1,
    kind: OptionKind.API,
  },
  pdfBug: {
    /** @type {boolean} */
    value: false,
    kind: OptionKind.API,
  },
  postMessageTransfers: {
    /** @type {boolean} */
    value: true,
    kind: OptionKind.API,
  },
  verbosity: {
    /** @type {number} */
    value: 1,
    kind: OptionKind.API,
  },

  workerPort: {
    /** @type {Object} */
    value: null,
    kind: OptionKind.WORKER,
  },
  workerSrc: {
    /** @type {string} */
    value: (typeof PDFJSDev === 'undefined' || !PDFJSDev.test('PRODUCTION') ?
            '../src/worker_loader.js' : '../build/pdf.worker.js'),
    kind: OptionKind.WORKER,
  },
};
if (typeof PDFJSDev === 'undefined' ||
    PDFJSDev.test('!PRODUCTION || (GENERIC && !LIB)')) {
  defaultOptions.disablePreferences = {
    /** @type {boolean} */
    value: false,
    kind: OptionKind.VIEWER,
  };
  defaultOptions.locale = {
    /** @type {string} */
    // value: (typeof navigator !== 'undefined' ? navigator.language : 'en-US'),
    value: (typeof navigator !== 'undefined' ? 'zh-CN' : 'zh-CN'),
    kind: OptionKind.VIEWER,
  };
  defaultOptions.printResolution = {
    /** @type {number} */
    value: 150,
    kind: OptionKind.VIEWER,
  };
}

const userOptions = Object.create(null);

class AppOptions {
  constructor() {
    throw new Error('Cannot initialize AppOptions.');
  }

  static get(name) {
    const userOption = userOptions[name];
    if (userOption !== undefined) {
      return userOption;
    }
    const defaultOption = defaultOptions[name];
    if (defaultOption !== undefined) {
      return (defaultOption.compatibility || defaultOption.value);
    }
    return undefined;
  }

  static getAll(kind = null) {
    const options = Object.create(null);
    for (const name in defaultOptions) {
      const defaultOption = defaultOptions[name];
      if (kind) {
        if ((kind & defaultOption.kind) === 0) {
          continue;
        }
        if (kind === OptionKind.PREFERENCE) {
          const value = defaultOption.value, valueType = typeof value;

          if (valueType === 'boolean' || valueType === 'string' ||
              (valueType === 'number' && Number.isInteger(value))) {
            options[name] = value;
            continue;
          }
          throw new Error(`Invalid type for preference: ${name}`);
        }
      }
      const userOption = userOptions[name];
      options[name] = (userOption !== undefined ? userOption :
                       (defaultOption.compatibility || defaultOption.value));
    }
    return options;
  }

  static set(name, value) {
    userOptions[name] = value;
  }

  static remove(name) {
    delete userOptions[name];
  }
}

export {
  AppOptions,
  OptionKind,
};
