import { HDFSNamespace } from '../../hdfs/namenode/namespace';

const COMMON_COMMANDS = [
  'hdfs dfs -ls',
  'hdfs dfs -mkdir -p',
  'hdfs dfs -put',
  'hdfs dfs -cat',
  'hdfs dfs -rm -r',
  'hdfs dfs -du',
  'hdfs dfs -df',
  'hdfs fsck /',
  'hdfs dfsadmin -report',
  'hdfs dfsadmin -safemode get',
  'hadoop jar wordcount.jar',
  'yarn application -list',
  'help',
  'clear'
];

export function getAutocompletions(input: string, namespace: HDFSNamespace): string[] {
  const trimmed = input.trimStart();
  if (!trimmed) return COMMON_COMMANDS;

  const matches = COMMON_COMMANDS.filter((cmd) => cmd.startsWith(trimmed));
  if (matches.length > 0) return matches;

  // Path autocompletion
  if (trimmed.includes(' /') || trimmed.endsWith(' /') || trimmed.includes(' ')) {
    const parts = trimmed.split(' ');
    const lastToken = parts[parts.length - 1];
    if (lastToken.startsWith('/')) {
      const parentPath = lastToken.substring(0, lastToken.lastIndexOf('/')) || '/';
      const prefix = lastToken.substring(lastToken.lastIndexOf('/') + 1);
      const parentNode = namespace.resolvePath(parentPath);
      if (parentNode && parentNode.type === 'DIRECTORY') {
        const pathMatches: string[] = [];
        parentNode.children.forEach((child) => {
          if (child.name.startsWith(prefix)) {
            const completedPath = (parentPath === '/' ? '' : parentPath) + '/' + child.name;
            const fullLine = parts.slice(0, -1).join(' ') + ' ' + completedPath;
            pathMatches.push(fullLine);
          }
        });
        return pathMatches;
      }
    }
  }

  return [];
}
