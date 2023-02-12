import type { WrapperProps } from '@docusaurus/types';
import DocPageInit from '@theme-init/DocPage';
import type DocPageType from '@theme/DocPage';
import { DocPageDecorator as EditorDecorator } from '@theme/docupotamus-editor'; // TODO(dnguyen0304): Fix missing type declaration.
import * as React from 'react';

type Props = Readonly<WrapperProps<typeof DocPageType>>;

export default function DocPageWrapper(props: Props): JSX.Element {
    // TODO(dnguyen0304): Fix missing type declaration.
    const { rawContent } = props;

    return (
        <EditorDecorator rawContent={rawContent}>
            <DocPageInit {...props} />
        </EditorDecorator>
    );
};
