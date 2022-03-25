export function quoteRandom()
{
    var quote = new Map();
    quote.set('La technologie seule ne suffit pas','Steve Jobs.');
    quote.set('The best way to predict the future is to invent it','Alan Kay.');
    quote.set('My view is that there is no bad time to inovate','Jeff Bezos.');
    const random = Math.floor(Math.random() * quote.size);
    let i = 0;
    var qu;
    var au;
    for(var [q,author] of quote)
    {
        if(i == random)
        {
            qu = q;
            au = author;
        }
        i += 1;
    }
    const toto = [qu,au];
    return toto;
}

var toto = quoteRandom();
console.log(toto);
                