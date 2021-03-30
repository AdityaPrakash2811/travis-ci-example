import { Selector } from 'testcafe';

//Alternative 1

/*fixture `Getting Started`
    .page `http://devexpress.github.io/testcafe/example`


test('My first test', async t => {
    await t
    .wait(4000)
});*/


//Alternative 2 (for each test to have diff. landing page)
fixture `Getting Started`

test
.page `http://devexpress.github.io/testcafe/example`
('My first test', async t =>{
    await t
    .wait(4000)
});