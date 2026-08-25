import { describe, it, expect } from 'vitest';
import { parseHadoopCommand } from '../shell/parser/lexerParser';

describe('Hadoop CLI Lexer & Parser', () => {
  it('should parse hdfs dfs -mkdir -p /data/input', () => {
    const parsed = parseHadoopCommand('hdfs dfs -mkdir -p /data/input');
    expect(parsed.utility).toBe('hdfs');
    expect(parsed.subcommand).toBe('dfs');
    expect(parsed.action).toBe('-mkdir');
    expect(parsed.flags.has('-p')).toBe(true);
    expect(parsed.positionalArgs).toEqual(['/data/input']);
  });

  it('should parse hdfs fsck /', () => {
    const parsed = parseHadoopCommand('hdfs fsck /');
    expect(parsed.utility).toBe('hdfs');
    expect(parsed.subcommand).toBe('fsck');
    expect(parsed.positionalArgs).toEqual(['/']);
  });

  it('should parse hadoop jar wordcount.jar /in /out', () => {
    const parsed = parseHadoopCommand('hadoop jar wordcount.jar /in /out');
    expect(parsed.utility).toBe('hadoop');
    expect(parsed.subcommand).toBe('jar');
    expect(parsed.positionalArgs).toEqual(['wordcount.jar', '/in', '/out']);
  });
});
