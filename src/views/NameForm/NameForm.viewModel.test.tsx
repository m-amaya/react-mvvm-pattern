import { defaultRootContext, RootProvider } from '@src/Root.context';
import { renderHook } from '@testing-library/react';
import { FunctionComponent, ReactNode } from 'react';
import {
  NameFormViewModelInterface,
  useNameFormViewModel,
} from './NameForm.viewModel';

describe(useNameFormViewModel.name, () => {
  it('should return the correct view model', () => {
    const wrapper: FunctionComponent<{ children?: ReactNode }> = ({
      children,
    }) => <RootProvider value={defaultRootContext}>{children}</RootProvider>;

    const { result } = renderHook(() => useNameFormViewModel(), {
      wrapper,
    });

    expectTypeOf(result.current).toEqualTypeOf<NameFormViewModelInterface>();
  });
});
