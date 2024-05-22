const puppeteer = require('puppeteer')

async function start(){
    const browser = await puppeteer.launch({executablePath: '/usr/bin/chromium-browser', headless: true,  timeout: 0})
    const page = await browser.newPage()
    // const url = 'https://portal.novsu.ru/search/groups/i.2500/?page=search&grpname=0091' ;
    await page.goto('https://portal.novsu.ru/search/groups/i.2500/?page=search&grpname=0091')
await page.screenshot({path:'list.png'})
await browser.close()
}
start();
//
// let arrTable = await page.evaluate((group, education) => {
//     const number_group = group;
//     const form_educ = education;
//
//     let block = document.querySelector('#npe_instance_2500_npe_content');
//     let ul = Array.from(block.getElementsByTagName('ul'));
//     let resultSelectItem = []
//     let countGroup = 0;
//     for (let i = 0; i < ul.length; i++) {
//         let form_education = ul[i].getElementsByTagName('li')[5].innerText.split(':')[1].trim();
//         let name_profile = ul[i].getElementsByTagName('li')[3].innerText.split(':')[1].trim();
//         if (form_education === form_educ && (name_profile !== '' || name_profile !== 'для отчисленных')) {
//             resultSelectItem.push(ul[i].getElementsByTagName('li')[0].innerText.split(':')[1].trim());
//             resultSelectItem.push(ul[i].getElementsByTagName('li')[3].innerText.split(':')[1].trim());
//             resultSelectItem.push(form_education);
//             break;
//         }
//         countGroup++;
//     }
// }
// )

