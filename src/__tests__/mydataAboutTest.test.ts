import { describe, it, expect } from 'vitest';
import { SimulatorBackend } from '../core/backend/hadoopBackend';

describe('Home Directory about.txt and Dot Empty Directory Test', () => {
  it('should list about.txt inside home directory and show content with cat', () => {
    const backend = new SimulatorBackend();
    const lsHome = backend.executeCLI('ls');
    expect(lsHome).toContain('about.txt');

    const catAbout = backend.executeCLI('cat about.txt');
    expect(catAbout).toContain('BROWSER-BASED HADOOP SIMULATOR');
  });

  it('should return dot . for empty Linux directories', () => {
    const backend = new SimulatorBackend();
    backend.executeCLI('mkdir emptydir');
    backend.executeCLI('cd emptydir');

    const emptyLs = backend.executeCLI('ls');
    expect(emptyLs).toBe('.');
  });
});
