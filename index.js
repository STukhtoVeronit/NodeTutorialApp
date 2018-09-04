const waitTimeout = 10000;
const waitInterval = 100;
let  currentTime = 0;
let precent = 0;


function print(precent) {
  process.stdout.clearLine();
  process.stdout.cursorTo(0);
  process.stdout.write(`Загрузка...${precent}%`);
}

setInterval(() => {
  currentTime += waitInterval;
  precent = Math.floor(currentTime/waitTimeout * 100)
  print(precent);
}, waitInterval);

setTimeout(() => {
  process.stdout.write("\n Done!");
  process.exit()
}, waitTimeout);