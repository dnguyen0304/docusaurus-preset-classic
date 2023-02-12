import type { WrapperProps } from '@docusaurus/types';
import DocBreadcrumbsInit from '@theme-init/DocBreadcrumbs';
import type DocBreadcrumbsType from '@theme/DocBreadcrumbs';
import { DocBreadcrumbsDecorator as EditorDecorator } from '@theme/docupotamus-editor'; // TODO(dnguyen0304): Fix missing type declaration.
import * as React from 'react';

type Props = Readonly<WrapperProps<typeof DocBreadcrumbsType>>;

export default function DocBreadcrumbsWrapper(props: Props): JSX.Element {
    return (
        <EditorDecorator>
            <DocBreadcrumbsInit {...props} />
        </EditorDecorator>
    );
};

