app.post('/insertManyTableStudents', async (req, res) => {
    const {education, group} = req.body;

    const browser = await puppeteer.launch({ headless: true });
    const page = await browser.newPage();
    const url = 'https://portal.novsu.ru/search/groups/i.2500/?page=search&grpname=' + group;
    await page.goto(url, { timeout: 60000 });

    let arrTable = await page.evaluate((group, education) => {
        const number_group = group;
        const form_educ = education;

        let block = document.querySelector('#npe_instance_2500_npe_content');
        let ul = Array.from(block.getElementsByTagName('ul'));
        let resultSelectItem = []
        let countGroup = 0;
        for (let i = 0; i < ul.length; i++) {
            let form_education = ul[i].getElementsByTagName('li')[5].innerText.split(':')[1].trim();
            let name_profile = ul[i].getElementsByTagName('li')[3].innerText.split(':')[1].trim();
            if (form_education === form_educ && (name_profile !== '' || name_profile !== 'для отчисленных')) {
                resultSelectItem.push(ul[i].getElementsByTagName('li')[0].innerText.split(':')[1].trim());
                resultSelectItem.push(ul[i].getElementsByTagName('li')[3].innerText.split(':')[1].trim());
                resultSelectItem.push(form_education);
                break;
            }
            countGroup++;
        }

        if (countGroup === ul.length){
            return 'Данных нет';
        }
        else{
            let studentsMas = [];

            let table = Array.from(document.querySelectorAll('.viewtable'));
            for (let i = 0; i < 2; i++) {
                let form_education = ul[i].getElementsByTagName('li')[5].innerText.split(':')[1].trim();

                if (form_education === form_educ) {
                    let text = Array.from(table[i].getElementsByTagName('a'), el => el.innerText);
                    let numbers = Array.from(table[i].getElementsByTagName('a'), el => el.getAttribute('href').match(/\d/g).join(''));
                    const multipliedArray = numbers.map((element, index) => {
                        return element + " " + text[index];
                    });

                    for (let i = 0; i < multipliedArray.length; i++) {
                        let words = multipliedArray[i].split(' ');

                        let student = [];
                        student.push(words[1]);
                        student.push(words[2]);
                        student.push(words[3]);
                        student.push('s' + words[0]);
                        student.push(words[0]);
                        student.push(form_educ);
                        student.push(number_group);
                        student.push(resultSelectItem[1]);
                        student.push(resultSelectItem[0]);
                        studentsMas.push(student);
                    }
                    break;
                }
            }
            if(studentsMas.length === 0)
                return 'Данных нет';
            else
                return studentsMas;
        }
    }, group, education);
    await browser.close();

    let mas = arrTable;

    if(mas === 'Данных нет'){
        res.json({ message: 'Данных нет' });
    }
    else{
        const promises = mas.map(async (student) => {
            const sql = 'INSERT INTO students (first_name, last_name, second_name, login, password, form_education, id_group, id_profile, year_admission)' +
                ' SELECT ?, ?, ?, ?, ?, ?,' +
                ' (SELECT id_group FROM groups WHERE number_group = ?),' +
                ' (SELECT id_profile FROM profile WHERE name_profile = ?), ?' +
                ' FROM dual' +
                ' WHERE NOT EXISTS (' +
                ' SELECT 1' +
                ' FROM students' +
                ' WHERE login = ?' +
                ')';
            const values = [student[0], student[1], student[2], student[3], hashPassword(student[4]), student[5], student[6], student[7], parseInt(student[8]), student[3]];

            return new Promise((resolve, reject) => {
                connection.query(sql, values, function (err, results) {
                    if (err) {
                        console.error('Ошибка при выполнении запроса:', err);
                        reject(err);
                    } else {
                        console.log('Данные успешно добавлены');
                        resolve();
                    }
                });
            });
        });

        Promise.all(promises)
            .then(() => {
                res.json({ message: 'Данные успешно добавлены' });
            })
            .catch((error) => {
                res.status(500).json({ error: 'Произошла ошибка при добавлении данных' });
            });
    }
});



// const puppeteer = require('puppeteer');
//
// const url = 'https://portal.novsu.ru/search/groups/i.2500/?page=search&grpname=0092';
//
//
// async function parser(url) {
//     const browser = await puppeteer.launch({
//         headless: true, // false: enables one to view the Chrome instance in action
//         defaultViewport: null, // (optional) useful only in non-headless mode
//     });
//
//     const page = await browser.newPage();
//     await page.goto(url, { waitUntil: 'networkidle2' });
//     await page.screenshot({ path: 'example.png' })
//     const subs =await  page.$eval('table[class=viewtable]',(el)=> el.innerText);
//     console.log(subs);
//
//
// parser(url);


