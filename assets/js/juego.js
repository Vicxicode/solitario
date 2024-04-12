

let deck = []
let tipos = [ 'C','H','S','D' ]
let especiales = [ 'A','K','Q','J' ]


const crearDeck = () => {

    for ( let i = 2; i <= 10; i++ ) {
        for ( let tipo of tipos ) {
            deck.push( i + tipo )
        }
    }

    for ( let esp of especiales ) {
        for ( let tipo of tipos ) {
            deck.push( esp + tipo )
        }
    }

    deck = _.shuffle( deck )

    console.log( deck );
    
    return deck

}

crearDeck()

const pedirCarta = () => {

    if ( deck.length === 0 ) {
        throw 'NO HAY MAS CARTAS'
    } 

    const carta = deck.pop() 
    console.log( deck );
    console.log( carta );

}

pedirCarta()
