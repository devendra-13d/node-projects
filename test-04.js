/**
 * Clusters
 * Node js is single threded, but with clusters we can use multiple CPU cores
 */
import cluster from "cluster";
import http from "http";
import os from "os";

if (cluster.isMaster) {
    const numCPUs = os.cpus().length;
    const hostname = os.hostname();
    const version = os.version();
    const userInfo = os.userInfo();
    console.log(`Master process: ${numCPUs}`);
    console.log(`Host name:${hostname}`);
    console.log(`version: ${version}`);
    console.log(`User Name:${userInfo.username}`);

    for (let i = 0; i <= numCPUs; i++){
        cluster.fork();
    };
    cluster.on("exit", (worker) => {
        console.log(`Worker ${process.pid} died`);
    })
} else {
    http.createServer((req, res) => {
        let sum=0;
        for (let i = 0; i <= 1e8; i++){
            sum += i;
        }
        console.log(`Sum:${sum}`)
        res.writeHead(200);
        res.end(`Handled by worker: ${process.pid}`);
    }).listen(3000);
    console.log(`Worker ${process.pid} started`)
}
