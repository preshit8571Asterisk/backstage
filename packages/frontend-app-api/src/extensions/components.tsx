/*
 * Copyright 2023 The Backstage Authors
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

import {
  createComponentExtension,
  coreProgressComponentRef,
  coreBootErrorPageComponentRef,
  coreNotFoundErrorPageComponentRef,
  coreErrorBoundaryFallbackComponentRef,
} from '@backstage/frontend-plugin-api';
// eslint-disable-next-line @backstage/no-relative-monorepo-imports
import { components as defaultComponents } from '../../../app-defaults/src/defaults';
// eslint-disable-next-line @backstage/no-relative-monorepo-imports

export const DefaultProgressComponent = createComponentExtension({
  ref: coreProgressComponentRef,
  component: async () => defaultComponents.Progress,
});

export const DefaultBootErrorPageComponent = createComponentExtension({
  ref: coreBootErrorPageComponentRef,
  component: async () => defaultComponents.BootErrorPage,
});

export const DefaultNotFoundErrorPageComponent = createComponentExtension({
  ref: coreNotFoundErrorPageComponentRef,
  component: async () => defaultComponents.NotFoundErrorPage,
});

export const DefaultErrorBoundaryComponent = createComponentExtension({
  ref: coreErrorBoundaryFallbackComponentRef,
  component: async () => defaultComponents.ErrorBoundaryFallback,
});
