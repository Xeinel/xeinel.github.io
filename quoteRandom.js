function addQuote()
{
    var quote = new Map();
    quote.set('La technologie seule ne suffit pas','Steve Jobs.');
    quote.set('The best way to predict the future is to invent it','Alan Kay.');
    quote.set('My view is that there is no bad time to inovate','Jeff Bezos.');

    return quote;
}

export function quoteRandom()
{
    const quote = addQuote();
    const random = Math.floor(Math.random() * quote.size);
    let i = 0;
    var qu;
    var au;
    for(const toto of quote)
    {
        if(i == random)
        {
            return [toto[0],toto[1]];
        }
        i += 1;
    }
}
                