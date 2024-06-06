import { render } from '@testing-library/react';

import NewComponent from './new-component';

describe('NewComponent', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<NewComponent />);
    expect(baseElement).toBeTruthy();
  });
});
