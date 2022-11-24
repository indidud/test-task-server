import { exec } from 'child_process';

export async function runBashScript(
  path: string,
  arg1: string,
  arg2: string,
): Promise<string> {
  return new Promise((resolve, reject) => {
    exec(`sh ${path} ${arg1} ${arg2}`, (err, result) => {
      if (err) reject(err);
      resolve(result);
    });
  });
}
