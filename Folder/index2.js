/* const dnsRecords = [
  { address: "amazon.com", dns: "205.251.242.103" },
  { address: "apple.com", dns: "17.253.144.10" },
  { address: "bbc.com", dns: "151.101.64.81" },
  { address: "chat.openai.com", dns: "104.18.12.123" },
  { address: "cnn.com", dns: "151.101.1.67" },
  { address: "discord.com", dns: "162.159.137.232" },
  { address: "github.com", dns: "140.82.113.3" },
  { address: "google.com", dns: "142.250.72.14" },
  { address: "instagram.com", dns: "157.240.229.174" },
  { address: "microsoft.com", dns: "40.113.200.201" },
  { address: "netflix.com", dns: "52.41.250.12" },
  { address: "nasa.gov", dns: "198.49.245.141" },
  { address: "nytimes.com", dns: "151.101.1.164" },
  { address: "reddit.com", dns: "151.101.1.140" },
  { address: "roblox.com", dns: "128.116.114.3" },
  { address: "stanford.edu", dns: "171.67.215.200" },
  { address: "youtube.com", dns: "142.250.190.46" },
];


function findDNS(list) {
  let low = 0;
  let high = list.length - 1;
  while (low <= high) {
    let mid = Math.floor((low + high) / 2);
    let midAddress = records[mid].address;


    if(midAddress === target) {
      return records[mid].dns;
    } else if (midAddress > target) {
      high = mid - 1;
    } else {
      low = mid +1;
    }

  }
}
console.log(findDNS(dnsRecords, "google.com"));
findDNS(); */ 

//vite 
//node js version 20
//node +vite = outside package
//asthetic website, use gsap

/* let x;
let totalQuarter = 48; 
let times = 0
 function gamble(totalQuarter, firstMachine, secondMachine, thirdMachine) {
  
  if (x < 35) {
    (totalQuarter --)
    (times++)
  }   else if (x = 35) {
    (totalQuarter += 29)
    (times++)
  }
}

  if (x < 100) {
    (totalQuarter --)
    (times++)
  } else if (x = 100) (
    (totalQuarter += 59)
    (times++)
  )

  if (x < 10) {
    (totalQuarter --)
    (times++)
  } else if (x = 10) (
    (totalQuarter += 8)
    (times++)
  )

gamble(48, 3, 10, 4)



console.log("Martha plays " + times + " times before going broke.")
 return(times); */

let quarters = 48;
let plays = 0;
let machine1 = 3,
    machine2 = 10,
    machine3 = 4;
function gamble(quarters, machine1, machine2, machine3) {
  while (plays++) {
    quarters--, machine1++, machine2++, machine3++
  };
  while (machine1 = 35) {
   quarters + 30
  }
  while (machine2 = 100) {
    quarters + 60
  }
  while (machine3 = 10) {
    quarters +9
  }
}
gamble(48, 3, 10, 4);

return("Martha plays " + plays + " before going broke.")