import { render } from '@testing-library/react';

import Notepack from './notepack';

describe('Notepack', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Notepack />);
    expect(baseElement).toBeTruthy();
  });
});
