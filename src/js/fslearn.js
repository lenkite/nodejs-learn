import fs from 'fs';
import {spawn} from 'child_process';
import {argv} from 'yargs';


export function watchFile0() {
  const watchFile = argv.watch0;
  console.log("Watch0 argument: ",watchFile);

  if (!watchFile || !fs.existsSync(watchFile)) {
    throw Error("A file to watch must be specified with --watch0 and existing!");
  }


  function watchTarget() {
    console.log("WATCHING file: ", watchFile);
    fs.watch(watchFile, ()=> {
      console.log("File " + watchFile + " just changed");
      let ls = spawn('ls', ['-lh', watchFile]);
      ls.stdout.pipe(process.stdout)
    });
  }

  watchTarget();
}
