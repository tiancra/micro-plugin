// install-deps.mjs  
import { exec } from 'node:child_process';  
  
// 定义要安装的npm包列表  
const packages = {
    "@commitlint/config-conventional": "^19.1.0",
    "@rollup/plugin-alias": "^5.1.0",
    "@rollup/plugin-terser": "^0.4.4",
    "@rollup/plugin-typescript": "^11.1.6",
    "@types/koa-router": "^7.4.8",
    "husky": "^9.1.5",
    "icqq": "^0.6.10",
    "rollup": "^4.18.1",
    "ts-node": "^10.9.2",
    "typescript": "^5.4.5",
    "yunzaijs": "^1.0.0-rc.5"
}  

// 将包列表转换为npm install命令的字符串  
const installCommand = `yarn add ${Object.keys(packages).map((key)=>`${key}@${packages[key]}`).join(' ')} -D -W`;  
  
// 执行npm install命令  
console.error(`[Micro]开始安装开发依赖，请稍等...`);  
exec(installCommand, (error, stdout, stderr) => {  
    if (stdout) {
        console.log(stdout)
    }
    
    if (error) {  
        console.error(`[Micro]依赖安装出错: ${error}`);  
        return;  
    }  
    
    if (stderr) {  
        console.error(`[Micro]stderr: ${stderr}`);  
        return;  
    }  
    console.log(`开发依赖安装成功！\n${stdout}`);  
});