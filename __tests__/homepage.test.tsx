import { render } from '@testing-library/react';
import Home from 'src/pages';

describe('Homepage', () => {
    it('should render', () => {
        render(<Home />);
    });
});
