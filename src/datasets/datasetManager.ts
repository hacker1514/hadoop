export interface BuiltInDataset {
  id: string;
  name: string;
  category: 'TEXT' | 'CSV' | 'LOGS' | 'JSON';
  sizeFormatted: string;
  content: string;
}

export class DatasetManager {
  private datasets: BuiltInDataset[] = [
    {
      id: 'wordcount_sample',
      name: 'WordCount Classic',
      category: 'TEXT',
      sizeFormatted: '48 B',
      content: 'hello hadoop\nhello world\nhadoop world\n'
    },
    {
      id: 'sales_sample',
      name: 'Sales Transactions CSV',
      category: 'CSV',
      sizeFormatted: '128 B',
      content: 'North,Laptop,1200\nSouth,Phone,800\nNorth,Monitor,300\nEast,Laptop,1500\nWest,Tablet,400\n'
    },
    {
      id: 'web_logs',
      name: 'Apache Web Server Access Logs',
      category: 'LOGS',
      sizeFormatted: '256 B',
      content: '192.168.1.10 - - [25/Aug/2026:10:00:01] "GET /index.html HTTP/1.1" 200 4520\n192.168.1.12 - - [25/Aug/2026:10:00:03] "POST /login HTTP/1.1" 401 120\n192.168.1.15 - - [25/Aug/2026:10:00:05] "GET /api/data HTTP/1.1" 500 0\n'
    }
  ];

  public getDatasets(): BuiltInDataset[] {
    return this.datasets;
  }

  public generateSyntheticText(sizeTargetKb: number): string {
    const sampleWords = ['hadoop', 'hdfs', 'yarn', 'mapreduce', 'cluster', 'namenode', 'datanode', 'shuffle', 'partition', 'replica'];
    let result = '';
    const targetBytes = sizeTargetKb * 1024;
    while (result.length < targetBytes) {
      const lineLength = Math.floor(Math.random() * 8) + 3;
      const lineWords = [];
      for (let i = 0; i < lineLength; i++) {
        lineWords.push(sampleWords[Math.floor(Math.random() * sampleWords.length)]);
      }
      result += lineWords.join(' ') + '\n';
    }
    return result.slice(0, targetBytes);
  }
}
