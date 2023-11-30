
import { log } from 'rabbi';

interface SystemInfo {
  ip: string;
  cpu: any;
  mem: any;
  fs: any;
  docker: any;
  network: any;
}

const systemInfos = {

}

export async function handleSystemInfo(systeminfo: SystemInfo) {

  log.info('systeminfo', systeminfo);

  systemInfos[systeminfo.ip] = systeminfo;

}

export async function getSystemInfo(ip) {

  return systemInfos[ip];

}

export async function listSystemInfos() {

  return Object.values(systemInfos);

}

export { systemInfos }

