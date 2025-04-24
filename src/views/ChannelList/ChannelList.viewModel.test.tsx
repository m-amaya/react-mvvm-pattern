import { renderHook } from '@testing-library/react';
import { FC, ReactNode } from 'react';
import { defaultRootContext, RootProvider } from '../../Root.context';
import {
  ChannelListViewModelInterface,
  useChannelListViewModel,
} from './ChannelList.viewModel';

describe(useChannelListViewModel.name, () => {
  it('should return the correct view model', () => {
    const wrapper: FC<{ children?: ReactNode }> = ({ children }) => (
      <RootProvider value={defaultRootContext}>{children}</RootProvider>
    );

    const { result } = renderHook(() => useChannelListViewModel(), {
      wrapper,
    });

    expectTypeOf(result.current).toEqualTypeOf<ChannelListViewModelInterface>();
  });
});
