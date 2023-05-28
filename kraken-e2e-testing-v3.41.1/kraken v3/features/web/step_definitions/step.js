const { Given, When, Then } = require('@cucumber/cucumber');
const { sleep } = require('@wdio/utils');
const https = require('https');


// Sign In & Sign Out Commands

When('I enter email ghost {kraken-string}', async function (email) {
    let element = await this.driver.$('#ember8');
    return await element.setValue(email);
});

When('I enter password ghost {kraken-string}', async function (password) {
    let element = await this.driver.$('#ember10');
    return await element.setValue(password);
});

When('I click sign in', async function () {
    let element = await this.driver.$('#ember12');
    return await element.click();
})

When('I enter sign out', async function () {
    let element = await this.driver.$('/html/body/div[1]/div/ul/li[9]/a');
    return await element.click();
});

// When('I scroll down by {number} pixels', async (pixels) => {
//     await browser.execute(`window.scrollBy(0, ${pixels})`);
// });

// Enter Post Routes

When('I enter post section', async function () {
    let element = await this.driver.$('/html/body/div[2]/div/nav[1]/section/div[1]/ul[2]/li[2]/a[1]');
    return await element.click();
});

When('I enter new post', async function () {
    let element = await this.driver.$('/html/body/div[2]/div/main/section/header/section/a/span');
    return await element.click();
});

When('I enter new post title', async function () {
    let element = await this.driver.$('/html/body/div[2]/div/main/section/div[1]/div[1]/textarea');
    return await element.click();
});

When('I enter new post body', async function () {
    let element = await this.driver.$('/html/body/div[2]/div/main/section/div[1]/div[1]/article/div[1]/div');
    return await element.click();
});

When('I select publish', async function () {
    let element = await this.driver.$('/html/body/div[2]/div/main/section/header/section/div/div[1]');
    return await element.click();
});

When('I select publish post button', async function () {
    let element = await this.driver.$('/html/body/div[2]/div/main/section/header/section/div/div[1]');
    return await element.click();
});

When('I confirm publish new post', async function () {
    let element = await this.driver.$('/html/body/div[1]/div/footer/button[2]');
    return await element.click();
});

When('I go back to post', async function () {
    let element = await this.driver.$('/html/body/div[2]/div/main/section/header/div/div[1]/a');
    return await element.click();
});

When('I select the first post', async function () {
    let element = await this.driver.$('/html/body/div[2]/div/main/section/section/ol/li[2]/a[2]');
    return await element.click();
});

When("I clear post title", async function () {
    let element = await this.driver.$('/html/body/div[2]/div/main/section/div[1]/div[1]/textarea');
    return await element.setValue("");
});

When("I clear post body", async function () {
    let element = await this.driver.$('/html/body/div[2]/div/main/section/div[1]/div[1]/article/div[1]/div/p');
    return await element.setValue("");
});

When('I update the first post', async function () {
    let element = await this.driver.$('/html/body/div[1]/div/footer/button[2]');
    return await element.click();
});

When('I click the settings post', async function () {
    let element = await this.driver.$('/html/body/div[2]/div/main/section/header/section/button');
    return await element.click();
});

When('I click the delete post button', async function () {
    let element = await this.driver.$('/html/body/div[4]/div[1]/div/div/div/div/div[1]/div/div[1]/div[2]/form/button/span');
    return await element.click();
});

When('I click the confirm delete post button', async function () {
    let element = await this.driver.$('/html/body/div[4]/div[2]/div/div/div/div[2]/section/div[2]/button[2]');
    return await element.click();
});

When('I click the modal pop-up', async function () {
    let element = await this.driver.$('/html/body/div[4]/div[2]/div/div/div/div[2]/section');
    return await element.click();
});

When('I click the more input options', async function () {
    let element = await this.driver.$('/html/body/div[2]/div/main/section/div[1]/div[1]/article/div[4]/button');
    return await element.click();
});

When('I click the first of the option , image option', async function () {
    let element = await this.driver.$('/html/body/div[2]/div/main/section/div[1]/div[1]/article/div[4]/button');
    return await element.click();
});

When('I click on the publish date option this date {string}', async function (string) {
    let element = await this.driver.$('/html/body/div[1]/div/div/section/div/div[2]/div[2]/div[2]/div[1]/div/div[1]/div/input');
    element.click();
    sleep(2)
    element.setValue('');
    // element.setValue(string);
    // element = await this.driver.$('/html/body/div[1]/div/div/section/div/div[2]/div[2]/div[2]/div[1]/div/div[2]/div/nav/button[2]');
    // element.click();
    // element = await this.driver.$('/html/body/div[1]/div/div/div/section/div[2]/div[2]/div[2]/div[1]/div/div[2]/div/nav/button[2]');
    // sleep(5)
    // element.setValue('');
    return await element.setValue(string);
});

When('I click on the publish date option', async function () {
    let element = await this.driver.$('/html/body/div[1]/div/div/section/div/div[2]/div[2]/div[2]/div[1]/div/div[1]/div');
    element.click();
    element = await this.driver.$('/html/body/div[1]/div/div/section/div/div[2]/div[2]/div[2]/div[1]/div/div[2]/div/nav/button[2]');
    element.click();
    element = await this.driver.$('/html/body/div[1]/div/div/section/div/div[2]/div[2]/div[2]/div[1]/div/div[2]/div/div/div[2]/div[2]/button[2]');
    element.click();
    return await element.click();
});

When('I click on the publish hour option', async function () {
    let element = await this.driver.$('/html/body/div[1]/div/div/section/div/div[2]/div[2]/div[2]/div[2]/input');
    return await element.setValue("");
});

When('I click on the schedule post option', async function () {
    let element = await this.driver.$('/html/body/div[1]/div/div/section/div/div[2]/div[1]');
    return await element.click();
});

When('I click on tag field section', async function () {
    let element = await this.driver.$('/html/body/div[4]/div/div/div/div/div/div/div/div[1]/div[2]/form/div[3]/div/div[1]');
    return await element.click();
});

When('I click on the first tah shown', async function () {
    let element = await this.driver.$('/html/body/div[4]/div/div/div/div/div/div/div/div[1]/div[2]/form/div[3]/div/div[2]/div/ul/li');
    return await element.click();
});


// Enter Tag Routes

When('I enter tag section', async function () {
    let element = await this.driver.$('/html/body/div[2]/div/nav[1]/section/div[1]/ul[2]/li[4]/a');
    return await element.click();
});

When('I enter new tag', async function () {
    let element = await this.driver.$('/html/body/div[2]/div/main/section/header/section/a/span');
    return await element.click();
});

When('I enter new tag name', async function () {
    let element = await this.driver.$('/html/body/div[2]/div/main/section/form/div/div[1]/div[1]/div[1]/div[1]/input');
    return await element.click();
});

When('I enter new tag slug', async function () {
    let element = await this.driver.$('/html/body/div[2]/div/main/section/form/div/div[1]/div[1]/div[2]/input');
    return await element.click();
});

When('I enter new tag description', async function () {
    let element = await this.driver.$('/html/body/div[2]/div/main/section/form/div/div[1]/div[1]/div[3]/textarea');
    return await element.click();
});

When('I select save', async function () {
    let element = await this.driver.$('/html/body/div[2]/div/main/section/form/header/section/button');
    return await element.click();
});

When('I go back to tag page', async function () {
    let element = await this.driver.$('/html/body/div[2]/div/main/section/form/header/h2/a');
    return await element.click();
});

When('I select the first tag', async function () {
    let element = await this.driver.$('/html/body/div[2]/div/main/section/section/ol/li[3]/a[1]');
    return await element.click();
});

When("I clear tag name", async function () {
    let element = await this.driver.$('/html/body/div[2]/div/main/section/form/div/div[1]/div[1]/div[1]/div[1]/input');
    return await element.setValue("");
});

When("I clear tag description", async function () {
    let element = await this.driver.$('/html/body/div[2]/div/main/section/form/div/div[1]/div[1]/div[3]/textarea');
    return await element.setValue("");
});

When('I click the delete tag button', async function () {
    let element = await this.driver.$('/html/body/div[2]/div/main/section/button');
    return await element.click();
});

When('I click the confirm delete tag button', async function () {
    let element = await this.driver.$('/html/body/div[4]/div/div/div/div/div[2]/section/div[2]/button[2]');
    return await element.click();
});

When('I click the modal pop-up', async function () {
    let element = await this.driver.$('/html/body/div[4]/div[2]/div/div/div/div[2]/section');
    return await element.click();
});


// Enter Page Routes

When('I enter page section', async function () {
    let element = await this.driver.$('/html/body/div[2]/div/nav[1]/section/div[1]/ul[2]/li[3]/a');
    return await element.click();
});

When('I enter new page', async function () {
    let element = await this.driver.$('/html/body/div[2]/div/main/section/header/section/a');
    return await element.click();
});

When('I enter new page title', async function () {
    let element = await this.driver.$('/html/body/div[2]/div/main/section/div[1]/div[1]/textarea');
    return await element.click();
});

When('I enter first page content', async function () {
    let element = await this.driver.$('/html/body/div[2]/div/main/section/div[1]/div[1]/article/div[1]/div');
    return await element.click();
});

When('I enter second page content', async function () {
    let element = await this.driver.$('/html/body/div[2]/div/main/section/div[1]/div[1]/article/div[1]/div/p[2]');
    return await element.click();
});

When('I click publish', async function () {
    let element = await this.driver.$('/html/body/div[2]/div/main/section/header/section/div/div[1]');
    return await element.click();
});

When('I confirm publish', async function () {
    let element = await this.driver.$('/html/body/div[1]/div/footer/button[2]');
    return await element.click();
});

When('I go back to page', async function () {
    let element = await this.driver.$('/html/body/div[2]/div/main/section/header/div/div[1]');
    return await element.click();
});

When('I select the first page', async function () {
    let element = await this.driver.$('/html/body/div[2]/div/main/section/section/ol/li[3]/a[1]');
    return await element.click();
});

When("I clear page name", async function () {
    let element = await this.driver.$('/html/body/div[2]/div/main/section/div[1]/div[1]/textarea');
    return await element.setValue("");
});

When("I clear page description", async function () {
    let element = await this.driver.$('/html/body/div[2]/div/main/section/div[1]/div[1]/article/div[1]/div');
    return await element.setValue("");
});

When('I click the settings page', async function () {
    let element = await this.driver.$('/html/body/div[2]/div/main/section/header/section/button');
    return await element.click();
});

When('I click the delete page button', async function () {
    let element = await this.driver.$('/html/body/div[4]/div/div/div/div/div/div/div/div[1]/div[2]/form/button');
    return await element.click();
});

When('I click the confirm delete page button', async function () {
    let element = await this.driver.$('/html/body/div[4]/div[2]/div/div/div/div[2]/section/div[2]/button[2]');
    return await element.click();
});

When('I click the modal pop-up', async function () {
    let element = await this.driver.$('/html/body/div[4]/div[2]/div/div/div/div[2]/section');
    return await element.click();
});


// Enter Modificaction account

When('I click the expand title', async function () {
    let element = await this.driver.$('/html/body/div[2]/div/main/section/div/section/div[2]/div[1]/div[2]/button');
    return await element.click();
});

When('I click the expand site timezone', async function () {
    let element = await this.driver.$('/html/body/div[2]/div/main/section/div/section/div[2]/div[2]/div[2]/button');
    return await element.click();
});

When('I click the dropdown timezones section', async function () {
    let element = await this.driver.$('/html/body/div[2]/div/main/section/div/section/div[2]/div[2]/div[1]/div[3]/div/div/div/span/select');
    return await element.click();
});

When('I click the item {kraken-string} of the timezone list', async function (position) {
    let element = await this.driver.$(`/html/body/div[2]/div/main/section/div/section/div[2]/div[2]/div[1]/div[3]/div/div/div/span/select/option[${position}]`);
    return await element.click();
});

When('I click the title of the site field', async function () {
    let element = await this.driver.$('/html/body/div[2]/div/main/section/div/section/div[2]/div[1]/div[1]/div[3]/div/div/div[1]/input');
    return await element.setValue("");
});

When('I click the welcome of the site field', async function () {
    let element = await this.driver.$('/html/body/div[2]/div/main/section/div/section/div[2]/div[1]/div[1]/div[3]/div/div/div[2]/input');
    return await element.setValue("");
});

When('I click the save settings general config', async function () {
    let element = await this.driver.$('/html/body/div[2]/div/main/section/div/header/section/button');
    return await element.click();
});

When('I click the first option on the search menu', async function () {
    let element = await this.driver.$('/html/body/div[4]/div/div/div/div/div[2]/section/div/div[1]/div/div[2]/div/ul/li/ul/li[1]');
    return await element.click();
});

When('I click on the user configuration', async function () {
    let element = await this.driver.$('/html/body/div[2]/div/nav[1]/section/div[2]/div[1]');
    return await element.click();
});

When('I click on your profile configuration', async function () {
    let element = await this.driver.$('/html/body/div[1]/div/ul/li[4]/a');
    return await element.click();
});

Then('I click on Old Password inputbox', async function () {
    let element = await this.driver.$('/html/body/div[2]/div/main/section/section/div/form[2]/div/fieldset/div[1]/input');
    return await element.click();
});

Then('I click on New Password inputbox', async function () {
    let element = await this.driver.$('/html/body/div[2]/div/main/section/section/div/form[2]/div/fieldset/div[2]/input');
    return await element.click();
});

Then('I click on Verify Password inputbox', async function () {
    let element = await this.driver.$('/html/body/div[2]/div/main/section/section/div/form[2]/div/fieldset/div[3]/input');
    return await element.click();
});

Then('I click to save the new password', async function () {
    let element = await this.driver.$('/html/body/div[2]/div/main/section/section/div/form[2]/div/fieldset/div[4]/button');
    return await element.click();
});

Then('I click to save the general button', async function () {
    let element = await this.driver.$('/html/body/div[2]/div/main/section/header/section/button');
    return await element.click();
});

Then('I load an image', async function () {
    let element = await this.driver.$('/html/body/div[2]/div/main/section/section/div/form[2]/div/fieldset/div[4]/button');
    let url = 'https://img.freepik.com/foto-gratis/camisetas-blancas-espacio-copia-sobre-fondo-gris_53876-104920.jpg?w=1380&t=st=1683429492~exp=1683430092~hmac=b2accc865950205473f883d7d5c4dbd8076329d718a58963b337c226c5997d50'
    let imageData = await new Promise((resolve, reject) => {
        https.get(url, (res) => {
            let data = [];
            res.on('data', (chunk) => {
                data.push(chunk);
            });
            res.on('end', () => {
                resolve(Buffer.concat(data));
            });
        }).on('error', (err) => {
            reject(err);
        });
    });
    return await element.click();
});

// Enter Member Routes

When('I click the new member button', async function () {
    let element = await this.driver.$('/html/body/div[2]/div/main/section/header/section/a');
    return await element.click();
});

When('I click name field member', async function () {
    let element = await this.driver.$('/html/body/div[2]/div/main/section/form/div/div/div[1]/div[1]/div[3]/input');
    return await element.setValue("");
});

When('I click email field member', async function () {
    let element = await this.driver.$('/html/body/div[2]/div/main/section/form/div/div/div[1]/div[1]/div[4]/input');
    return await element.click();
});

When('I click save member button', async function () {
    let element = await this.driver.$('/html/body/div[2]/div/main/section/header/section/button');
    return await element.click();
});

When('I click the first memeber', async function () {
    let element = await this.driver.$('/html/body/div[2]/div/main/section/section/section[2]/ol/li[2]/a[1]');
    return await element.click();
});

When('I click the delete member button', async function () {
    let element = await this.driver.$('/html/body/div[2]/div/main/section/div/button');
    return await element.click();
});

When('I click the confirm delete member button', async function () {
    let element = await this.driver.$('/html/body/div[4]/div/div/div/div/div[2]/section/div[2]/button[2]');
    return await element.click();
});

When('I click the select tag on member', async function () {
    let element = await this.driver.$('/html/body/div[2]/div/main/section/form/div/div/div[2]/div/div[1]/div/div[1]/ul/input');
    return await element.click();
});

When('I click all label on members', async function () {
    let element = await this.driver.$('/html/body/div[2]/div/main/section/header/section/span[1]/button');
    return await element.click();
});

When('I click add label on members', async function () {
    let element = await this.driver.$('/html/body/div[2]/div/main/section/header/section/span[1]/div/ul[2]/li/a');
    return await element.click();
});

When('I click label name on members', async function () {
    let element = await this.driver.$('/html/body/div[4]/div/div/div/div/div[2]/section/div[1]/fieldset/div/input');
    return await element.click();
});

When('I click save  label name on members', async function () {
    let element = await this.driver.$('/html/body/div[4]/div/div/div/div/div[2]/section/div[2]/button[2]');
    return await element.click();
});

When('I click description name on members', async function () {
    let element = await this.driver.$('/html/body/div[2]/div/main/section/form/div/div/div[2]/div/div[2]/textarea');
    return await element.click();
});

// Integration Section

When('I select add custom integration', async function () {
    let element = await this.driver.$('/html/body/div[2]/div/main/section/section[2]/div/div[4]/a/article');
    return await element.click();
});

When('I confirm the creation of the integration', async function () {
    let element = await this.driver.$('/html/body/div[4]/div/div/div/div/div[2]/section/div[2]/button[2]');
    return await element.click();
});

When('I Select the code injection Header', async function () {
    let element = await this.driver.$('/html/body/div[2]/div/main/section/section/form/fieldset/div/div[1]/div/div/div[6]');
    return await element.click();
});

When('I confirm the creation of the code injection', async function () {
    let element = await this.driver.$('/html/body/div[2]/div/main/section/header/section/button');
    return await element.click();
});

// Enter config Routes

When('I enter View Site section', async function () {
    let element = await this.driver.$('/html/body/div[2]/div/nav[1]/section/div[1]/ul[1]/li/span/a');
    return await element.click();
});

When('I enter Design section', async function () {
    let element = await this.driver.$('/html/body/div[2]/div/nav[1]/section/div[1]/ul[3]/li[3]/a');
    return await element.click();
});

When('I enter Code Injection section', async function () {
    let element = await this.driver.$('/html/body/div[2]/div/nav[1]/section/div[1]/ul[3]/li[4]/a');
    return await element.click();
});

When('I enter Integration section', async function () {
    let element = await this.driver.$('/html/body/div[2]/div/nav[1]/section/div[1]/ul[3]/li[5]/a');
    return await element.click();
});

When('I enter Labs section', async function () {
    let element = await this.driver.$('/html/body/div[2]/div/nav[1]/section/div[1]/ul[3]/li[6]/a');
    return await element.click();
});

When('I enter Search Site section', async function () {
    let element = await this.driver.$('/html/body/div[2]/div/nav[1]/header/div[2]');
    return await element.click();
});

When('I enter General Config section', async function () {
    let element = await this.driver.$('/html/body/div[2]/div/nav[1]/section/div[1]/ul[3]/li[2]/a');
    return await element.click();
});

When('I enter Member section', async function () {
    let element = await this.driver.$('/html/body/div[2]/div/nav[1]/section/div[1]/ul[2]/li[5]/a');
    return await element.click();
});

When('I enter config ghost', async function () {
    let element = await this.driver.$('#ember48');
    return await element.click();
});

When('I enter Labs ghost', async function () {
    let element = await this.driver.$('/html/body/div[2]/div/nav[1]/section/div[1]/ul[3]/li[6]/a');
    return await element.click();
});

When('I enter my profile ghost', async function () {
    let element = await this.driver.$('/[@id="ember-basic-dropdown-content-ember24"]/ul/li[4]');
    return await element.click();
});

When('I enter my integration ghost', async function () {
    let element = await this.driver.$('/html/body/div[2]/div/nav[1]/section/div[1]/ul[3]/li[5]/a');
    return await element.click();
});

When('I enter my code injection ghost', async function () {
    let element = await this.driver.$('/html/body/div[2]/div/nav[1]/section/div[1]/ul[3]/li[4]/a');
    return await element.click();
});

When('I enter my code injection ghost footer', async function () {
    let element = await this.driver.$('/html/body/div[2]/div/main/section/section/form/fieldset/div/div[2]/div/div/div[6]/div[1]/div/div/div/div[5]/div/pre');
    return await element.click();
});

When('I enter my code injection ghost with limit', async function () {
    let element = await this.driver.$('/html/body/div[2]/div/main/section/section/form/fieldset/div/div[1]/div/div/div[6]');
    element.click()
    return await element.setValue("abcderiopmabcde".repeat(150));
});

// When('I enter my code injection ghost with limit', async function () {
//     let element = await this.driver.$('/html/body/div[2]/div/main/section/section/form/fieldset/div/div[1]/div/div/div[6]');
//     element.click()
//     return await element.setValue("abcderiopmabcde".repeat(150));
// });

When('I select the route item for the route', async function () {
    let element = await this.driver.$('/html/body/div[2]/div/main/section/section/div[2]/form/div[2]/div/span[2]/input');
    return await element.click();
});

When('I select the name item for the route', async function () {
    let element = await this.driver.$('/html/body/div[2]/div/main/section/section/div[2]/form/div[2]/div/span[1]/input');
    return await element.click();
});

When('I click the save design button', async function () {
    let element = await this.driver.$('/html/body/div[2]/div/main/section/header/section/button');
    return await element.click();
});

When('I enter members labs section', async function () {
    let element = await this.driver.$('/html/body/div[2]/div/main/section/section/a');
    return await element.click();
});

When('I click the customize portal section', async function () {
    let element = await this.driver.$('/html/body/div[2]/div/main/section/section/div[2]/div/div/div/div/section[1]/div/div[2]/button');
    return await element.click();
});

When('I click the customize color section', async function () {
    let element = await this.driver.$('/html/body/div[4]/div/div/div/div/div[2]/section/div/div/div[1]/div/fieldset/div[2]/div[1]/div/div/div/div/input');
    return await element.click();
});

When('I click on the full name field customization', async function () {
    let element = await this.driver.$('/html/body/div[2]/div/main/section/section/div/form[1]/div/fieldset/div[1]/input');
    return await element.click();
});

When('I click on the switch color theme', async function () {
    let element = await this.driver.$('/html/body/div[2]/div/nav[1]/section/div[1]/ul[3]/li[6]/button');
    return await element.click();
});


