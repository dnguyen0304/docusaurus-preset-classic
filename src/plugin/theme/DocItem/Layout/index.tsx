import type { WrapperProps } from '@docusaurus/types';
import LayoutInit from '@theme-init/DocItem/Layout';
import type LayoutType from '@theme/DocItem/Layout';
import { DocItemLayoutDecorator as EditorDecorator } from '@theme/docupotamus-editor'; // TODO(dnguyen0304): Fix missing type declaration.
import * as React from 'react';

type Props = Readonly<WrapperProps<typeof LayoutType>>;

export default function LayoutWrapper(props: Props): JSX.Element {
    return (
        <EditorDecorator>
            <LayoutInit {...props} />
        </EditorDecorator>
    );
};
