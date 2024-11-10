let timeout = 2000;
let saveEveryPage = 500;

let txs = [];
let pause = false;
async function start () {
    function delay(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }

    const nextPageButton = $('#results > div > div > div > div > ul').children[5]?.querySelector('button');
    const thead = $('#results > div > div > div > div > table > thead');
    const tbody = $('#results > div > div > div > div > table > tbody');
    let firstPage = true;
    let counter = 0;

    while ((nextPageButton && !nextPageButton?.disabled) || firstPage) {
        if (firstPage) firstPage = false;

        const tr = thead.children.item(0)

        const params = []
        for (const th of tr.children) {
            params.push(th.querySelector('button').innerHTML)
        }

        for (const tr of tbody.children) {
            const tx = {}
            for (const [index, td] of [...tr.children].entries()) {
                for (const key of td.children) {
                    if (key.querySelector('div') !== null) {
                        tx[params[index]] = key.querySelector('div').innerHTML;
                        continue;
                    }
                    if (key.querySelector('span') !== null) {
                        tx[params[index]] = key.querySelector('span').innerHTML;
                        continue;
                    }
                    tx[params[index]] = key.innerHTML;
                }
            }
            txs.push(tx);
        }
        nextPageButton?.click()
        counter++
        await delay(timeout)

        if (counter % saveEveryPage == 0) {
            const blob = new Blob([JSON.stringify(txs)], { type: 'text/plain' });
            const url = URL.createObjectURL(blob);
            window.open(url);
            URL.revokeObjectURL(url);
            txs = [];
        }
        if (pause) {
            break;
        }
    }

    const blob = new Blob([JSON.stringify(txs)], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    window.open(url);
    URL.revokeObjectURL(url);
    txs = [];
    console.log("finish");
}

