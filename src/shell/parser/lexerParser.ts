export interface ParsedCommand {
  raw: string;
  utility: 'hdfs' | 'hadoop' | 'yarn' | 'script' | 'linux' | 'help' | 'clear' | 'comment' | 'unknown';
  subcommand?: string;
  action?: string;
  flags: Set<string>;
  positionalArgs: string[];
}

export function parseHadoopCommand(input: string): ParsedCommand {
  let cleanInput = input;
  const hashIdx = cleanInput.indexOf('#');
  if (hashIdx !== -1) {
    cleanInput = cleanInput.substring(0, hashIdx);
  }

  const trimmed = cleanInput.trim();
  if (!trimmed || input.trim().startsWith('#')) {
    return { raw: input, utility: 'comment', flags: new Set(), positionalArgs: [] };
  }

  const tokens = trimmed.split(/\s+/).filter(Boolean);
  const utilityStr = tokens[0].toLowerCase();

  if (utilityStr === 'clear') {
    return { raw: input, utility: 'clear', flags: new Set(), positionalArgs: [] };
  }

  if (utilityStr === 'help') {
    return { raw: input, utility: 'help', flags: new Set(), positionalArgs: tokens.slice(1) };
  }

  
  if (['start-dfs.sh', 'start-dfs', 'stop-dfs.sh', 'stop-dfs', 'start-yarn.sh', 'start-yarn', 'stop-yarn.sh', 'stop-yarn', 'start-all.sh', 'start-all', 'stop-all.sh', 'stop-all'].includes(utilityStr)) {
    return { raw: input, utility: 'script', action: utilityStr, flags: new Set(), positionalArgs: tokens.slice(1) };
  }

  
  if (['ls', 'pwd', 'cd', 'mkdir', 'echo', 'cat', 'rm', 'touch', 'whoami', 'grep', 'wc', 'head', 'tail', 'history', 'top', 'df', 'free', 'uname', 'ifconfig', 'ip', 'ping', 'netstat', 'ps', 'jps', 'kill', 'killall', 'sort', 'uniq', 'node', 'python', 'python3', 'cp', 'mv', 'hive', 'pig', 'download', 'get', 'spark', 'pyspark', 'spark-shell', 'spark-submit', 'about'].includes(utilityStr)) {
    return { raw: input, utility: 'linux', action: utilityStr, flags: new Set(), positionalArgs: tokens.slice(1) };
  }

  if (utilityStr !== 'hdfs' && utilityStr !== 'hadoop' && utilityStr !== 'yarn') {
    return { raw: input, utility: 'unknown', flags: new Set(), positionalArgs: tokens };
  }

  const utility = utilityStr as 'hdfs' | 'hadoop' | 'yarn';
  let subcommand: string | undefined;
  let action: string | undefined;
  const flags = new Set<string>();
  const positionalArgs: string[] = [];

  let idx = 1;
  if (idx < tokens.length && !tokens[idx].startsWith('-')) {
    subcommand = tokens[idx];
    idx++;
  }

  while (idx < tokens.length) {
    const token = tokens[idx];
    if (token.startsWith('-')) {
      if (!action && (subcommand === 'namenode' || subcommand === 'dfs' || subcommand === 'dfsadmin' || subcommand === 'rmadmin' || subcommand === 'application' || subcommand === 'logs' || subcommand === 'haadmin' || subcommand === 'storagepolicies' || subcommand === 'ec' || subcommand === 'cacheadmin' || subcommand === 'balancer' || subcommand === 'diskbalancer' || subcommand === 'queue' || subcommand === 'crypto' || subcommand === 'node')) {
        action = token;
      } else {
        flags.add(token);
      }
    } else {
      positionalArgs.push(token);
    }
    idx++;
  }

  return { raw: input, utility, subcommand, action, flags, positionalArgs };
}
