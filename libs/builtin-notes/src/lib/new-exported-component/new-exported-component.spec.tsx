import { render } from '@testing-library/react';

import NewExportedComponent from './new-exported-component';

describe('NewExportedComponent', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<NewExportedComponent />);
    expect(baseElement).toBeTruthy();
  });
});
