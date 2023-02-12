import type { WrapperProps } from '@docusaurus/types';
import ContentInit from '@theme-init/DocItem/Content';
import type ContentType from '@theme/DocItem/Content';
import { DocItemContentDecorator as CommandMenuDecorator } from '@theme/docupotamus-command-menu'; // TODO(dnguyen0304): Fix missing type declaration.
import * as React from 'react';

type Props = Readonly<WrapperProps<typeof ContentType>>;

export default function ContentWrapper(props: Props): JSX.Element {
    return (
        <CommandMenuDecorator>
            <ContentInit {...props} />
        </CommandMenuDecorator>
    );
};
