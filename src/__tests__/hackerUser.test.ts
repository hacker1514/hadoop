import { describe, it, expect } from 'vitest';
import { SimulatorBackend } from '../core/backend/hadoopBackend';

describe('Linux User Hacker Test', () => {
  it('should return Hacker for whoami and /home/Hacker for pwd', () => {
    const backend = new SimulatorBackend();
    expect(backend.executeCLI('whoami')).toBe('Hacker');
    expect(backend.executeCLI('pwd')).toBe('/home/Hacker');
  });
});
