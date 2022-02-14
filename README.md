# Blackjack-js

![Blackjack](assets/screenshots/blackjack.png)

## How to play

### Inicial

1. Esta versión de Blackjack se juega con 6 barajas y no permite apostar.
1. Los ases cuentan como 1 u 11 puntos (lo que sea mejor), del 2 al 9 cuentan según su valor y los 10 y las figuras cuentan cada uno 10 puntos.
1. Cada mano se valora como la suma de las cartas individuales a excepción del Blackjack (un as y cualquier carta de 10 puntos)
   - Un as y cualquier carta de 10 puntos se clasifican más alto que cualquier otra mano logrando 21 puntos
1. El objetivo del juego es ganar tantas rondas como sea posible venciendo al delear.
1. Una ronda se gana teniendo un valor total de la mano cercano o de 21 sin exceder 21 **y** superando el valor de la mano del delear

### Como se juega cada ronda

1. Empezar una nueva ronda pulsando: 'New round'.
1. El dealer (la casa) revela una carta para el y otras dos en la mano del jugador.
1. Puedes elegir entre dos opciones para continuar la ronda:
   - Hit: El dealer te da una carta más, aumentando el valor de tu mano. Puedes seguir
     pidiendo más cartas hasta que eligas plantarte (stand) o tu mano supere el valor de 21, en cuyo
     caso habrás perdido.
   - Stand: Decides plantarte con la mano que tienes y el dealer no te repartira más cartas, y
     el dealer comenzará su turno (hasta llegar a una puntación entre 17 y 21 el dealer seguirá
     añadiendo cartas a su mano).
1. Una vez todas las cartas esten repartidas se decidirá el ganador de la ronda.
1. Tú ganas si:
   - El valor de tu mano no excede 21 y el dealer si excede 21.
   - Tu mano no excede 21 y tiene un valor mayor a la mano del dealer.
