import type { WrapperProps } from '@docusaurus/types';
import RootInit from '@theme-init/Root';
import { RootDecorator as CommandMenuDecorator } from '@theme/docupotamus-command-menu'; // TODO(dnguyen0304): Fix missing type declaration.
import { RootDecorator as EditorDecorator } from '@theme/docupotamus-editor'; // TODO(dnguyen0304): Fix missing type declaration.
import { RootDecorator as ReadTimeDecorator } from '@theme/docupotamus-read-time-plugin'; // TODO(dnguyen0304): Fix missing type declaration.
import type RootType from '@theme/Root';
import * as React from 'react';

type Props = Readonly<WrapperProps<typeof RootType>>;

export default function RootWrapper(props: Props): JSX.Element {
    return (
        <CommandMenuDecorator>
            <EditorDecorator>
                <ReadTimeDecorator>
                    <RootInit {...props} />
                </ReadTimeDecorator>
            </EditorDecorator>
        </CommandMenuDecorator>
    );
};
