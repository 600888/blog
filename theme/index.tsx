import './index.css';
import { Layout as OriginalLayout, type LayoutProps } from '@rspress/core/theme-original';
import { GiscusComments } from './GiscusComments';

export * from '@rspress/core/theme-original';

export function Layout(props: LayoutProps) {
  return (
    <OriginalLayout
      {...props}
      afterDocContent={
        <>
          {props.afterDocContent}
          <GiscusComments />
        </>
      }
    />
  );
}
