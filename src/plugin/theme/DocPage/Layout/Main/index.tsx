import type { WrapperProps } from '@docusaurus/types';
import DocPageLayoutMainInit from '@theme-init/DocPage/Layout/Main';
import type DocPageLayoutMainType from '@theme/DocPage/Layout/Main';
import { DocPageLayoutMainDecorator as ReadTimeDecorator } from '@theme/docupotamus-read-time-plugin'; // TODO(dnguyen0304): Fix missing type declaration.
import * as React from 'react';

type Props = Readonly<WrapperProps<typeof DocPageLayoutMainType>>;

export default function DocPageLayoutMainWrapper(props: Props): JSX.Element {
    return (
        <ReadTimeDecorator>
            <DocPageLayoutMainInit {...props} />
        </ReadTimeDecorator>
    );
};
