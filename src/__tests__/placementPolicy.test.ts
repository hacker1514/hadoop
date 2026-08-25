import { describe, it, expect } from 'vitest';
import { BlockPlacementPolicyDefault } from '../hdfs/namenode/placementPolicy';
import { VirtualNode } from '../core/domain/types';

describe('BlockPlacementPolicyDefault', () => {
  const policy = new BlockPlacementPolicyDefault();

  const mockNodes: VirtualNode[] = [
    { id: 'dn-01', hostname: 'dn01', rackId: '/rack-01', type: 'DATANODE', state: 'RUNNING', storageCapacityBytes: 1000, storageUsedBytes: 0, memoryCapacityMb: 4096, memoryUsedMb: 0, vCoresCapacity: 4, vCoresUsed: 0, lastHeartbeatTime: Date.now(), blocks: [], containers: [] },
    { id: 'dn-02', hostname: 'dn02', rackId: '/rack-01', type: 'DATANODE', state: 'RUNNING', storageCapacityBytes: 1000, storageUsedBytes: 0, memoryCapacityMb: 4096, memoryUsedMb: 0, vCoresCapacity: 4, vCoresUsed: 0, lastHeartbeatTime: Date.now(), blocks: [], containers: [] },
    { id: 'dn-03', hostname: 'dn03', rackId: '/rack-02', type: 'DATANODE', state: 'RUNNING', storageCapacityBytes: 1000, storageUsedBytes: 0, memoryCapacityMb: 4096, memoryUsedMb: 0, vCoresCapacity: 4, vCoresUsed: 0, lastHeartbeatTime: Date.now(), blocks: [], containers: [] },
    { id: 'dn-04', hostname: 'dn04', rackId: '/rack-02', type: 'DATANODE', state: 'RUNNING', storageCapacityBytes: 1000, storageUsedBytes: 0, memoryCapacityMb: 4096, memoryUsedMb: 0, vCoresCapacity: 4, vCoresUsed: 0, lastHeartbeatTime: Date.now(), blocks: [], containers: [] }
  ];

  it('should place 1st replica on local node and 2nd replica on remote rack', () => {
    const targets = policy.chooseTargets(mockNodes, 'dn-01', 3);
    expect(targets.length).toBe(3);
    expect(targets[0].id).toBe('dn-01'); // 1st replica local
    expect(targets[1].rackId).toBe('/rack-02'); // 2nd replica remote rack
  });
});
