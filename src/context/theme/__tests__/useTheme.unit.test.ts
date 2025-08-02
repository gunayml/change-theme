import { renderHook } from '@testing-library/react'; 
import { useTheme } from '../useTheme';

describe('useTheme', () => {
  it('throws if used outside of ThemeProvider', () => {
    expect(() => renderHook(() => useTheme())).toThrow(
      'useTheme must be used within a ThemeProvider'
    );
  });
});