import type { WrapperProps } from '@docusaurus/types';
import DesktopInit from '@theme-init/DocItem/TOC/Desktop';
import type DesktopType from '@theme/DocItem/TOC/Desktop';
import { DocItemTOCDesktopDecorator as EditorDecorator } from '@theme/docupotamus-editor'; // TODO(dnguyen0304): Fix missing type declaration.
import * as React from 'react';

type Props = Readonly<WrapperProps<typeof DesktopType>>;

export default function DesktopWrapper(props: Props): JSX.Element {
    return (
        <EditorDecorator>
            <DesktopInit {...props} />
        </EditorDecorator>
    );
};
