import type { WrapperProps } from '@docusaurus/types';
import LayoutProviderInit from '@theme-init/Layout/Provider';
import { LayoutProviderDecorator as EditorDecorator } from '@theme/docupotamus-editor'; // TODO(dnguyen0304): Fix missing type declaration.
import { LayoutProviderDecorator as ReadTimeDecorator } from '@theme/docupotamus-read-time-plugin'; // TODO(dnguyen0304): Fix missing type declaration.
import type LayoutProviderType from '@theme/Layout/Provider';
import * as React from 'react';

type Props = Readonly<WrapperProps<typeof LayoutProviderType>>;

export default function LayoutProviderWrapper(props: Props): JSX.Element {
    return (
        <EditorDecorator subChildren={props.children}>
            <ReadTimeDecorator>
                <LayoutProviderInit {...props} />
            </ReadTimeDecorator>
        </EditorDecorator>
    );
};
