function fatorial(n){
    if ( n == 1) {
        return 1
    } else {
        return n * fatorial(n-1)
    }
}
console.log (fatorial(5))




//5x(5-1)

/*
5 * (5-1)
5! = 5x4x3x2x1\
5! = 5x4!
n! = n x(n-1)!
1! = 1

 */
        /*
        A 5ª chamada retornará (5 * (5 - 1))     // num = 5 * 4
        A 4ª chamada retornará (20 * (4 - 1))    // num = 20 * 3
        A 3ª chamada retornará (60 * (3 - 1))    // num = 60 * 2
        A 2ª chamada retornará (120 * (2 - 1))   // num = 120 * 1
        A 1ª chamada retornará (120)             // num = 120

        
        Cada chamada: num === "?"      	         num * factorialize(num - 1)
        1ª chamada – factorialize(5) retornará    5  * factorialize(5 - 1) // factorialize(4)
        2ª chamada – factorialize(4) retornará    4  * factorialize(4 - 1) // factorialize(3)
        3ª chamada – factorialize(3) retornará    3  * factorialize(3 - 1) // factorialize(2)
        4ª chamada – factorialize(2) retornará    2  * factorialize(2 - 1) // factorialize(1)
        5ª chamada – factorialize(1) retornará    1  * factorialize(1 - 1) // factorialize(0)
        */